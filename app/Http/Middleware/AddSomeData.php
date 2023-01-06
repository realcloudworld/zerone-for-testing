<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AddSomeData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $request['company_id'] = $request->user()->company_id;

        return $next($request);
    }
}
