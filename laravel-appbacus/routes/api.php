<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['apiauth']], function () {
    
    Route::resource("/universities","UniversitiesController");
    Route::resource("/associated_universities","AssociatedUniversitiesController");
    Route::resource("/users","UsersController")->only([
        'index', 'show','store','update','destroy'
    ]);
});





Route::post('/login',"UsersController@login");


/*
Route::post('hola', ['middleware' => 'apiauth', function (Request $request) {
    //
    return  "hola mundo";
}]);*/

/*Route::get("/",function(){
    return ["error"=>false];
});*/

Route::resource("users","UsersController");