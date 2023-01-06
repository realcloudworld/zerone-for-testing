<?php

namespace App\Modules\Admin\Dashboard\Controllers;

use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Models\Bill;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\Products\Models\Product;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        return [
            'bcrypt'=>Hash::make('122333'),
            'purchase_returns' => Bill::where('company_id', $request['company_id'])->where('document_type_id', 3)->count(),
            'invoice_returns' => Bill::where('company_id', $request['company_id'])->where('document_type_id', 4)->count(),
            'purchases' => Bill::where('company_id', $request['company_id'])->where('document_type_id', 1)->count(),
            'invoices' => Bill::where('company_id', $request['company_id'])->where('document_type_id', 2)->count(),
            'products' => Product::where('company_id', $request['company_id'])->count(),
            'suppliers' => Person::where('company_id', $request['company_id'])->where('is_supplier', 1)->count(),
            'customers' => Person::where('company_id', $request['company_id'])->where('is_customer', 1)->count(),

        ];
    }
}
