<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

//Route::group(["prefix" => "persons"], function () {
Route::group(['prefix' => 'persons',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {
    Route::get('/', 'PersonController@index');
    Route::get('/getOne/', 'PersonController@show');
    Route::get('/product/{id}', 'PersonController@getByProductID');
    Route::post('/', 'PersonController@store');
    Route::put('/', 'PersonController@update');
    Route::delete('/', 'PersonController@destroy');
});
//Route::group(["prefix" => "customers"], function () {
Route::group(['prefix' => 'customers',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {
    Route::get('/', 'PersonController@index');
    Route::get('/getOne/', 'PersonController@show');
    Route::get('/product/{id}', 'PersonController@getByProductID');
    Route::post('/', 'PersonController@store');
    Route::put('/', 'PersonController@update');
    Route::delete('/', 'PersonController@destroy');
});
//Route::group(["prefix" => "people"], function () {
Route::group(['prefix' => 'people',  'middleware' => ['auth:sanctum', 'add_some_data']], function () {

    Route::get('/', 'PersonController@index');
    Route::get('/getOne/', 'PersonController@show');
    Route::get('/product/{id}', 'PersonController@getByProductID');
    Route::post('/', 'PersonController@store');
    Route::put('/', 'PersonController@update');
    Route::delete('/', 'PersonController@destroy');
});
