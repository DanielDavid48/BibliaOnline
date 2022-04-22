
<?php
    if(!empty($_POST['livroselecionado'])){
        $LivroSelecionado = $_POST['livroselecionado'];
    } else {
        $LivroSelecionado = "Gênesis";
    }
    if(!empty($_POST['capituloselecionado'])){
        $capituloSelecionado = $_POST['capituloselecionado'];
    } else {
        $capituloSelecionado = "1";
    }
    if(!empty($_POST['versiculoselecionado'])){
        $versiculoselecionado = $_POST['versiculoselecionado'];
    } else {
        $versiculoselecionado = "1";
    }
    
    $caminho = "";
    $json = file_get_contents("assets/json/livros.json");
         
    // Decode the JSON file
    $json_data = json_decode($json,true);

    // carregar a quantidade de capitulos
    for($indice = 0; $indice < count($json_data); $indice++){
        if($json_data[$indice]['nome'] == $LivroSelecionado){
            $caminho = $json_data[$indice]["url"];
            break;
        }
    }
    $xml = simplexml_load_file('assets/livros/'.$caminho.'');
    
    $totalCapitulos = $xml -> attributes()-> chapters;

 


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bíblia online</title>
    <link rel="icon" href="assets/img/cross.ico">
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/biblia.css">
</head>
<body>
    <form action="" method="POST">
        <input type="text" name="livroselecionado" id="input" style="display: none">
        <input type="text" name="capituloselecionado" id="input1" style="display: none">
        <input type="text" name="versiculoselecionado" id="input2"  style="display: none">
        <button type="submit" name="envia" id="envia" value="Nada" style="display: none"></button>

    </form>
    <div class="mainIUper roww">
        <div class="sidebar semmenu">
            <div class="container">
                <div class="row">
                    <div class="col-8 col-sm-7 col-lg-8 col-xl-8">
                        <h1 id="titlesidebar">BÍBLIA ONLINE</h1>
                        <p id="descSidbar">Sua bíblia online e gratuita</p>
                    </div>
                    <div class="col-4 col-sm-4 col-lg-4 col-xl-4 coluna">
                        <h3><i class="fa fa-bars iconBar" id="bars2"></i></h3>
                    </div>
                </div>
                <p id="frasedodia"></p>
                
            </div>
            
            <div class="container menu align-content-center overflow-scroll">
                <div class="row justify-content-around">
                    <button class="btn btnTestamento active" id="btnAntigoTestamento">Antigo Testamento</button>
                    <button class="btn btnTestamento" id="btnNovoTestamento">Novo Testamento</button>
                </div>
                <div class="divisor"></div>
                <p></p>
                <div class="m-0">
                    <div class="accordion" id="myAccordion">
                        <div class="accordion-item" id="itembgacord"">
                            <h2 class="accordion-header" id="headingOne">
                                <p  class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Livros</p>									
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                <ul class="list-group list-group-flush listaAntigoTestamento si">
                                    <?php
                                        // Itera o json
                                        for ($i = 0; $i < count($json_data); $i++){
                                            //echo ;
                                            if($json_data[$i]["testamento"] == "Antigo"){
                                                if($json_data[$i]['nome'] == $LivroSelecionado){
                                                    echo '<li class="list-group-item active"><a value="'.$json_data[$i]['nome'].'" href="#" class="livroselecionadoA">'.$json_data[$i]['nome'].'</a></li>';

                                                }else{
                                                    echo '<li class="list-group-item"><a value="'.$json_data[$i]['nome'].'" href="#" class="livroselecionadoA">'.$json_data[$i]['nome'].'</a></li>';
                                                };
                                            } 
                                        };
                                    ?>
                                </ul>
                                <ul class="list-group list-group-flush listaNovoTestamento si">
                                    <?php
                                        // Itera o json
                                        for ($i = 0; $i < count($json_data); $i++){
                                            //echo ;
                                            if($json_data[$i]["testamento"] == "Novo"){
                                                if($json_data[$i]['nome'] == $LivroSelecionado){
                                                    echo '<li class="list-group-item active"><a value="'.$json_data[$i]['nome'].'" href="#" class="livroselecionadoA">'.$json_data[$i]['nome'].'</a></li>';

                                                }else{
                                                    echo '<li class="list-group-item"><a value="'.$json_data[$i]['nome'].'" href="#" class="livroselecionadoA">'.$json_data[$i]['nome'].'</a></li>';
                                                };
                                            } 
                                        };
                                    ?>
                                </ul>
                            </div>
                        </div>
                        <div class="accordion-item" id="itembgacord"">
                            <h2 class="accordion-header" id="headingTwo">
                                <p class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Capítulos</p>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                            <div class="tabela">
                                <div class="row">
                                    <?php
                                        foreach($xml -> chapter as $g){
                                            if($g -> attributes()-> number == (int) $capituloSelecionado){
                                                echo '
                                                <div class="col-3">
                                                    <div class="container divCapituloNumero active" value="'.$g -> attributes()-> number.'">
                                                        <p>'.$g -> attributes()-> number.'</p>
                                                    </div>
                                                </div>
                                                ';
                                            } else {
                                                echo '
                                                <div class="col-3">
                                                    <div class="container divCapituloNumero" value="'.$g -> attributes()-> number.'">
                                                        <p>'.$g -> attributes()-> number.'</p>
                                                    </div>
                                                </div>
                                                ';
                                            };
                                        };
                                    ?>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item" id="itembgacord"">
                            <h2 class="accordion-header" id="headingThree">
                                <p class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Versículos</p>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                <div class="tabela">
                                    <div class="row">
                                        <?php
                                            foreach($xml -> chapter[(int) $capituloSelecionado - 1] -> verse as $verso){
                                                if($verso  -> attributes()-> number == $versiculoselecionado){
                                                    echo '
                                                    <div class="col-3">
                                                        <div class="container divVersiculo active" value="'.$verso  -> attributes()-> number.'">
                                                            <p>'.$verso  -> attributes()-> number.'</p>
                                                        </div>
                                                    </div>
                                                    ';
                                                } else {
                                                    echo '
                                                    <div class="col-3">
                                                        <div class="container divVersiculo" value="'.$verso  -> attributes()-> number.'">
                                                            <p>'.$verso  -> attributes()-> number.'</p>
                                                        </div>
                                                    </div>
                                                    ';
                                                };
                                            }
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divisor"></div>
                
                <div class="divisor"></div>
                
                
            </div>
        </div>
        <div class="main commenu">
            <div class="container">
                <div class="recuamenu">
                    <div class="row">
                        <div class="col-6 coluna">
                            <h3 id="iconbarchild"><i class="fa fa-bars" id="bars"></i></h3>
                        </div>
                        <div class="col-6 coluna">
                            <img src="assets/img/cross.png" height="30px" width="30px" alt="">
                        </div>
                    </div>
                </div>
                <div class="divisor"></div>
                <div class="bodyMain">
                    <h1 id="titleLivro"><?php echo ''.$LivroSelecionado.''; ?></h1>
                    <p id="numerototaldecapitulos"><?php echo 'Há '.$totalCapitulos.' capítulos neste livro';?></p>
                    <h3 id="numCapitulo"><?php echo 'Capítulo '.$capituloSelecionado.''; ?></h3>
                    <div class="divisor"></div>
                    <div class="versiculos">
                        <?php
                            foreach($xml -> chapter[(int) $capituloSelecionado - 1] -> verse as $verso){
                                echo '<p id="Verso'.$verso  -> attributes()-> number.'" class="Verso"><strong>'.$verso  -> attributes()-> number.'</strong>. '.$verso.'</p>';

                            }

                            
                        ?>
                    </div>
                    <div class="controladores">
                        <div class="row justify-content-center">
                            <div class="col-6 coluna d-flex flex-row-reverse">
                                <button  class="btn btnCapituloAnterior">Capítulo anterior</button>
                            </div>
                            <div class="col-6 coluna">
                                <button class="btn btnCapituloSucessor">Próximo capítulo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <footer>
            <div class="social"><a href="https://www.facebook.com/danieldavid3452"><i class="fab fa-facebook"></i></a>
            <a href="t.me/DanielDavidDev"><i class="fab fa-telegram"></i></a>
            <a href="https://instagram.com/danieldavid4889"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/DanielDavid48"><i class="fab fa-github"></i></a></div>
            <p>Bíblia open source, sinta-se a vontade para usá-la e/ou melhorá-la</p>
            <p class="copyright">David GROUP © 2022</p>
        </footer>
    </div>
    <!-- <footer>
        <h4>Bíblia online gratuita feita por Daniel David</h4>      
    </footer> -->




    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>   
    <script src="assets/js/outro1.js"></script>
</body>
</html>
