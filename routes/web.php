<?php

use App\Http\Controllers\ProductsImportController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '^((?!api).)*');

Route::get('/{any}/{some}', function () {

    return view('welcome');
})->where('any', '^((?!api).)*');

Route::get('/{any}/{some}/{id}', function () {

    return view('welcome');
})->where('any', '^((?!api).)*');





Route::get('/', function () {
    return view('welcome');
});
// Route::get('/{any}', function () {
//     return view('products');
// });
Route::post('api/excel/import/products', [ProductsImportController::class, 'index']);
Route::post('api/excel/import/purchases', [ProductsImportController::class, 'purchases']);
Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
