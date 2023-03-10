<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

//Route::group(["prefix" => "stocktakes"], function () {
Route::group(['prefix' => 'stocktakes',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {

    

    Route::get('/', 'StockTakeController@index');
    Route::get('/all', 'StockTakeController@all');


    Route::get('/create', 'StockTakeController@create');
    Route::get('/{id}', 'StockTakeController@index');
    Route::post('/', 'StockTakeController@store');

    Route::delete('/', 'StockTakeController@destroy');
    Route::put('/', 'StockTakeController@update');
});
