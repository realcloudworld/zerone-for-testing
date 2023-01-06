<?php

namespace App\Http\Controllers;

use App\Http\BillWithProductsImportCollection;
use App\Http\ProductsImportCollection;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ProductsImportController extends Controller
{
    public function index(Request $request)
    {
        
        Excel::import(new ProductsImportCollection, $request->myInputFile);
    }
    public function purchases(Request $request)
    {
        Excel::import(new BillWithProductsImportCollection, $request->myInputFile);
    }

}
