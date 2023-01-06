<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Modules\Admin\people\Models\Person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use PHPUnit\Util\Xml\ValidationResult;

class AuthController extends Controller
{
    private  static function Insert_initial_data(User $user)
    {
        Person::create(
            ['company_id' => $user->company_id, 'company_name' => $user->company_name, 'tax_number' => '', 'name' => 'افتراضي',  'phone01' => '967775521104', 'supplier_account_id' => 94, 'customer_account_id' => '97', 'email' => '', 'password' => '$2y$10$IznYdZTYppjRdJcQf7IWLOjotFafiGgWkxoSbtbddktwOHYWSqW3.', 'website' => 'www.webzeron.com', 'country_id' => '1', 'city_id' => '1', 'is_customer' => '1', 'is_employee' => '1', 'is_supplier' => '1', 'address' => '',  'notes' => ''],
        );
    }


    public function save_image(Request $request)
    {


        $random_name_prefix = generateRandomString(10);



        $image = $request->image;  // your base64 encoded
        $extension = explode('/', mime_content_type($image))[1];

        $image = str_replace('data:image/' . $extension . ';base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $filename = $random_name_prefix . $request->image_name;





        $filePath = 'products_images/' . $filename;
        $disk = Storage::put($filePath, base64_decode($image));




        return $random_name_prefix;
    }
    public function register(Request $request)
    {

        //return response()->json($request, 200);
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:8', 'confirmed'],

        ]);


        $company_id = User::max('company_id') + 1;


        $request['company_id'] = $company_id;
        $request['password'] = Hash::make($request['password']);
        $request['is_user'] = 1;


        $user =  User::create($request->all());

        self::Insert_initial_data($user);

        return $user;
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
            'device_name' => 'required',
        ]);


        $user = User::where('email', $request->email)->with('permissions')->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            throw \Illuminate\Validation\ValidationException::withMessages([
                'email' => ['the provided credntials ar incorrect'],
            ]);
        }
        return [
            'token' => $user->createToken($request->device_name, ['server:update', 'server:create'])->plainTextToken,
            'user' => $user
        ];
    }
    public function logout(Request $request)
    {

        $request->user()->currentAccessToken()->delete();
        return response()->json(['msg' => 'logout success'], 200);
    }
}
