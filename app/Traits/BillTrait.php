<?php

namespace App\Traits;

use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\Bills\Models\Bill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

trait BillTrait
{
    public function allUnPaidBill(Request $request)
    {

        if ($request->document_type_id == 5  && $request->payment_type_id == 1)
            $bill_document_type_id = 1;
        else if ($request->document_type_id == 5 && $request->payment_type_id == 2)
            $bill_document_type_id = 3;
        else if ($request->document_type_id == 6 && $request->payment_type_id == 1)
            $bill_document_type_id = 2;
        else if ($request->document_type_id == 6 && $request->payment_type_id == 2)
            $bill_document_type_id = 4;




        $bills = Bill::where('person_id', $request->person_id)
            ->where('company_id', $request->user()->company_id)
            ->where('document_type_id', $bill_document_type_id)
            ->get();

        
        return $bills;








        // $bills = Bill::where('person_id', $request->person_id)->where('company_id', $request->user()->company_id)->where('document_type_id', $request->document_type_id);
        // if ($request->has('status_id')) {
        //     if ($request->status_id == 0)
        //         $bills = $bills->where('status_id', 1)->orwhere('status_id', 1);
        //     else
        //         $bills = $bills->where('status_id', 1);
        // }


        // $paid_amount = 0;
        // $bills = $bills->get();

        // foreach ($bills as &$bill) {

        //     $supp_bills = DB::table('supplemental_billings')
        //         ->where('document_id', $bill->id)
        //         ->where('document_type_id', $request->document_type_id)
        //         ->get();
        //     //return $supp_bills;
        //     $paid_amount += $bill->paid_amount;
        //     foreach ($supp_bills as $supp_bill) {
        //         $paid_amount += $supp_bill->amount;
        //     }
        //     $bill['remainder'] = $bill->total_amount  - $paid_amount;
        //     //---reset
        //     $paid_amount = 0;
        // }
        // return $bills;
    }
}
