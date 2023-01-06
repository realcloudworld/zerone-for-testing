<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

//Route::group(["prefix" => "accounts"], function () {
    Route::group(['prefix' => 'accounts',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {
        Route::get('/opening_balances', 'AccountController@OpeningBalances');
    Route::post('/product_opening_balance', 'AccountController@productOpeningBalance');
    Route::post('/people_opening_balance', 'AccountController@peopleOpeningBalance');
    Route::post('/account_opening_balance', 'AccountController@accountsOpeningBalance');
    Route::get('/', 'AccountController@index');
    Route::post('/', 'AccountController@store');
    Route::post('/archive/{id}', 'AccountController@archive');
    Route::delete('/opening_balance', 'AccountController@destroyOpeningBalance');
    
    Route::get('/cashAndBanks', 'AccountController@cashAndBanks');

    Route::delete('/{id}', 'AccountController@destroy');
    Route::put('/', 'AccountController@update');

    Route::get('/types', 'AccountTypeController@index');
    Route::get('/export', 'AccountController@export');
    Route::get('/type/{type}', 'AccountController@showAccountsByType'); //accounts started with
    Route::get('/types', 'AccountController@showAccountsByTypes'); //accounts started with
    Route::post('/create', 'AccountController@postCreate');
});

//Route::group(["prefix" => "journal_entries"], function () {
Route::group(['prefix' => 'journal_entries',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {
    Route::get('/', 'AccountController@journal_entries_index');
});
//Route::group(["prefix" => "general_ledgers"], function () {
Route::group(['prefix' => 'general_ledgers',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {
    Route::get('/', 'AccountController@general_ledgers_index');
});
//Route::group(["prefix" => "income_statements"], function () {
Route::group(['prefix' => 'income_statements',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {
    Route::get('/', 'AccountController@income_statements_index');
});
//Route::group(["prefix" => "money_moves"], function () {
Route::group(['prefix' => 'money_moves',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {
    Route::get('/', 'AccountController@money_moves_index');
    Route::get('/create', 'AccountController@money_moves_create');
    Route::post('/', 'AccountController@money_moves_store');
    Route::delete('/{id}', 'AccountController@money_moves_destroy');
    Route::put('/', 'AccountController@money_moves_update');
});
