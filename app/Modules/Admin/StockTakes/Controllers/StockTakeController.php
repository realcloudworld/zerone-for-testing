<?php


namespace App\Modules\Admin\StockTakes\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\Bills\Models\BillDetail;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Supplier;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Products\Models\Product;
use App\Modules\Admin\StockTakes\Models\StockTake;
use App\Modules\Admin\StockTakes\Models\StockTakeDetail;
use App\Traits\AccountTrait;
use App\Traits\TranstactionTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Valuestore\Valuestore;

class StockTakeController extends Controller
{
    use AccountTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function all(Request $request)
    {


        $search  = json_decode($request->search, true);


        $stocktakes = StockTake::select(
            'stocktakes.*',
            'rev.ar_name  as revenue_account_name',
            'rev.ar_name  as expense_account_name',
        );


        $stocktakes = $stocktakes->leftJoin('accounts as rev', 'rev.id', 'stocktakes.revenue_account_id');
        $stocktakes = $stocktakes->leftJoin('accounts as exp', 'exp.id', 'stocktakes.expense_account_id');
        $stocktakes = $stocktakes->where('stocktakes.company_id', $request['company_id']);





        if ($search && $search['reference'])
            $stocktakes = $stocktakes->where('reference', 'like', '%' . $search['reference'] . '%');


        if ($search && $search['minimum'])
            $stocktakes = $stocktakes->where('total_amount', '>=', $search['minimum']);
        if ($search && $search['maximum'])
            $stocktakes = $stocktakes->where('total_amount', '<=', $search['maximum']);
        if ($search && $search['date_from'])
            $stocktakes = $stocktakes->where('issue_date', '>=', $search['date_from']);
        if ($search && $search['date_to'])
            $stocktakes = $stocktakes->where('issue_date', '<=', $search['date_to']);





        $paid_amount = 0;


        if ($request->has('itemsPerPage'))
            $stocktakes = $stocktakes->orderBy('id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        else
            $stocktakes = $stocktakes->orderBy('id', 'DESC')->paginate(10);



        //$stocktakes = $stocktakes->get();

        foreach ($stocktakes as &$stocktake) {

            $supp_bills = DB::table('supplemental_billings')
                ->where('document_id', $stocktake->id)
                ->where('document_type_id', 1)
                ->get();
            //return $supp_bills;
            $paid_amount += $stocktake->paid_amount;
            foreach ($supp_bills as $supp_bill) {
                $paid_amount += $supp_bill->amount;
            }
            $stocktake['remainder'] = $stocktake->total_amount  - $paid_amount;
            //---reset
            $paid_amount = 0;
        }
        return $stocktakes;
    }
    public function index(Request $request, $id)
    {
        $stocktake =  DB::table('stocktakes')->where('id', $id)->first();


        $methods = Transaction::where('document_id', $id)
            ->where('document_type_id', 1)
            ->where('debit', -1)
            ->get();

        $stocktake->payment_methods = $methods;






        $details =  DB::table('stocktake_details')
            ->where('document_id', $id)
            ->where('document_type_id', 1)
            ->leftjoin('products', 'stocktake_details.product_id', '=', 'products.id')
            ->get();



        // return      $details;


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


        $stocktake->details = $details;

        return [
            'stocktake' => $stocktake,
            'suppliers' => Person::where('company_id', $request['company_id'])->where('is_supplier', '1')->get(),
            'accounts' => $this->cashAndBanks()

        ];
    }

    public function index2(Request $request)
    {
        $stocktakes =  DB::table('stocktakes')->get();
        foreach ($stocktakes as &$stocktake) {

            $details =  DB::table('stocktake_details')
                ->where('document_id', 1)
                ->where('document_type_id', 1)
                ->leftjoin('products', 'stocktake_details.product_id', '=', 'products.id')
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


            $stocktake->details = $details;
        }
        return $stocktakes;
    }
    public function index1(Request $request)
    {


        $stocktakes = StockTake::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('stocktake_details')

            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'stocktakes' => $stocktakes,
        ]);

        //
        //return view('StockTakes::index');


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $reference = 0;
        $prefix = 'STK';

        $bill = StockTake::orderBy('reference', 'desc')->where('reference', 'LIKE', '%' . $prefix . '%')->first();

        if ($bill) $reference = substr($bill->reference, 3) + 1; // new reference;





        return [
            3 => $this->showAccounts(3),
            4 => $this->showAccounts(4),
            5 => $this->showAccounts(5),
            'inventories' => Inventory::all(),
            'reference' => $prefix . $reference
        ];



        array_merge(



            [['id' => 'owners', 'type' => 3, 'ar_name' => '???????????? ???????? ????????????']],
            [['id' => 'revenues', 'type' => 4, 'ar_name' => '???????????? ??????????????????']],
            $this->showAccounts(3),
            $this->showAccounts(4),
            $this->showAccounts(5),
            [['id' => 'expenses', 'type' => 4, 'ar_name' => '???????????? ??????????????????']],
        );



        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //return app('settings')['EUR'];


        $stocktake = StockTake::create($request->all());

        $details = $request->details;
        //$settings = app('settings')['EUR'];
        //$settings = Valuestore::make(storage_path('app/settings.json'));
        // $settings = new 
        // if ($settings->grouped)
        foreach ($details as $detail) {
            // if (app('settings')['products_grouped']) {
            //     $product = Product::find($detail['id']);
            //     $product->quantity_in_minor_unit = $detail['actual_quantity'];
            //     $product->save();
            // }


            /*  change quantity in product and details with same date  */
            // 1- in product
            $product = Product::find($detail['id']);
            $product->quantity_in_minor_unit = $detail['actual_quantity_in_minor_unit'];
            $product->save();
            //2- in details
            $b_detail = BillDetail::where('product_id', $detail['product_id'])
                ->where('sum_quantity_in_minor_unit', '!=', -1)
                ->where('expires_at', $detail['expires_at']);


            if ($b_detail->exists()) {

                $b_detail->update(
                    [
                        'sum_quantity_in_minor_unit' =>
                        $detail['actual_quantity_in_minor_unit']
                    ]
                );
            } else {

                $b_detail  = [
                    'company_id' => $request['company_id'],
                    'document_id' => $stocktake->id,
                    'document_type_id' => 30,
                    'product_id' => $detail['product_id'],
                    'expires_at' => $detail['expires_at'],
                    'quantity_in_minor_unit' => $detail['actual_quantity_in_minor_unit'],
                    'sum_quantity_in_minor_unit' => $detail['actual_quantity_in_minor_unit'],
                    'inventory_id' => $detail['inventory_id'],
                    'unit_id' => $detail['unit_id'],

                ];
                BillDetail::create($b_detail);
            }





            $difference_cost = ($detail['actual_quantity'] - $detail['current_quantity']) * $detail['average_cost'];

            if ($difference_cost < 0) {
                $entry = [
                    "company_id" => $request['company_id'],
                    "account_id" => $request->expense_account_id,
                    "debit" =>  abs($difference_cost),
                    "credit" => 0,
                    "document_id" => $stocktake->id,
                    "document_type_id" => 30,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => '???????? ?????????????? ?????????????? ??????????????',
                ];
                $this->addTransactionEntry($entry);


                $inventory_account_id = Inventory::find($detail['inventory_id'])['account_id'];
                $entry = [
                    "company_id" => $request['company_id'],
                    "account_id" => $inventory_account_id,
                    "debit" => 0,
                    "credit" => abs($difference_cost),
                    "document_id" => $stocktake->id,
                    "document_type_id" => 30,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => '?????? ???? ??????????????',
                ];
                $this->addTransactionEntry($entry);
            }
            if ($difference_cost > 0) {
                $entry = [
                    "company_id" => $request['company_id'],
                    "account_id" => $request->revenue_account_id,
                    "debit" => 0,
                    "credit" => $difference_cost,
                    "document_id" => $stocktake->id,
                    "document_type_id" => 30,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => '???????? ?????????????? ?????????????? ??????????????',
                ];
                $this->addTransactionEntry($entry);


                $inventory_account_id = Inventory::find($detail['inventory_id'])['account_id'];
                $entry = [
                    "company_id" => $request['company_id'],
                    "account_id" => $inventory_account_id,
                    "debit" => $difference_cost,
                    "credit" => 0,
                    "document_id" => $stocktake->id,
                    "document_type_id" => 30,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => '?????????? ???? ??????????????',
                ];
                $this->addTransactionEntry($entry);
            }
        }
        return $details;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StockTake  $stocktake
     * @return \Illuminate\Http\Response
     */
    public function show(StockTake $stocktake)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StockTake  $stocktake
     * @return \Illuminate\Http\Response
     */
    public function edit(StockTake $stocktake)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StockTake  $stocktake
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // delete all transactions 

        Transaction::where('document_type_id', 1)
            ->where('document_id', $request->id)
            ->delete();

        //delete all stocktake details
        StockTakeDetail::where('document_type_id', 1)
            ->where('document_id', $request->id)
            ->delete();

        $stocktake = StockTake::find($request->id);
        $stocktake->update($request->all());


        //----

        $supplier_account_id = Person::find($request->supplier_id)['supplier_account_id'];

        $supplier_account = [
            "company_id" => $request['company_id'],
            "account_id" => $supplier_account_id,
            "debit" =>  0,
            "credit" => $request['total_amount'] - $request['additional_expenses'],
            "document_id" => $stocktake->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => '???????? ????????????',
        ];
        $this->addTransactionEntry($supplier_account);

        $supplier_account = [
            "company_id" => $request['company_id'],
            "account_id" => $supplier_account_id,
            "debit" =>  $request['paid_amount'],
            "credit" => 0,
            "document_id" => $stocktake->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => '???????????? ????????????',
        ];
        $this->addTransactionEntry($supplier_account);





        $additional_expenses_from_account_id = $request['additional_expenses_from_account_id'];
        $additional_expenses = [
            "company_id" => $request['company_id'],
            "account_id" => $additional_expenses_from_account_id, //5103
            "debit" =>  0,
            "credit" => $request['additional_expenses'],
            "document_id" => $stocktake->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => '???????????? ????????????',
        ];
        $this->addTransactionEntry($additional_expenses);
        $additional_expenses = [
            "company_id" => $request['company_id'],
            "account_id" => 63, //5103
            "debit" =>  $request['additional_expenses'],
            "credit" => 0,
            "document_id" => $stocktake->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => '???????????? ????????????',
        ];
        $this->addTransactionEntry($additional_expenses);


        $payment_methods = $request->payment_methods;

        if (is_array($request['payment_methods'])) {


            foreach ($payment_methods as $payment_method) {
                $supplier_account = [
                    "company_id" => $request['company_id'],
                    "account_id" => $payment_method['account_id'],
                    "debit" =>  -1,
                    "credit" => $payment_method['credit'],
                    "document_id" => $stocktake->id,
                    "document_type_id" => 1,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => '???????????? ????????????',
                ];
                $this->addTransactionEntry($supplier_account);
            }
        }


        foreach ($request->details as $detail) {
            //transaction  inventory-


            //$account_id = (StockTakeDetail::where()->get())['account_id'];


            $inventory_account_id = Inventory::find($detail['inventory_id'])['account_id'];




            $entry = [
                "company_id" => $request['company_id'],
                "account_id" => $inventory_account_id,
                "debit" =>  $detail['total'],
                "credit" => 0,
                "document_id" => $stocktake->id,
                "document_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'some description',
            ];
            $this->addTransactionEntry($entry);
            $stocktake->details()->create($detail);
        }

        return $stocktake;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StockTake  $stocktake
     * @return \Illuminate\Http\Response
     */
    public function destroy(StockTake $stocktake)
    {
        //
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
}
