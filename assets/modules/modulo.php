<?php

if(!empty($_GET['modulo'])){
    if($_GET['modulo'] == "ConsultaLivro"){
        $livro = "Gênesis";

        if(!empty($_GET['nome']) && !empty($_GET['tipo'])){
            $nome = $_GET['nome'];
            $tipo = $_GET['tipo'];
            $json = file_get_contents("../json/livros.json");
            // Decode the JSON file
            $json_data = json_decode($json,true);
        
            for($indice = 0; $indice < count($json_data); $indice++){
                if($json_data[$indice]['nome'] == $nome){
                    if($tipo == "apos"){
                        $livro = $json_data[$indice + 1]["nome"];
                    } else {
                        $livro = $json_data[$indice - 1]["nome"];
                    }
                    break;
                }
            }
        
        } else {
            $nome = "Erro";
        }
        echo $livro;
    } else {
        if(!empty($_GET['nome'])){ 
            $caminho = "";
            $nome = $_GET['nome'];
            $json = file_get_contents("../json/livros.json");
                
            // Decode the JSON file
            $json_data = json_decode($json,true);
    
            // carregar a quantidade de capitulos
            for($indice = 0; $indice < count($json_data); $indice++){
                if($json_data[$indice]['nome'] == $nome){
                    $caminho = $json_data[$indice]["url"];
                    break;
                }
            }
    
            $xml = simplexml_load_file('../livros/'.$caminho.'');
            
            $totalCapitulos = $xml -> attributes()-> chapters;

            echo $totalCapitulos;
        }
        
    }
}

?>