<?php


namespace App\Modules\Admin\Bills\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SupplementalBilling;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Supplier;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Products\Models\Product;
use App\Modules\Admin\Bills\Models\Bill;
use App\Modules\Admin\Bills\Models\BillDetail;
use App\Traits\AccountTrait;
use App\Traits\TranstactionTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Unique;
use Symfony\Component\Mime\Message;

class BillController extends Controller
{
    use AccountTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function all(Request $request)
    {

        //Artisan::call('db:seed', ['--force' => true, 'slug' => true]);

        $search  = json_decode($request->search, true);



        $bills = Bill::where('bills.company_id', $request['company_id'])->where('bills.document_type_id', $search['document_type_id']);

        if ($request['person_id'])
            $bills = $bills->where('bills.person_id', $request['person_id']);
        $bills = $bills->leftJoin('people', 'people.id', 'bills.person_id')
            ->select('bills.*', 'people.company_name', 'people.name');



        if ($search && $search['company_name']) {

            $company_name = $search['company_name'];
            $bills = $bills->whereHas('person', function ($q) use ($company_name) {
                $q->where('company_name', 'like', '%' . $company_name . '%');
            });
        };

        if ($search && $search['reference'])
            $bills = $bills->where('reference', 'like', '%' . $search['reference'] . '%');



        if ($search && $search['status_id'])
            $bills = $bills->where('status_id', $search['status_id']);
        if ($search && $search['minimum'])
            $bills = $bills->where('total_amount', '>=', $search['minimum']);
        if ($search && $search['maximum'])
            $bills = $bills->where('total_amount', '<=', $search['maximum']);
        if ($search && $search['date_from'])
            $bills = $bills->where('issue_date', '>=', $search['date_from']);
        if ($search && $search['date_to'])
            $bills = $bills->where('issue_date', '<=', $search['date_to']);





        $paid_amount = 0;


        if ($request->has('itemsPerPage'))
            $bills = $bills->orderBy('id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        else
            $bills = $bills->orderBy('id', 'DESC')->paginate(10);



        //$bills = $bills->get();

        foreach ($bills as &$bill) {

            $supp_bills = DB::table('supplemental_billings')
                ->where('document_id', $bill->id)
                ->where('document_type_id', 1)
                ->get();
            //return $supp_bills;
            $paid_amount += $bill->paid_amount;
            foreach ($supp_bills as $supp_bill) {
                $paid_amount += $supp_bill->amount;
            }
            $bill['remainder'] = $bill->total_amount  - $paid_amount;
            //---reset
            $paid_amount = 0;
        }
        return $bills;
    }
    public function print(Request $request, $id)
    {
        $document_type_id = $request->document_type_id;

        $bill = DB::table('bills')
            ->select(
                'bills.*',
                'people.company_name as person_company_name',
                'people.name as person_name',
                'people.phone01 as person_phone01',
                'people.email as person_email',
                'company.company_name as company_name',
                'company.address as company_address',
                'company.phone01 as company_mobile',
                'company.website as company_website',
                'company.email as company_email',
            )->where('bills.id', $id)->where('bills.document_type_id', $document_type_id);

        //$bill =  DB::table('bills')->where('bills.id', $id)->where('bills.document_type_id', $document_type_id);

        $bill = $bill->leftjoin('people', 'bills.person_id', '=', 'people.id');
        $bill = $bill->leftjoin('people as company', 'bills.company_id', '=', 'people.id');

        $bill = $bill->first();

        if (!$bill) return [];
        // هنا اعتمدت على دوكومينت بدون التايب وهو خطأ،، لكن يعمل لأنه حاليا لايوجد دوكومينت غير الفواتير تذكر هذا في المستقبل

        $receipts = SupplementalBilling::where('document_id', $bill->id)->sum('amount');
        $bill->receipts = $receipts;
        $details =  DB::table('bill_details')
            ->select(
                'bill_details.*',
                'products.ar_name as ar_name',
                'products.barcode as barcode',

            );
        $details = $details->where('document_id', $id)
            ->where('document_type_id', $document_type_id)
            ->leftjoin('products', 'bill_details.product_id', '=', 'products.id')
            ->leftjoin('prdct_units', 'bill_details.unit_id', '=', 'prdct_units.id')
            ->get();


        $bill->details = $details;

        return $bill;
        $units = [];
        foreach ($details as &$detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }
            $detail->units = $units;
        }

        $bill->details = $details;

        return [
            'bill' => $bill,
            'people' => Person::where('company_id', $request['company_id'])->where('is_supplier', '1')->get(),
            'accounts' => $this->cashAndBanks()

        ];
    }
    public function index(Request $request, $id)
    {
        $document_type_id = $request->document_type_id;
        $person = 'supplier';

        if ($document_type_id == 2 || $document_type_id == 4) $person = 'customer';




        if ($id == -1) {



            return  [
                'bill' => ['reference' => $this->new($request->all()), 'is_new' => true],
                'people' => Person::where('company_id', $request['company_id'])->where('is_' . $person, '1')->get(),
                'accounts' => $this->cashAndBanks()

            ];
        }

        $document_type_id = $request->document_type_id;

        $bill =  DB::table('bills')->where('id', $id)->where('document_type_id', $document_type_id)->first();

        if (!$bill) return [];

        $methods = Transaction::where('document_id', $id)
            ->where('document_type_id', $document_type_id)
            ->where('debit', -1)
            ->get();

        foreach ($methods as &$method) {
            $method['amount'] = $method['credit'] + $method['debit'] + 1;
        }

        $bill->payment_methods = $methods;
        $details =  DB::table('bill_details')
            ->where('document_id', $id)
            ->where('document_type_id', $document_type_id)
            ->leftjoin('products', 'bill_details.product_id', '=', 'products.id')
            ->get();

        $units = [];
        foreach ($details as &$detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }
            $detail->units = $units;
        }

        $bill->details = $details;
        $return_request = [];
        if ($request->return)
            if ($document_type_id == 1 || $document_type_id == 2) {
                $return_request['document_type_id'] = $document_type_id + 2;
                $bill->reference = $this->new($return_request);
            }
        return [
            'bill' => $bill,
            'people' => Person::where('company_id', $request['company_id'])->where('is_' . $person, '1')->get(),
            'accounts' => $this->cashAndBanks()

        ];
    }

    public function new($request)
    {
        $reference = 0;
        $prefix = 'PUR';
        if ($request['document_type_id'] == 2)
            $prefix = 'INV';
        if ($request['document_type_id'] == 3)
            $prefix = 'PRT';
        if ($request['document_type_id'] == 4)
            $prefix = 'IRT';

        $bill = Bill::orderByRaw('SUBSTRING(reference, 4)+0  desc')->where('reference', 'LIKE', '%' . $prefix . '%')->first();

        
        if ($bill) $reference = substr($bill->reference, 3) + 1; // new reference;
        return $prefix . $reference;
    }
    public function index2(Request $request)
    {
        $bills =  DB::table('bills')->get();
        foreach ($bills as &$bill) {

            $details =  DB::table('bill_details')
                ->where('document_id', 1)
                ->where('document_type_id', 1)
                ->leftjoin('products', 'bill_details.product_id', '=', 'products.id')
                ->get();



            $units = [];
            foreach ($details as &$detail) {
                $pivots = DB::table('prdct_units_products')->where('product_id', $detail->id)->get();
                foreach ($pivots as &$pivot) {
                    $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                    //return $unit[0];
                    $unit[0]->pivot = $pivot;
                    $units[] = $unit[0];
                }


                $detail->units = $units;
            }


            $bill->details = $details;
        }
        return $bills;
    }
    public function index1(Request $request)
    {


        $bills = Bill::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('details')

            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'bills' => $bills,
        ]);

        //
        //return view('Bills::index');


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function stockVerification($document)
    {


        
        $message = [];
        $valid = true;
        $counter = 0;

        foreach ($document->details as $detail) {

            // check detail in database
            $old_detail = BillDetail::where([

                'company_id' => $document['company_id'],
                'product_id' => $detail['product_id'],
                'expires_at' => $detail['expires_at'],
            ])->where('sum_quantity_in_minor_unit', '>=', $detail['quantity_in_minor_unit']);


            if (!$old_detail->exists()) {

                $message[] = $counter;
                $valid = false;
            }
            $counter++;
        }

        return ['valid' => $valid, 'message' => $message];
    }
    public function isUnique($document)
    {

        if (Bill::where('reference', $document->reference)->exists()) {

            return false;
        }
        return true;
    }
    public function store(Request $request)
    {




        return $request;


        if (!$request->is_input) { // therenis enogh resources to output?

            $message = $this->stockVerification($request);
            if (!$message['valid']) {
                array_unshift($message['message'], $this->isUnique($request));
                return $message;
            }
        }
        
        if (!$this->isUnique($request)) {
            
            $message[0] = $this->isUnique($request);
            return ['valid' => false, 'message' => $message];
        }



        /* validation */
        /* $rules = [
            "description" => "required",
            "paid_amount" => "min:6"

        ];

        $validator =  Validator::make(
            $request->all(),
            $rules
        );
        if ($validator->fails()){
            return $validator->errors();
        }
*/





        $request['remaining_amount_at_all'] = $request['remaining_amount'];
        $bill = Bill::create($request->all());
        //discount in pos system! 
        if ($request['discount'] >0 )
            $request = $this->spreadDiscount($request);

        $this->storeLinkedData($request, $bill);
        return ['valid' => true];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function show(Bill $bill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function spreadDiscount($request)
    {

        foreach ($request->details as $detail) {

            
        }



        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // delete all transactions 
        $request['remaining_amount_at_all'] = $request['remaining_amount'];
        $this->deleteLinkedData($request);
        $bill = Bill::find($request->id);

        $bill->update($request->all());

        $this->storeLinkedData($request, $bill);

        //----



        return $bill;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {

        $this->deleteLinkedData($request);
        Bill::find($request->id)->delete();
        // delete all transactions 
        //return $request->id;
        return $this->all($request);
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
    private function storeLinkedData($document, $bill)
    {

        
        /*
        1 - purchase
        2 - invoice
        3 - purchase return 
        4 - invoice  return 
        */

        /*dealing with discount.
        debit
            discount --- amoun. 
            customer----
        credit 
            inventory.       
        */

        

        





        $debit = $credit = 0;
        // input or output inventory 
        if ($bill['document_type_id'] == 1 || $bill['document_type_id'] == 4) {
            $credit = $document['total_amount'];
            $inventory_increase = true;
        } else if ($bill['document_type_id'] == 2 || $bill['document_type_id'] == 3) {
            $debit = $document['total_amount'];
            $inventory_increase = false;
        }

        // customer  or supplier we dealing with
        if ($bill['document_type_id'] == 1 || $bill['document_type_id'] == 3) {
            $person_account_id = Person::find($document->person_id)['supplier_account_id'];
        } else if ($bill['document_type_id'] == 2 || $bill['document_type_id'] == 4) {
            $person_account_id = Person::find($document->person_id)['customer_account_id'];
        }
        // تحميل كل الفاتورة على العميل أو للمورد
        $person_account = [
            "company_id" => $bill['company_id'],
            "account_id" => $person_account_id,
            "debit" =>  $debit,
            "credit" => $credit,
            "document_id" => $bill->id,
            "document_type_id" => $bill->document_type_id,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'مورد أو عميل بعدين نشوف',
        ];
        $this->addTransactionEntry($person_account);
        // طرق الدفع التي تم تحصيل الحساب بها للعميل أو دفعها للمورد
        if ($document['paid_amount'] != 0) {
            if ($document['only_cash']) { // إذا حدث زيادة وأنا دفعت فحساب الشخص أيا كان هو مدين
                $person_account = [
                    "company_id" => $bill['company_id'],
                    "account_id" => $person_account_id,
                    "debit" =>   $inventory_increase ? $document['paid_amount'] : 0,
                    "credit" => !$inventory_increase ? $document['paid_amount'] : 0,
                    "document_id" => $bill->id,
                    "document_type_id" => $bill->document_type_id,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'عميل أو مورد بنشوف بعدين',
                ];
                $this->addTransactionEntry($person_account);
                $cash = [
                    "company_id" => $bill['company_id'],
                    "account_id" => 4,
                    "debit" =>  !$inventory_increase ? $document['paid_amount'] : 0,
                    "credit" =>  $inventory_increase ? $document['paid_amount'] : 0,
                    "document_id" => $bill->id,
                    "document_type_id" => $bill->document_type_id,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => $inventory_increase ? 'مدفوع من العميل للصندوق' : 'مدفوعة للمورد من الصندوق',
                ];
                $this->addTransactionEntry($cash);
            } else {
                $payment_methods = $document->payment_methods;

                foreach ($payment_methods as $payment_method) {

                    if ($payment_method['account_id'] && $payment_method['amount'] > 0) {

                        $person_account = [
                            "company_id" => $bill['company_id'],
                            "account_id" => $payment_method['account_id'],
                            "debit" =>   $inventory_increase ? -1 : $payment_method['amount'],
                            "credit" => !$inventory_increase ? -1 : $payment_method['amount'],
                            "document_id" => $bill->id,
                            "document_type_id" => $bill->document_type_id,
                            "currency_code" => 1,
                            "currency_rate" => 1,
                            "description" => 'اسماء الحسابات التي الدفع لها أو منها',
                        ];
                        $this->addTransactionEntry($person_account);
                        $person_account = [
                            "company_id" => $bill['company_id'],
                            "account_id" => $person_account_id,
                            "debit" => !$inventory_increase ? -1 : $payment_method['amount'],
                            "credit" => $inventory_increase ? -1 : $payment_method['amount'],
                            "document_id" => $bill->id,
                            "document_type_id" => $bill->document_type_id,
                            "currency_code" => 1,
                            "currency_rate" => 1,
                            "description" => 'عميل أو مورد بنشوف بعدين',

                        ];
                        $this->addTransactionEntry($person_account);
                    }
                }
            }
        }

        // مصاريف إضافية حاليا لا استخدمها
        if ($document['additional_expenses'] > 0) {
            $additional_expenses_from_account_id = $document['additional_expenses_from_account_id'];
            $additional_expenses = [
                "company_id" => $bill['company_id'],
                "account_id" => $additional_expenses_from_account_id, //5103
                "debit" =>  $inventory_increase ? 0 : $document['additional_expenses'],
                "credit" => !$inventory_increase ? 0 : $document['additional_expenses'],
                "document_id" => $bill->id,
                "document_type_id" => $bill->document_type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'مصاريف إضافية',
            ];
            $this->addTransactionEntry($additional_expenses);
            $additional_expenses = [
                "company_id" => $bill['company_id'],
                "account_id" => 63, //5103
                "debit" =>  $inventory_increase ? 0 : $document['additional_expenses'],
                "credit" => !$inventory_increase ? 0 : $document['additional_expenses'],
                "document_id" => $bill->id,
                "document_type_id" => $bill->document_type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'مصاريف إضافية',
            ];
            $this->addTransactionEntry($additional_expenses);
        }


        // محاسبة المخزون والضرائب
        foreach ($document->details as $detail) {

            $detail['document_type_id'] = $document->document_type_id;
            $product = Product::find($detail['id']);
            //---- for product that dosnot have exp_date
            if (!$product->has_expiration_date)
                $detail['expires_at'] = null;





            $vat_account_id = 28; // حساب الضرائب
            if ($detail['tax_value'] > 0) {
                $entry = [
                    "company_id" => $bill['company_id'],
                    "account_id" => $vat_account_id,
                    "debit" =>  $inventory_increase ? $detail['tax_value'] : 0,
                    "credit" => !$inventory_increase ? $detail['tax_value'] : 0,
                    "document_id" => $bill->id,
                    "document_type_id" => $bill->document_type_id,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'حساب الضريبة',
                ];
                $this->addTransactionEntry($entry);
            }

            //  get new  (average) cost

            $inventory_account_id = Inventory::find($detail['inventory_id'])['account_id'];


            // اولا نعالج المشتريات ومردودات المشتريات يعني الاشياء التي تخص المورد

            if ($bill['document_type_id'] == 1 || $bill['document_type_id'] == 3) {

                if ($bill['document_type_id'] == 1) {
                    $product_quantity_sum = $detail['quantity_in_minor_unit'] + $product['quantity_in_minor_unit'];
                    $product_cost_sum = $detail['total_befor_tax'] + $product['quantity_in_minor_unit'] * $product['average_cost'];
                    $average_cost = $product_cost_sum / $product_quantity_sum;
                }
                if ($bill['document_type_id'] == 3) {
                    $product_quantity_sum = $product['quantity_in_minor_unit'] -  $detail['quantity_in_minor_unit']; // ألكمية المتبقية بعد أخذ مرتجع الشراء من الفاتورة
                    $product_cost_sum = $product['quantity_in_minor_unit'] * $product['average_cost'] - $detail['total_befor_tax'];
                    if (!($product_quantity_sum == 0))
                        $average_cost = $product_cost_sum / $product_quantity_sum;
                }


                $product->update(['average_cost' => $average_cost]);


                $entry = [
                    "company_id" => $bill['company_id'],
                    "account_id" => $inventory_account_id,
                    "debit" =>   $inventory_increase ? $detail['total_befor_tax'] : 0,
                    "credit" => !$inventory_increase ? $detail['total_befor_tax'] : 0,
                    "document_id" => $bill->id,
                    "document_type_id" => $bill->document_type_id,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'حساب المخزون',
                ];
                $this->addTransactionEntry($entry);
            }
            // ثانيا نعالج المبيعات  ومردودات المبيعات

            if ($bill['document_type_id'] == 2 || $bill['document_type_id'] == 4) {


                $cogs_account_id = $product['cogs_account_id'];
                $sold_account_id = $product['sold_account_id'];
                $average_cost = $product['average_cost'];

                // حساب المبيعات للممنتج مع الاخذ بان العميل قد تم تحميله الفاتورة في الأعلى

                $entry = [
                    "company_id" => $bill['company_id'],
                    "account_id" => $sold_account_id,
                    "debit" =>   !$inventory_increase ? 0 : $detail['total_befor_tax'],
                    "credit" =>   $inventory_increase ? 0 : $detail['total_befor_tax'],
                    "document_id" => $bill->id,
                    "document_type_id" => $bill->document_type_id,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'حساب المبيعات للمنتج',
                ];
                $this->addTransactionEntry($entry);
                // الان نحاسب المخزون بالتكلفة (التكلفة يعني القيمة المنصرفة من المخزن)
                $entry = [
                    "company_id" => $bill['company_id'],
                    "account_id" => $cogs_account_id,
                    "debit" =>  $inventory_increase ? 0 : ($average_cost * $detail['quantity_in_minor_unit']),
                    "credit" => $inventory_increase ? ($average_cost * $detail['quantity_in_minor_unit']) : 0,
                    "document_id" => $bill->id,
                    "document_type_id" => $bill->document_type_id,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'حساب تكلفة المبيعات',
                ];
                $this->addTransactionEntry($entry);
                $entry = [
                    "company_id" => $bill['company_id'],
                    "account_id" => $inventory_account_id,
                    "debit" =>  $inventory_increase ? ($average_cost * $detail['quantity_in_minor_unit']) : 0,
                    "credit" => $inventory_increase ? 0 : ($average_cost * $detail['quantity_in_minor_unit']),
                    "document_id" => $bill->id,
                    "document_type_id" => $bill->document_type_id,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'حساب المخزون',
                ];
                $this->addTransactionEntry($entry);
            }

            $inventory_increase ?
                $product->increment('quantity_in_minor_unit', $detail['quantity_in_minor_unit']) :
                $product->decrement('quantity_in_minor_unit', $detail['quantity_in_minor_unit']);


            $old_detail = BillDetail::where([
                'company_id' => $bill['company_id'],
                'product_id' => $detail['product_id'],
                'expires_at' => $detail['expires_at'],
            ])->where('sum_quantity_in_minor_unit', '!=', -1);
            unset($detail['sum_quantity_in_minor_unit']);
            if (!$old_detail->exists()) {
                $detail['sum_quantity_in_minor_unit'] = $detail['quantity_in_minor_unit'];
            } else {

                $inventory_increase ?
                    $old_detail->increment(
                        'sum_quantity_in_minor_unit',
                        $detail['quantity_in_minor_unit']
                    ) :
                    $old_detail->decrement(
                        'sum_quantity_in_minor_unit',
                        $detail['quantity_in_minor_unit']
                    );
            }

            $bill->details()->create($detail);
        }
    }
    private function deleteLinkedData($document)
    {

        Transaction::where('document_type_id', $document->document_type_id)
            ->where('document_id', $document->id)
            ->delete();

        // delete bill details

        $details = BillDetail::where('document_type_id', $document->document_type_id)
            ->where('document_id', $document->id)->get();
        foreach ($details as $detail) {
            if ($detail['sum_quantity_in_minor_unit'] == -1) {
                BillDetail::where('product_id', $detail['product_id'])
                    ->where('sum_quantity_in_minor_unit', '!=', -1)
                    ->where('expires_at', $detail['expires_at'])
                    ->decrement(
                        'sum_quantity_in_minor_unit',
                        $detail['quantity_in_minor_unit']
                    );

                //and decrement quantity from product..... and then continue      
            } else {
                $sum =  $detail['sum_quantity_in_minor_unit'] - $detail['quantity_in_minor_unit'];
                $products = BillDetail::where([
                    'product_id' => $detail['product_id'],
                    'expires_at' => $detail['expires_at'],
                    'sum_quantity_in_minor_unit' => -1,
                ]);
                if ($products->exists())
                    $products->first()->update(['sum_quantity_in_minor_unit' => $sum]);
            }

            $detail->delete();

            Product::find($detail['product_id'])->decrement('quantity_in_minor_unit', $detail['quantity_in_minor_unit']);
        }
    }
}
