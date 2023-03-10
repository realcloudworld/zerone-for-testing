<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bill_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');

            $table->integer('document_id',);
            $table->integer('document_type_id',);
            $table->integer('type_id')->default(1); // مشتريات أو مبيعات أو مردودات مشتريات أو مردودات مبيعات
            $table->integer('product_id',);
            $table->datetime('expires_at')->nullable();
            $table->integer('unit_id');
            $table->integer('quantity',)->default(0);
            $table->double('unit_price')->default(0.0);
            $table->double('profit_ratio')->default(0.0);
            $table->double('sold_price')->default(0.0);
            $table->boolean('bonus', 1)->default(0);
            $table->integer('quantity_in_minor_unit')->default(0);
            $table->integer('sum_quantity_in_minor_unit',)->default(-1);
            $table->integer('inventory_id',);

            $table->double('tax')->default(0.0);
            $table->double('tax_value')->default(0.0);

            $table->double('discount')->default(0.0);
            $table->boolean('discount_type_id')->default(1);
            
            $table->double('sold_discount')->default(0.0);

            $table->double('total')->default(0.0);
            $table->boolean('drugs_is_with_bonous')->default(0);

            $table->index('company_id');
            $table->index('product_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bill_details');
    }
}
