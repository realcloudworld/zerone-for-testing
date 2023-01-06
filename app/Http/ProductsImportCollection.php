<?php

namespace App\Http;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use DB;

class ProductsImportCollection implements ToCollection
{
    /**
     * @param Collection $collection
     */
    public function collection(Collection $collection)
    {
        // DB::table('complete')->truncate();
        // ini_set('max_execution_time', 0);

        foreach ($collection as $key => $value) {


            if ($key > 0) {   // ابتداء من السطر الأول بعد التايتل حق الجدول - اسماء الحقول

                if ($value[1] == null) :
                    continue;
                endif;
                DB::table('products')->insert([

                    'company_id'  => 1,
                    'barcode'  => $value[0],
                    'serial_number'  => 232323,
                    'ar_name' => $value[1],
                    'en_name'  => 'kalam',
                    'prdct_form_id'  => 1,
                    'prdct_type_id'  => 1,
                    'minor_unit'  => 1,
                    'main_sold_unit_id'  => 1,
                    'main_bought_unit_id'  => 1,
                    'cogs_account_id'  => 60,
                    'sold_account_id'  => 53,
                    'sold_return_account_id' => 1,
                    'bought_return_account_id' => 1,
                    'sold_discount'  => 0,
                    'sold_discount_type_id'  => 1,
                    'discount'  => 0,
                    'discount_type_id'  => 1,
                    'bought_tax'  => 0,
                    'sold_tax'  => 0,
                    'min_alert'  => 0,
                    'max_alert'  => 100,
                    'stagnation_period'  => 0,
                    'opening_balance_quantity'  => 0,
                    'opening_balance_cost'  => 0,
                    'profit_ratio'  => 20,
                    'side_effect'  => 'some effect',
                    'description'  => 'some description',
                    'inventory_id'  => 1,
                    'image'  => 'no-image.png',
                    'distribution_policy_id'  => 1,
                    'is_free'  => 0,
                    'has_expiration_date'  => $value[2],
                    'is_active'  => 0,
                ]);
            }
        }
    }
}
