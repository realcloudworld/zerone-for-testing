<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

//Route::group(["prefix" => "invoices"], function () {
    Route::group(['prefix' => 'invoices',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {

    Route::get('/', 'InvoiceController@index');
    Route::get('/all', 'InvoiceController@all');
    Route::get('/{id}', 'InvoiceController@index');


    Route::get('/create', 'InvoiceController@create');
    Route::post('/', 'InvoiceController@store');
    
    Route::delete('/', 'InvoiceController@destroy');
    Route::put('/', 'InvoiceController@update');

    
    
    
});
