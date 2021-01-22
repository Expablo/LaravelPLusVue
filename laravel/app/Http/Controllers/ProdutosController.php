<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Produto;

class ProdutosController extends Controller
{

    public function showAll(){
        $produto = Produto::get();
        return response()->json($produto);
    }

    public function show($id){
    	$produto = Produto::findOrFail($id);
    	return response()->json($produto);
    }


    public function create(Request $request){
    	Produto::create([
    		'nome' => $request->nome,
    		'custo' => $request->custo,
    		'preco' => $request->preco,
    		'quantidade' =>$request->quantidade
    	]);

    	return "produto criado com sucesso!";
    }

    public function update(Request $request, $id){
    	$produto = Produto::findOrFail($id);

    	$produto->update([
    		'nome' => $request->nome,
    		'custo' => $request->custo,
    		'preco' => $request->preco,
    		'quantidade' => $request->quantidade
    	]);

    	return "produto atualizado";
    }

    public function destroy($id){
    	$produto = Produto::findOrFail($id);
    	$produto->delete();

    	return "produto deletado";
    }
}
