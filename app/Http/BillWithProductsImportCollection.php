<?php

namespace App\Http;

use App\Modules\Admin\people\Models\Person;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use DB;

class BillWithProductsImportCollection implements ToCollection
{
    /**
     * @param Collection $collection
     */

    function addSupplier($value)
    {
    }
    function addPurchase($value)
    {
    }
    function addUnits($value)
    {
    }
    function addProduct($value, $units)
    {
    }
    function addDetail($value, $product_id)
    {
    }
    public function collection(Collection $collection)
    {


        // DB::table('complete')->truncate();
        // ini_set('max_execution_time', 0);
        $purchase_id = 0;

        $error_lines = [];
        foreach ($collection as $key => $value) {


            if ($key == 1) :
                if ($value[0] == null) :
                    $error_lines[] = 'اسم الشركة فارغ';
                    dd($error_lines);
                endif;
                $this->addSupplier($value);
            endif;
            if ($key == 3) :
                if ($value[2] == 'نقدي') :
                    $error_lines[] = 'يجب دفع الفاتورة النقدية كاملة';
                    dd($error_lines);
                endif;
                $purchase_id = $this->addPurchase($value);
            endif;
            $units = [];
            $product_id = 0;
            if ($key > 6) {
                if ($value[0] == null) :
                    $error_lines[] = 'في السطر ' . ($key + 1) . '    اسم الصنف فارغ';
                    continue;
                endif;
                if ($value[2] == null) :
                    $error_lines[] = 'في السطر ' . ($key + 1) . '    وحدة الشراء فارغة';
                    continue;
                endif;
                if ($value[3] == null) :
                    $error_lines[] = 'في السطر ' . ($key + 1) . '    الكمية فارغة';
                    continue;
                endif;
                if ($value[4] == null) :
                    $error_lines[] = 'في السطر ' . ($key + 1) . '    سعر الشراء فارغ';
                    continue;
                endif;

                $units =  $this->addUnits($value);
                $product_id = $this->addProduct($value, $units);
                $this->addDetail($value, $product_id, $purchase_id);


                // ابتداء من السطر السابع لان الترقيم من الصفر بعد التايتل بيانات العيل والفاتورة 



            }
        }

        dd($error_lines);
    }
}
