<?php

namespace App\Modules\Admin\Accounts\Controllers;

use App\Exports\AccountsExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\AccountResource;
use App\Modules\Admin\Accounts\Models\Account;
use App\Modules\Admin\Accounts\Models\MoneyTransaction;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\Bills\Models\Bill;
use App\Modules\Admin\Bills\Models\BillDetail;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Products\Models\Product;
use App\Traits\AccountTrait;
use App\Traits\BillTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class AccountController extends Controller
{
    use AccountTrait;




    public function showAccountsByType(Request $request, $type)
    {
        return response()->json(['accounts' => $this->showAccounts($type)], 200);
    }
    public function showAccountsByTypes(Request $request)
    {



        $accounts = [];


        //foreach ($request->types as $type)


        //return $type;
        $accounts =   array_merge(
            $this->showAccounts(1),
            $this->showAccounts(2),
            $this->showAccounts(3),
            $this->showAccounts(4),
            $this->showAccounts(5),
        );




        return response()->json(['accounts' => $accounts], 200);
    }


    /**
     * showAccountsByType
     *
     * @param  mixed $request
     * @return void
     */










    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function money_moves_create(Request $request)
    {

        $keys =  array_keys($request->all());

        $array = [];
        foreach ($keys as $key) {
            $array[$key] = $this->showAccounts($key);
        }

        return  $array;


        /*
        $type_id 

        1- money_moves
        2- add_capital
        3- fixed_asset_depreciation
        4- owner_withdraw
        5- distribute_profits
        6-

        
        */

        $from_accounts = $this->showAccounts($request->from_account_type);
        $to_accounts = $from_accounts;
        if ($request->from_account_type != $request->to_account_type)
            $to_accounts = $this->showAccounts($request->to_account_type);

        return [
            'from_accounts' => $from_accounts,
            'to_accounts' => $to_accounts,
        ];
    }
    public function journal_entries_index()
    {


        $journal_entries =

            DB::table('transactions')
            ->select(
                'transactions.*',
                'accounts.ar_name',
                'accounts.account_code',
                'bills.reference as breference',
                'receipts.reference as rreference',
                'stock_takes.reference as sreference',
                'bills.id as bid',
                'receipts.id as rid',
                'stock_takes.id as sid'
            )

            ->leftjoin('accounts', 'transactions.account_id', '=', 'accounts.id')
            ->leftjoin(
                'bills',
                function ($leftJoin) {
                    $leftJoin
                        ->on('transactions.document_id', '=', 'bills.id')
                        ->on('transactions.document_type_id', '=', 'bills.document_type_id');
                }
            )
            ->leftjoin(
                'stock_takes',
                function ($leftJoin) {
                    $leftJoin
                        ->on('transactions.document_id', '=', 'stock_takes.id')
                        ->where('transactions.document_type_id', '=', 30);
                }
            )

            ->leftjoin(
                'receipts',
                function ($leftJoin) {
                    $leftJoin
                        ->on('transactions.document_id', '=', 'receipts.id')
                        ->on('transactions.document_type_id', '=', 'receipts.document_type_id');
                }
            )
            ->orderBy('bid')
            ->orderBy('rid')
            ->get();


        $documents = [];


        foreach ($journal_entries as $journal_entry) {

            if ($journal_entry->breference)
                $journal_entry->reference =  $journal_entry->breference;
            if ($journal_entry->rreference)
                $journal_entry->reference =  $journal_entry->rreference;
            if ($journal_entry->sreference)
                $journal_entry->reference =  $journal_entry->sreference;

            if (substr($journal_entry->account_code, 0, 4) == '2101') {
                $journal_entry->ar_name = 'الدائنون';
                $journal_entry->account_code = '2101';
                $journal_entry->detail =  Person::where('supplier_account_id', $journal_entry->account_id)->first()->name;
            }
            if (substr($journal_entry->account_code, 0, 4) == '1103') {
                $journal_entry->detail =  Person::where('customer_account_id', $journal_entry->account_id)->first()->name;
                $journal_entry->ar_name = 'المدينون';
                $journal_entry->account_code = '1103';
            }

            if ($journal_entry->document_type_id == 1)
                $name = 'فاتورة مشتريات';
            if ($journal_entry->document_type_id == 2)
                $name = 'فاتورة مبيعات';
            if ($journal_entry->document_type_id == 3)
                $name = 'مرتجع مشتريات';
            if ($journal_entry->document_type_id == 4)
                $name = 'مرتجع مبيعات';
            if ($journal_entry->document_type_id == 5)
                $name = 'سند مورد';
            if ($journal_entry->document_type_id == 6)
                $name = 'سند عميل';
            if ($journal_entry->document_type_id < 0 && $journal_entry->document_type_id > -100) {
                $journal_entry->reference =  'MOV' . $journal_entry->document_id;
                $name = 'حركة ونقل أموال';
            }
            if ($journal_entry->document_type_id == -100) {
                $journal_entry->reference =  'SOB' . $journal_entry->document_id;
                $name = 'رصيد افتتاحي مورد';
            }
            if ($journal_entry->document_type_id == -101) {
                $journal_entry->reference =  'COB' . $journal_entry->document_id;
                $name = 'رصيد افتتاحي عميل';
            }
            if ($journal_entry->document_type_id == -102) {
                $journal_entry->reference =  'AOB' . $journal_entry->document_id;
                $name = 'رصيد افتتاحي لحساب';
            }
            if ($journal_entry->document_type_id == 30) {
                $journal_entry->reference =  'COB' . $journal_entry->document_id;
                $name = 'جرد مخزني';
            }




            $documents[$journal_entry->document_type_id . '.' . $journal_entry->document_id]['name'] = $name;
            $documents[$journal_entry->document_type_id . '.' . $journal_entry->document_id]['id'] = $journal_entry->id;




            $documents[$journal_entry->document_type_id . '.' . $journal_entry->document_id]['reference'] = $journal_entry->reference;
            $documents[$journal_entry->document_type_id . '.' . $journal_entry->document_id]['date'] = date("Y-m-d", strtotime($journal_entry->created_at));

            $documents[$journal_entry->document_type_id . '.' . $journal_entry->document_id]['accounts'][] =  $journal_entry;
        }



        return (array) $documents;
    }

    public function peopleOpeningBalance(Request $request)
    {
        $reference = 0;
        $person_type = 'supplier';
        $document_type_id = -100; // in table transacions  for SUPPLIERS
        $type_id = $request->type_id;
        if ($request->type_id == 2) {
            $document_type_id = -101; // in table transacions for CUSTOMERS
            $person_type = 'customer';
        }

        if ($request->type_id == 3) $person_type = 'employee';
        if ($request->type_id == 4) $person_type = 'user';





        $trans = Transaction::where('company_id', $request['company_id'])->orderBy('document_id', 'desc')->where('document_type_id', $document_type_id)->first();


        if ($trans) $reference = $trans->document_id + 1; // new reference;
        $request['reference'] =  $reference;

        $total = 0;
        foreach ($request->people as $element) {
            if ($element['total'] == 0)
                return;

            if ($type_id == 1) {
                if ($element['total'] > 0) {
                    $credit = $element['total'];
                    $debit = 0;
                } else {
                    $debit = $element['total'];
                    $credit = 0;
                }
            }

            if ($type_id == 2) {
                if ($element['total'] < 0) {
                    $credit = $element['total'];
                    $debit = 0;
                } else {
                    $debit = $element['total'];
                    $credit = 0;
                }
            }

            $total += $element['total'];

            $entry = [
                "company_id" => $request['company_id'],
                "account_id" => $element['person'][$person_type . '_account_id'],
                "debit" =>  abs($debit),
                "credit" => abs($credit),
                "document_id" => $request['reference'],
                "document_type_id" => $document_type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => $request['description'],
            ];
            Transaction::create($entry);
        }
        if ($total > 0) {


            $entry = [
                "company_id" => $request['company_id'],
                "account_id" => $request['account_id'],
                "debit" =>   $type_id == 1 ? $total : 0,
                "credit" => !($type_id == 1) ? $total : 0,
                "document_id" => $request['reference'],
                "document_type_id" => $document_type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'حساب المخزون',
            ];
            Transaction::create($entry);
        }
        if ($total < 0) {
            $entry = [
                "company_id" => $request['company_id'],
                "account_id" => $request['account_id'],
                "debit" =>   !($type_id == 1) ? abs($total) : 0,
                "credit" => $type_id == 1 ? abs($total) : 0,
                "document_id" => $request['reference'],
                "document_type_id" => $document_type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'حساب المخزون',
            ];
            Transaction::create($entry);
        }


        //
    }
    public function accountsOpeningBalance(Request $request)
    {



        $reference = 0;
        $document_type_id = -102; // in table transacions  for accounts opening balances

        $trans = Transaction::where('company_id', $request['company_id'])->orderBy('document_id', 'desc')->where('document_type_id', $document_type_id)->first();


        if ($trans) $reference = $trans->document_id + 1; // new reference;
        $request['reference'] =  $reference;




        $total = 0;
        foreach ($request->accounts as $element) {
            if ($element['total'] == 0)
                return;


            if ($element['total'] > 0) {
                $credit = $element['total'];
                $debit = 0;
            } else {
                $debit = $element['total'];
                $credit = 0;
            }


            $total += $element['total'];

            $entry = [
                "company_id" => $request['company_id'],
                "account_id" => $element['account']['id'],
                "debit" =>  abs($debit),
                "credit" => abs($credit),
                "document_id" => $request['reference'],
                "document_type_id" => $document_type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => $request['description'],
            ];
            Transaction::create($entry);
        }

        if ($total != 0) {

            $entry = [
                "company_id" => $request['company_id'],
                "account_id" => $request['account_id'],
                "debit" =>   $total > 0 ? abs($total) : 0,
                "credit" => !($total > 0) ? abs($total) : 0,
                "document_id" => $request['reference'],
                "document_type_id" => $document_type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'حساب المخزون',
            ];
            Transaction::create($entry);
        }

        //
    }


    public function OpeningBalances(Request $request)
    {

        $transactions = Transaction::where('company_id', $request->user()->company_id);
        if ($request->products)
            $transactions = $transactions->where('document_type_id', 10);
        if ($request->suppliers)
            $transactions = $transactions->where('document_type_id', -101);
        if ($request->customers)
            $transactions = $transactions->where('document_type_id', -100);
        if ($request->accounts)
            $transactions = $transactions->where('document_type_id', -102);
        if ($request->all)
            $transactions = $transactions->where('document_type_id', 10)
                ->where('document_type_id', 10)
                ->orWhere('document_type_id', -101)
                ->orWhere('document_type_id', -100)
                ->orWhere('document_type_id', -102);


        return $transactions->get();
    }
    public function productOpeningBalance(Request $request)
    {




        $request['document_type_id'] = 10;

        $reference = 0;
        $prefix = 'OPN';

        $bill = Bill::where('company_id', $request['company_id'])->orderBy('reference', 'desc')->where('reference', 'LIKE', '%' . $prefix . '%')->first();

        if ($bill) $reference = substr($bill->reference, 3) + 1; // new reference;
        $request['reference'] = $prefix . $reference;

        $bill = Bill::create($request->all());


        $total = 0;
        foreach ($request->details as $detail) {


            $total += $detail['total'];

            /*-----------------------produt processing-----------------------*/
            $product = Product::find($detail['id']);
            if (!$product->has_expiration_date)
                $detail['expires_at'] = null;

            $product->increment('quantity_in_minor_unit', $detail['quantity_in_minor_unit']);
            $product_quantity_sum = $detail['quantity_in_minor_unit'] + $product['quantity_in_minor_unit'];
            $product_cost_sum = $detail['total'] + $product['quantity_in_minor_unit'] * $product['average_cost'];
            $average_cost = $product_cost_sum / $product_quantity_sum;
            $product->update(['average_cost' => $average_cost]);

            /*-----------------------produt processing-----------------------*/

            $inventory_account_id = Inventory::find($detail['inventory_id'])['account_id'];
            /* -----------------inventory accounting---------------   */
            $entry = [
                "company_id" => $request['company_id'],
                "account_id" => $inventory_account_id,
                "debit" =>   $detail['total'],
                "credit" => 0,
                "document_id" => $bill->id,
                "document_type_id" => 10,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'حساب المخزون',
            ];
            Transaction::create($entry);
            $detail['document_type_id'] = 10;

            $old_detail = BillDetail::where([
                'company_id' => $bill['company_id'],
                'product_id' => $detail['product_id'],
                'expires_at' => $detail['expires_at'],
            ])->where('sum_quantity_in_minor_unit', '!=', -1);
            unset($detail['sum_quantity_in_minor_unit']);
            if (!$old_detail->exists()) {
                $detail['sum_quantity_in_minor_unit'] = $detail['quantity_in_minor_unit'];
            } else {

                $old_detail->increment(
                    'sum_quantity_in_minor_unit',
                    $detail['quantity_in_minor_unit']
                );
            }
            $bill->details()->create($detail);
        }
        if ($total > 0) {
            $entry = [
                "company_id" => $request['company_id'],
                "account_id" => $request['account_id'],
                "debit" =>   0,
                "credit" => $total,
                "document_id" => $bill->id,
                "document_type_id" => 10,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'حساب المخزون',
            ];
            Transaction::create($entry);
        }






        //Transaction::create($request);
    }

    public function money_moves_index()
    {
        $money_moves =



            DB::table('transactions')
            ->select(
                'transactions.*',
                'accounts.ar_name',
                'accounts.account_code',
            )
            ->where('document_type_id', '<', 0)
            ->leftjoin('accounts', 'transactions.account_id', '=', 'accounts.id')
            ->get();



        foreach ($money_moves as &$money_move) {
            $money_move->amount = $money_move->debit == 0 ? $money_move->credit : $money_move->debit;

            if ($money_move->credit != 0) {
                $money_move->from_account_id = $money_move->account_id;
                $money_move->from_account_ar_name = $money_move->ar_name;
                $money_move->from_account_code = $money_move->account_code;
            }
            if ($money_move->debit != 0) {
                $money_move->to_account_id = $money_move->account_id;
                $money_move->to_account_ar_name = $money_move->ar_name;
                $money_move->to_account_code = $money_move->account_code;
            }
        }
        return $money_moves;
    }
    public function money_moves_store(Request $request)
    {

        if ($request['amount'] <= 0)
            return 'amount <= 0';

        $money_transaction = MoneyTransaction::create();


        $request = $request->all();

        //$request['company_id'] = 1;
        $request['document_id'] = $money_transaction->id;
        $request['account_id'] = $request['from_account_id'];
        $request['credit'] = $request['amount'];
        Transaction::create($request);
        //--------------------------------------
        $request['account_id'] = $request['to_account_id'];
        $request['debit'] = $request['amount'];
        $request['credit'] = 0;
        Transaction::create($request);
    }
    public function index()
    {

        //$accounts = Account::orderBy('type_code')->get();

        $accounts = Account::with('type')->where('is_visable_in_COA', 1)->orderBy('account_code')->orderBy('id')->get();

        //return response()->json(['accounts' => $accounts], 200);
        return response()->json(['accounts' => AccountResource::collection($accounts)], 200);
        //

    }
    public function income_statements_index(Request $request)
    {
        $accounts = DB::table('transactions')
            ->select(
                'transactions.*',
                'accounts.ar_name',
                'accounts.account_code',
            );
        $accounts = $accounts->where('accounts.account_code', 'like', '5%');
        $accounts = $accounts->orwhere('accounts.account_code', 'like', '4%');

        if ($request->date_from)
            $accounts = $accounts->where('transactions.created_at', '>=', $request->date_from);
        if ($request->date_to)
            $accounts = $accounts->where('transactions.created_at', '<=', $request->date_to);

        $accounts = $accounts->leftjoin('accounts', 'transactions.account_id', '=', 'accounts.id')
            ->get();
        $summed_accounts = [];

        foreach ($accounts as &$account) {

            if (!array_key_exists($account->account_id, $summed_accounts)) {
                $summed_accounts[$account->account_id] = (array) $account;
                continue;
            }
            $summed_accounts[$account->account_id]['credit'] += $account->credit;
            $summed_accounts[$account->account_id]['debit']  += $account->debit;
        }
        $result = [];
        foreach ($summed_accounts as $summed_account) {
            $result[] = $summed_account;
        }

        return $result;
    }
    public function general_ledgers_index(Request $request)
    {





        $accounts = DB::table('transactions')
            ->select(
                'transactions.*',
                'accounts.ar_name',
                'accounts.account_code',
            );
        if ($request->date_from)
            $accounts = $accounts->where('transactions.created_at', '>=', $request->date_from);
        if ($request->date_to)
            $accounts = $accounts->where('transactions.created_at', '<=', $request->date_to);

        $accounts = $accounts->leftjoin('accounts', 'transactions.account_id', '=', 'accounts.id')
            ->get();

        $summed_accounts = [];



        foreach ($accounts as &$account) {
            if (substr($account->account_code, 0, 4) == '2101') {
                $account->ar_name = 'الدائنون';
                $account->account_code = '2101';
            }
            if (substr($account->account_code, 0, 4) == '1103') {
                $account->ar_name = 'المدينون';
                $account->account_code = '1103';
            }

            if (!array_key_exists($account->account_id, $summed_accounts)) {
                $summed_accounts[$account->account_id] = (array) $account;
                continue;
            }
            $summed_accounts[$account->account_id]['credit'] += $account->credit;
            $summed_accounts[$account->account_id]['debit']  += $account->debit;
        }

        $fathers = $summed_accounts;

        foreach ($summed_accounts as $summed_account) {

            $string = $summed_account['account_code'];
            $string = substr($string, 0, -2);

            while ($string != "") {

                $father =  DB::select("SELECT * from accounts WHERE account_code = " . $string);
                if (count($father) > 0) {
                    $father = (array) $father[0];
                    $father_index = $this->father_index($fathers, $father);
                    if ($father_index < 0) {
                        $father['debit'] = $summed_account['debit'];
                        $father['credit'] = $summed_account['credit'];
                        $fathers[] =  $father;
                    } else {
                        $fathers[$father_index]['debit']  += $summed_account['debit'];
                        $fathers[$father_index]['credit'] += $summed_account['credit'];
                    }
                }
                if (strlen($string) > 2)
                    $string = substr($string, 0, -2);
                if (strlen($string) == 1)
                    $string = "";
                if (strlen($string) == 2)
                    $string = substr($string, 0, -1);
            }

            //;
        }
        array_multisort(array_column($fathers, 'account_code'), SORT_ASC, $fathers);


        $buildTree = [];
        foreach ($fathers as $father) {

            if (strlen($father['account_code']) == 1) {
                $buildTree[] = $father;
                $this->buildTree($fathers, $buildTree, $father['account_code']);
            }
        }

        return  $buildTree;
    }
    function father_index(array $fathers, array $father)
    {

        foreach ($fathers as $key => $item) {
            if ($item['account_code'] == $father['account_code'])
                return $key;
        }

        return -1;
    }
    function buildTree(array &$elements, array &$new_array, $parent_account_code)
    {

        foreach ($elements as $element) {
            $account_code = $element['account_code'];
            $len  = 2;
            if (strlen($parent_account_code) == 1) $len  = 1;
            if ((strlen($account_code) == strlen($parent_account_code) + $len) &&   str_starts_with($account_code, $parent_account_code)) {
                $new_array[] = $element;

                $index = array_search($element, $elements);
                unset($elements[$index]);
                //dd($elements);
                $this->buildTree($elements, $new_array, $account_code);
            }
        }
    }


    public function export()
    {


        return Excel::download(new AccountsExport, 'accounts.xlsx');
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



        $request = $request->all();

        $request['create_by_user_id'] = 1;
        Account::create($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function show(Account $account)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function edit(Account $account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function money_moves_update(Request $money_move)
    {
        if ($money_move['amount'] <= 0)
            return 'amount <= 0';


        $money_move = $money_move->all();



        $amount = $money_move['amount'];
        $from_account_id = $money_move['from_account_id'];
        $to_account_id = $money_move['to_account_id'];

        unset($money_move['amount']); //<---
        unset($money_move['ar_name']);
        unset($money_move['id']);
        unset($money_move['account_code']);
        unset($money_move['from_account_code']);
        unset($money_move['from_account_ar_name']);
        unset($money_move['from_account_id']); //<---
        unset($money_move['to_account_code']);
        unset($money_move['to_account_ar_name']);
        unset($money_move['to_account_id']); //<---


        $money_move['account_id']   = $from_account_id;
        $money_move['credit']       = $amount;
        $money_move['debit']        = 0;

        Transaction::where('document_id', $money_move['document_id'])
            ->where('document_type_id', '<', 0)
            ->where('credit', '>', 0)
            ->update($money_move);
        //--------------------------------------
        $money_move['account_id']   = $to_account_id;
        $money_move['debit']        = $amount;
        $money_move['credit']       = 0;
        Transaction::where('document_id', $money_move['document_id'])
            ->where('document_type_id', '<', 0)
            ->where('debit', '>', 0)
            ->update($money_move);
    }
    public function update(Request $request)
    {

        return Account::find($request->id)->update($request->all());
        //$request;
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        //


        $res = Account::where('company_id', $request->user()->company_id)->where('id', $id)->forceDelete();


        return $res;
    }
    public function destroyOpeningBalance(Request $request)
    {




        if ($request->document_type_id < 0) {

            Transaction::where('company_id', $request->user()->company_id)->where('document_id', $request->document_id)
                ->where('document_type_id', $request->document_type_id)->delete();
            return ['valid' => true];
        }


        if ($request->document_type_id == 10) { // رصيد أولي للمخزون

            if (!$this->enoughStock($request)) {
                return ['valid' => false];
            }


            Transaction::where('company_id', $request->user()->company_id)->where('document_id', $request->document_id)
                ->where('document_type_id', $request->document_type_id)->delete();
            $this->deleteStockandBill($request);
            return [
                'opening_balances' => Transaction::where('company_id', $request->user()->company_id)->where('document_type_id', 10)->get(),
                'valid' => true
            ];
        }
    }
    public function enoughStock($request)
    {
        $details = BillDetail::where('company_id', $request->user()->company_id)->where('document_id', $request->document_id)
            ->where('document_type_id', $request->document_type_id)->get();


        foreach ($details as $detail) {

            // check detail in database
            $old_detail = BillDetail::where('company_id', $request->user()->company_id)->where([
                'product_id' => $detail['product_id'],
                'expires_at' => $detail['expires_at'],
            ])->where('sum_quantity_in_minor_unit', '>=', $detail['quantity_in_minor_unit']);


            if (!$old_detail->exists()) {
                return false;
            }
        }

        return true;
    }
    public function deleteStockandBill($request)
    {
        $details = BillDetail::where('company_id', $request->user()->company_id)->where('document_id', $request->document_id)
            ->where('document_type_id', $request->document_type_id);
        $details_get = $details->get();

        foreach ($details_get as $detail) {


            BillDetail::where('company_id', $request->user()->company_id)->where([
                'product_id' => $detail['product_id'],
                'expires_at' => $detail['expires_at'],
            ])->decrement(
                'sum_quantity_in_minor_unit',
                $detail['quantity_in_minor_unit']
            );
        }
        $details->delete();
        Bill::where('company_id', $request->user()->company_id)->where('id', $request->document_id)
            ->where('document_type_id', $request->document_type_id)->delete();


        return true;
    }
    public function money_moves_destroy(Request $request, $id)
    {
        //


        MoneyTransaction::where('id', $id)->delete();
        $res = Transaction::where('company_id', $request->user()->company_id)->where('document_id', $id)->where('document_type_id', '<', 0)->delete();



        return $res;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function archive(Request $request, $id)
    {
        //


        $res = Account::where('id', $id)->delete();

        return $res;
    }
}
