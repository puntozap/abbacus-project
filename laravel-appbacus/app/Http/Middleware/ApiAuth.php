<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;

class ApiAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
       // return response()->json(['error' => $request->input("email") ]);
        $credentials = $request->only('email', 'password');
      // return  response()->json(['error' =>  $credentials ]);
    //return response()->json(['error' => JWTAuth::attempt( $credentials ) ]); //$credentials;
        // return $request;//->only('email', 'password');
        /*try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));*/
        //return redirect("/adios");
        return $next($request);
    }
}
