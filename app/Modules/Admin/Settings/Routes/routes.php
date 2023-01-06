<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

//Route::group(["prefix" => "settings"], function () {
Route::group(['prefix' => 'settings',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {



    Route::get('/', 'SettingController@index');
    Route::get('/migrate', 'SettingController@migrate');
    Route::post('/migrate', 'SettingController@migrate');
    Route::post('/', 'SettingController@store');
    Route::post('/archive/{id}', 'SettingController@archive');

    Route::get('/cashAndBanks', 'SettingController@cashAndBanks');

    Route::delete('/{id}', 'SettingController@destroy');
    Route::put('/', 'SettingController@update');

    Route::get('/types', 'SettingTypeController@index');
    Route::get('/export', 'SettingController@export');
    Route::get('/type/{type}', 'SettingController@showSettingsByType'); //settings started with
    Route::post('/create', 'SettingController@postCreate');
});
