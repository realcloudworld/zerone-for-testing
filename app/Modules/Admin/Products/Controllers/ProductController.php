<?php

namespace App\Modules\Admin\Products\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DistributionPolicy;

use App\Models\Tax;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Products\Models\PrdctForm;
use App\Modules\Admin\Products\Models\PrdctGroup;
use App\Modules\Admin\Products\Models\PrdctUnit;
use App\Modules\Admin\Products\Models\PrdctType;
use App\Modules\Admin\Products\Models\Product;
use App\Traits\AccountTrait;
use App\Traits\ImageTrait;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    use ImageTrait, AccountTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function search(Request $request)
    {
        if ($request->has('barcode'))

            $products = Product::where('barcode',  $request->barcode)
                ->with('groups')
                ->with('units')
                ->orderBy('id', 'DESC')->get()
                // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
                // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ;


        if ($request->has('name'))
            $products = Product::where('ar_name', 'LIKE', '%' . $request->name . '%')
                ->with('groups')
                ->with('units')
                ->orderBy('id', 'DESC')->get(
                    //['main_bought_unit_id as main_unit_id', 'ar_name']


                )
                // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
                // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ;



        return response()->json([
            'products' => $products,

        ]);

        //
        //return view('Products::index');
    }

    public function index(Request $request)
    {


        $products = Product::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->with('groups')
            ->with('units')
            //->with('sum')
            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'products' => $products, 'types' => PrdctType::all(),
            'prdct_forms' => PrdctForm::all(),
            'prdct_types' => PrdctType::all(),
            'prdct_taxes' => Tax::all()
        ]);

        //
        //return view('Products::index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {


        // return another table like groups forms ....

        return response()->json(
            [
                'settings' => [
                    'cogs_account_id' => '60',
                    'sold_account_id' => 53,
                    'sold_return_account_id' => '54',
                    'bought_return_account_id' => '61',
                    'sold_tax' => '0',
                    'bought_tax' => '0',

                ],
                'prdct_units' => PrdctUnit::all(),
                'prdct_groups' => PrdctGroup::all(),
                'prdct_forms' => PrdctForm::all(),
                'prdct_types' => PrdctType::all(),
                'inventories' => Inventory::all(),
                'distribution_policies' => DistributionPolicy::all(),
                'taxes' => Tax::all(),
                'product_sold_accounts' =>  $this->showAccounts(41),
                //'product_sold_return_accounts' =>  $this->showAccounts(4),
                'product_cogs_accounts' =>  $this->showAccounts(5),
                //'product_return_accounts' =>  $this->showAccounts(4),
            ]

        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Resse
     */
    public function store(Request $request)
    {

        

        //return $req;
        //


        // $usr = User::findOrFail($userId)->create($req->all());
        // $usr->buy()->attach($req->codecs);

        if ($request->image != 'no-image.png')
            $request['image'] = $this->save_image($request);

        $product = Product::create($request->all());
        $product->units()->attach($request->prdct_units);
        $product->groups()->attach($request->prdct_group_ids, ['company_id' => $request->user()->company_id]);

        return $product;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        



        $product = Product::find($request->id);
        if ($request->image == 'no-image.png')
            if ($product->image != 'no-image.png')
                $this->delete_image($request->image);
        if ($request->image != 'no-image.png')
            if ($product->image != basename($request->image)) {
                echo $product->image . ' ' . basename($request->image);

                $this->delete_image($product->image);
                $request['image'] = $this->save_image($request);
            } else  $request['image'] = basename($request->image);



        $product->update($request->all());
        $product->units()->detach();
        $product->groups()->detach();

        $product->units()->attach($request->prdct_units);
        $product->groups()->attach($request->prdct_group_ids, ['company_id' => $request->user()->company_id]);
        return 1;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        

        //
        $res = Product::where('id', $request->id)->delete();

        $products = Product::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json(['products' => $products]);
    }
}
