<?php

namespace App\Modules\Admin\people\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Receipt;
use App\Modules\Admin\Accounts\Models\Account;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Supplier;
use App\Modules\Admin\Bills\Models\Bill;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use PhpOffice\PhpSpreadsheet\Calculation\TextData\Search;

class PersonController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        if ($request->user()->tokenCan('server:update')) {
            //

        }



        /*
        أعطني كل المستخدمين 
        خرج كل دفعاتهم من ترانزاكشن
        خرج كل الفواتير المستحقة (التي انتهى تاريخها) من واقع الترانزاكشن من أجل نعرف كم سدد في كل فاتورة
        خرج السندات اللاحقة كم دفع وكم سحب للفاتورة المخصصة 



        */


        /*$List = Schema::getColumnListing('people');
        
        foreach ($List as &$item)
            $item = 'people.' . $item;

        return $List;*/


        /* 
        request->type_id
        1- supplier
        2- customer
        3 - user
        */


        $person = 'supplier';
        $type_id = $request->type_id;
        if ($request->type_id == 2) $person = 'customer';
        if ($request->type_id == 3) $person = 'employee';
        if ($request->type_id == 4) {
            $person = 'user';
            return Person::where('company_id', $request->user()->company_id)->where('is_' . $person, '1')->get();
        }
        

        $search  = json_decode($request->search, true);

        if (!$search) {

            return Person::where('company_id', $request->user()->company_id)->where('is_' . $person, '1')->get();
        }


        $people = DB::table('people')
            ->select(
                'people.*',
                'acc.id as acc_id',
                'trans.id as trans_id',
                'bills.id as bill_id',
                'supdoc.id as supdoc_id',
                'trans.debit',
                'trans.credit',
                'bills.maturity_date',
                'bills.total_amount as bill_total_amount',
                'bills.paid_amount as bill_paid_amount',
                'supdoc.amount',
            )

            ->where('people.company_id', $request->user()->company_id)->where('is_' . $person, '1');



        if ($search['company_name'])
            $people = $people->where('company_name', 'like', '%' . $search['company_name'] . '%');

        if ($search['name'])
            $people = $people->where('name', 'like', '%' . $search['name'] . '%');

        if ($search['is_person_active'])

            $people = $people->where('is_' . $person . '_active', $search['is_person_active']);



        if ($search['phone']) {

            $people = $people->where('phone01', $search['phone'])->orWhere('phone02', $search['phone']);
        }


        //$people = $people->leftJoin('accounts as acc', 'people.id', '=', 'acc.accountable_id');
        $people = $people->leftJoin(
            'accounts as acc',
            function ($leftJoin) use ($person) {
                $leftJoin
                    ->on('people.id', '=', 'acc.accountable_id')
                    ->where('acc.accountable_type',  $person);
            }

        );
        // all transactions 
        $people = $people->leftJoin('transactions as trans', 'acc.id', '=', 'trans.account_id');

        // all maturity bills
        $people = $people->leftJoin(
            'bills',
            function ($leftJoin) use ($type_id) {
                $leftJoin
                    ->on('trans.document_id', '=', 'bills.id')
                    ->where('trans.document_type_id', 1)
                    ->where('bills.document_type_id', $type_id)
                    ->where('bills.maturity_date', '<', date('Y-m-d'))
                    ->where('bills.payment_status_id', '!=', 5);
            }
        );
        $people = $people->leftJoin(
            'supplemental_billings as supdoc',
            function ($leftJoin) {
                $leftJoin
                    ->on('supdoc.document_id', '=', 'bills.id')
                    ->where('supdoc.document_type_id', 1);
            }

        );
        $people = $people->orderBy('people.id', 'asc')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        return response()->json(['people' => $people], 200);
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
    public function store(Request $request)
    {


        if ($request->type_id == 4) {
            $person = Person::create($request->all());
            return $person;
        }

        $person_type = 'supplier';
        $account_code = '2101';
        $description = 'حساب مورد';

        if ($request->type_id == 2) {
            $person_type = 'customer';
            $account_code = '1103';
            $description = 'حساب عميل';
        }
        if ($request->type_id == 3) {
            $person_type = 'employee';
            $account_code = '1103';
            $description = 'حساب موظف';
        }


        $request['person_id'] = 1;
        $request['is_' . $person_type] = 1;


        $account_line = Account::where('account_code', 'like', '%' . $account_code . '%')->orderBy('account_code', 'DESC')->get();



        //if no suppliers before
        if ($account_line[0]['account_code'] == '2101')
            $account_code = $account_code . '00001';
        else
            $account_code = $account_line[0]['account_code'] + 1;

        $person = Person::create($request->all());
        $supplier_id = $person->id;


        $account_items =
            [
                'company_id' => $request->user()->company_id,
                'account_code' => $account_code,
                'type_id' => '16',
                'level' => '4',
                'parent_id' => '24',
                'ar_name' => '',
                'en_name' => '',
                'description' => $description,
                'payable_receivable' => '1',
                'editable' => '0',
                'currency_id' => '1',
                'is_active' => '1',
                'is_visable_in_COA' => '0',
                'accountable_id' => $person->id,
                'accountable_type' => $person_type,
                'create_by_user_id' => '1'
            ];

        $account = Account::create($account_items);
        $supplier = Person::find($person->id)->update([$person_type . '_account_id' => $account->id]);


        return  $supplier_id;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)

    {
        $person_type = 'supplier';
        $type_id = $request->type_id;
        $opening_balace_document_type_id = -100;
        if ($type_id == 2) {
            $opening_balace_document_type_id = -101;
            $person_type = 'customer';
        }
        if ($type_id == 3) {
            $opening_balace_document_type_id = -102;
            $person_type = 'employee';
        }
        if ($type_id == 4) {
            $person_type = 'user';
        }
        if ($request->has('pur_itemsPerPage')) {
            $bills  =  Bill::where('person_id', $request->id)->where('bills.document_type_id', $type_id)->orderBy('id', 'DESC')->paginate($request->pur_itemsPerPage != -1 ? $request->pur_itemsPerPage : '', ['*'], 'pur_page');
            return ['bills' => $bills];
        }
        if ($request->has('ret_pur_itemsPerPage')) {

            $bills  =  Bill::where('person_id', $request->id)->where('bills.document_type_id', $type_id + 2)->orderBy('id', 'DESC')->paginate($request->pur_itemsPerPage != -1 ? $request->pur_itemsPerPage : '', ['*'], 'pur_page');
            return ['ret_bills' => $bills];
        }

        if ($request->has('receipt_itemsPerPage')) {

            $receipts  =  Receipt::where('person_id', $request->id)->where('receipts.document_type_id', $type_id + 4)->orderBy('id', 'DESC')->paginate($request->receipt_itemsPerPage != -1 ? $request->receipt_itemsPerPage : '', ['*'], 'receipt_page');
            return ['receipts' => $receipts];
        }


        $person = DB::table('people')->find($request->id);
        //return $supplier;


        $balance = 0;
        $account = DB::table('accounts')->where('accountable_id', $request->id)->where('accountable_type', $person_type)->get();

        $transactions = DB::table('transactions')->where('account_id', $account[0]->id)->get();

        foreach ($transactions as $transaction) {
            $balance += $transaction->credit - $transaction->debit;
        }

        $bills  =  Bill::where('person_id', $request->id)->where('bills.document_type_id', $type_id)->get();
        $bills_count = $bills->count();
        $ret_bills  =  Bill::where('person_id', $request->id)->where('bills.document_type_id', $type_id + 2)->get();
        $ret_bills_count = $ret_bills->count();

        $total_amount = 0;
        $total_amount_with_maturity_date = 0;
        $paid_amount = 0;
        $paid_amount_with_maturity_date = 0;

        foreach ($bills as $bills) {
            $total_amount += $bills->total_amount;
            $supp_bills = DB::table('supplemental_billings')->where('document_id', $bills->id)->where('document_type_id', 1)->get();
            if ($bills->maturity_date <  date('Y-m-d') && $bills->maturity_date != 5) {
                $total_amount_with_maturity_date +=  $bills->total_amount;
                $paid_amount_with_maturity_date +=  $bills->paid_amount;
                foreach ($supp_bills as $supp_bill) {
                    $paid_amount_with_maturity_date += $supp_bill->amount;
                }
            }
            $paid_amount += $bills->paid_amount;
            foreach ($supp_bills as $supp_bill) {
                $paid_amount += $supp_bill->amount;
            }
        }




        $remain_amount = $total_amount - $paid_amount;
        $arrears = $total_amount_with_maturity_date - $paid_amount_with_maturity_date;


        $opening_balance_debit = Transaction::where('account_id', $account[0]->id)->where('document_type_id', $opening_balace_document_type_id)->sum('debit');
        $opening_balance_credit = Transaction::where('account_id', $account[0]->id)->where('document_type_id', $opening_balace_document_type_id)->sum('credit');

        $opening_balance = $opening_balance_credit - $opening_balance_debit;



        return
            [
                'remain_amount' => $remain_amount,
                'total_amount' => $total_amount,
                'arrears' => $arrears,
                'person' => $person,
                'bills_count' => $bills_count,
                'ret_bills_count' => $ret_bills_count,
                'balance' => $balance,
                'opening_balance' => $opening_balance,

            ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $request->id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Person::find($request->id)->update($request->all());
        return response()->json(['types' => Person::all()], 200);
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)

    {

        $search  = json_decode($request->search, true);

        if (!$search) {
            return;
        }


        // test if person has bills or receipts - cannot be detroyed


        $person = Person::where('id', $request->person_id)->where('company_id', $request['company_id']);
        $persona = 'supplier';

        if ($search['type_id'] == 2) $persona = 'customer';
        if ($search['type_id'] == 3) $persona = 'employee';
        if ($search['type_id'] == 4) $persona = 'user';

        $person->update(['is_' . $persona => 0]);




        //->delete();



        return $this->index($request);
    }
}
