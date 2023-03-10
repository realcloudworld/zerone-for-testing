<?php

namespace App\Modules\Admin\Settings\Controllers;

use App\Exports\SettingsExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\SettingResource;
use App\Modules\Admin\Settings\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class SettingController extends Controller
{




    public function migrate(Request $request)
    {
        // Roll back all migrations and migrate them again
        Artisan::call('migrate:refresh');
        // Fill tables with seeds
        Artisan::call('db:seed');

        //Artisan::call('migrate', array('--path' => 'app/migrations', '--force' => true));
        //Artisan::call('migrate', array('--path' => 'app/migrations'));


    }
    public function showSettingsByType(Request $request, $type)
    {
        return response()->json(['settings' => $this->showSettings($type)], 200);
    }


    /**
     * showSettingsByType
     *
     * @param  mixed $request
     * @return void
     */










    /**
     * Dirnsplay a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function company_settings(Request $request)
    {


        foreach ($request as $key => $item) {

            $setting = Setting::set($key, json_encode($item));
        }
        return $setting;
    }
    public function product_settings(Request $request)
    {

        $request = $request->all();
        Setting::set('salam ', 'ljkjskj');
        foreach ($request as $key => $item) {

            $setting = Setting::set($key, json_encode($item));
        }


        // $setting = Setting::getAllSettings();
        // $setting = Setting::has('nib');
        // $setting = setting(['fff', 'ooo']);

        // Setting::set('nib', 'ljkjskj');
        // $setting = setting('ar_key');


        return $setting;

        return 1;
        // app('valuestore')->put('EUR', 20);
        // app('valuestore')->put('products_grouped', true);

        // return app('settings')['EUR'];
    }
    public function index(Request $request)
    {




        $company_settings = setting('company');
        $product_settings = setting('product');


        return  [
            'company_settings' => json_decode($company_settings),
            'product_settings' => json_decode($product_settings)
        ];

        return 1;
        // app('valuestore')->put('EUR', 20);
        // app('valuestore')->put('products_grouped', true);

        // return app('settings')['EUR'];
    }

    public function export()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $request = $request->all();
        foreach ($request as $key => $item) {

            $setting = Setting::set($key, json_encode($item));
        }
        return $setting;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function edit(Setting $setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,  $id)
    {
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function archive(Request $request,  $id)
    {
    }
}
