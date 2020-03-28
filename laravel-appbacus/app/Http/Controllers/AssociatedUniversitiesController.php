<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AssociatedUniversities;
use Illuminate\Support\Facades\DB;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class AssociatedUniversitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //try {
            //if (!$user = JWTAuth::parseToken()->authenticate()) {
             //       return response()->json(['user_not_found'], 404);
           // }
                
            return response()->json(compact('user'));
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
        
        
       // return $request->user->id;
        $data = new AssociatedUniversities();
        $data->id_user = $request->user->id;
        $data->id_university = $request->input("id_university");
        $data->save();
        return [ "response" => "successfully" ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = DB::table("associated_universities")
        ->select(
            "universities.id as id_university",
            "universities.name as name",
            "associated_universities.id as id"
        )
        ->where("id_user",$id)
        ->join("universities","universities.id","=","associated_universities.id_university")
        ->get();
        return $data;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
