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
       
        
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return response()->json(['user_not_found'], 404);
            }
            //return response()->json(compact('user'));
            $request->user = $user;
            return $next($request);
           /// return response()->json([ "datos" => $request , "email" => $request->input('id_user') ]);

        //return response()->json(['error' => 'ajaaa']);
        
        //return $next($request);
    }
}
