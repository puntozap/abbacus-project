<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
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
        $user = new User();
        $user->role_id = $request->input("role_id");
        $user->name = $request->input("name");
        $user->email = $request->input("email");
        $user->password = Hash::make($request->input("password")) ;

        if($user->save()){
            return [" response " => "succesfully"];
        }
        else {
            return [" response " => "error"];
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $users = User::where("id",$id)->get();
        return $users;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::where("id",$id)->get();
        $user[0]->role_id = $request->input("role_id");
        $user[0]->name = $request->input("name");
        $user[0]->email = $request->input("email");

        if($user[0]->save()){
            return [" response " => "succesfully"];
        }
        else {
            return [" response " => "error"];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if( $user = User::where("id",$id)->delete() ){
            return [" response " => "succesfully"];
        }
        else {
            return [" response " => "error"];
        }
    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $data = User::select("name","id","email")->where("email",$request->input("email"))->get();
        
        return response()->json(compact('token','data'));
    }

}
