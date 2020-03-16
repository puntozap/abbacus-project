<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Countdown;
use App\Newsletter;
use App\Mail\Newsletters;
use Illuminate\Support\Facades\Mail;


class HomeController extends Controller
{
    public function newsletter(Request $request){
        $Newsletter=new Newsletter;
        $Newsletter->email=$request['EMAIL'];
        $Newsletter->save();

        $email=$Newsletter->email;
        $name=$email;
        // $email->notify(new \App\Notifications\registerAdministradorLugarCultural());
        $text="Te has registrado para saber el lanzamiento de AppBacus. Sera una aplicacion para calcular las notas definitivas teniendo en cuenta una nota final y la nota del examen final. Trabajamos para lograr esto de manera automatica.";
        $button="Mas Informacion";
        $urls="/";
        Mail::to($email)->send(new Newsletters($name,$Newsletter,$text,$button,$urls));
        return redirect("/");
        // dd($request);
    }
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
