<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    Route::get('/sendMessage/{email}/{message}','NewslettersController@sendMessage')->name('homes');

});


/*
Route::group(['prefix' => 'api'], function () {
    
});*/



/*Route::group(['middleware' => ['api']], function () {
    Route::get('hola', function(){
        return "hola mundo";
    });
});*/


Route::get('/','HomeController@index')->name('home');
Route::get('/newsletter','HomeController@newsletter');

