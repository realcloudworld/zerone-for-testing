<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

//Route::group(["prefix" => "receipts"], function () {
Route::group(['prefix' => 'receipts',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {

    Route::get('/new', 'ReceiptController@new');
    Route::get('/print/{id}', 'ReceiptController@print');
    Route::get('/', 'ReceiptController@index');
    Route::get('/all', 'ReceiptController@all');
    Route::get('/create', 'ReceiptController@create');
    Route::post('/one', 'ReceiptController@storeOne');
    Route::get('/{id}', 'ReceiptController@one');


    Route::post('/', 'ReceiptController@store');

    Route::delete('/', 'ReceiptController@destroy');
    Route::delete('/sup_doc', 'ReceiptController@destroySupDoc');
    Route::put('/', 'ReceiptController@update');
});
