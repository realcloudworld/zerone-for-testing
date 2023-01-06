<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */


Route::group(['prefix' => 'dashboard',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {
    
    Route::get('/', 'DashboardController@index');

});

