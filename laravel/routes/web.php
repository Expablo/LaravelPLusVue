<?php

use Illuminate\Support\Facades\Route;


Route::get('/produtos', 'ProdutosController@showAll');

Route::get('/produtos/{id}', 'ProdutosController@show');

Route::post('/produtos', 'ProdutosController@create');

Route::put('/produtos/{id}', 'ProdutosController@update');

Route::delete('/produtos/{id}', 'ProdutosController@destroy');
