<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Countdown;


class HomeController extends Controller
{
    public function index(){
        $Countdown=Countdown::first();
        // dd($Countdown);
        $return['image_phone'] = Storage::url($Countdown->image_phone);
        $return['image_one'] = Storage::url($Countdown->image_one);
        $return['image_two'] = Storage::url($Countdown->image_two);
        $return['Countdown']=$Countdown;
        // dd($return);
        // return view('welcome');
        return view('template-countdown.template-countdown')->with($return);
    }
}
