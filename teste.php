

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bíblia</title>
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/biblia.css">
</head>
<body>
    <div class="mainIUper roww">
        <div class="sidebar semmenu">
            <!-- <div class="container">
                <h1>BÍBLIA ONLINE</h1>
            </div> -->
            
            <div class="container menu align-content-center overflow-scroll">
                <div class="row justify-content-around">
                    <button class="btn btnTestamento active" id="btnAntigoTestamento">Antigo Testamento</button>
                    <button class="btn btnTestamento" id="btnNovoTestamento">Novo Testamento</button>
                </div>
                <div class="divisor"></div>
                <p><i class="fa fa-book"></i> Livros</p>
                <ul class="list-group list-group-flush listaAntigoTestamento si">
            <!--         <form action="outro.php" method="POST">
                        <li><button type="submit" name="algo" value="teste">valor</button></li>
                        <li>teste de novo</li>
                    </form> -->
                    <form action="" method="POST">
                    <?php
                        // Isso lê o json de livros
                        $json = file_get_contents('livros.json');
                                                
                        // Decode the JSON file
                        $json_data = json_decode($json,true);

                        // Itera o json
                        for ($i = 0; $i < count($json_data); $i++){
                            //echo ;
                            if($json_data[$i]['testamento'] == "Antigo"){
                                if($i == 0){
                                    echo '<li class="list-group-item active"><button name="selecionado" value="'.$json_data[$i]['nome'].'">'.$json_data[$i]['nome'].'</button></li>';
                                } else{
                                    echo '<li class="list-group-item"><button name="selecionado" value="'.$json_data[$i]['nome'].'">'.$json_data[$i]['nome'].'</button></li>';

                                }

                            } 
                        } 
                    ?>
                    </form>
                    
                </ul>
                <ul class="list-group list-group-flush listaNovoTestamento no">
                    <?php
                            // Isso lê o json de livros
                            $json = file_get_contents('livros.json');
                                                    
                            // Decode the JSON file
                            $json_data = json_decode($json,true);

                            // Itera o json
                            for ($a = 0; $a < count($json_data); $a++){
                                //echo ;
                                if($json_data[$a]['testamento'] == "Novo"){
                                    if($a == 1){
                                        echo '<li class="list-group-item active"><a href="" class="taga" value="'.$json_data[$a]['nome'].'">'.$json_data[$a]['nome'].'</a></li>';
                                    } else{
                                        echo '<li class="list-group-item"><a href="" class="taga" value="'.$json_data[$a]['nome'].'">'.$json_data[$a]['nome'].'</a></li>';
                                    }

                                } 
                            } 
                    ?>
                </ul>
                <div class="divisor"></div>
                <p>Capítulos</p>
                <div class="tabela">
                    <div class="row">
                        <div class="col-3">
                            <div class="container divCapituloNumero active"">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container divCapituloNumero"">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container divCapituloNumero"">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container divCapituloNumero">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container divCapituloNumero active"">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container divCapituloNumero"">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container divCapituloNumero"">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container divCapituloNumero">
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divisor"></div>
                <p>Versículos</p>
                <div class="tabela">
                    <div class="row">
                        <div class="col-3">
                            <div class="container  divVersiculo active">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container  divVersiculo">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container  divVersiculo">
                                <p>1</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="container  divVersiculo">
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main commenu">
            <div class="container">
                <div class="recuamenu">
                    <div class="row">
                        <div class="col-6 coluna">
                            <i class="fa fa-bars" id="bars"></i>
                        </div>
                        <div class="col-6 coluna">
                            <img src="assets/img/cross.png" height="30px" width="30px" alt="">
                        </div>
                    </div>
                </div>
                <div class="divisor"></div>
                <div class="bodyMain">
                    <h1>Genênsis</h1>
                    <h3>Capítulo 1</h3>
                    <div class="versiculos">
                        <p>Ajuntando-se entretanto muitos milhares de pessoas, de sorte que se atropelavam uns aos outros, começou a dizer aos seus discípulos: Acautelai-vos primeiramente do fermento dos fariseus, que é a hipocrisia.
                            Mas nada há encoberto que não haja de ser descoberto; nem oculto, que não haja de ser sabido.
                            Porquanto tudo o que em trevas dissestes, à luz será ouvido; e o que falastes ao ouvido no gabinete, sobre os telhados será apregoado.
                            E digo-vos, amigos meus: Não temais os que matam o corpo e, depois, não têm mais que fazer.
                            Mas eu vos mostrarei a quem deveis temer; temei aquele que, depois de matar, tem poder para lançar no inferno; sim, vos digo, a esse temei.
                            Não se vendem cinco passarinhos por dois ceitis? E nenhum deles está esquecido diante de Deus.
                        </p>
                        <p>Ajuntando-se entretanto muitos milhares de pessoas, de sorte que se atropelavam uns aos outros, começou a dizer aos seus discípulos: Acautelai-vos primeiramente do fermento dos fariseus, que é a hipocrisia.
                            Mas nada há encoberto que não haja de ser descoberto; nem oculto, que não haja de ser sabido.
                            Porquanto tudo o que em trevas dissestes, à luz será ouvido; e o que falastes ao ouvido no gabinete, sobre os telhados será apregoado.
                            E digo-vos, amigos meus: Não temais os que matam o corpo e, depois, não têm mais que fazer.
                            Mas eu vos mostrarei a quem deveis temer; temei aquele que, depois de matar, tem poder para lançar no inferno; sim, vos digo, a esse temei.
                            Não se vendem cinco passarinhos por dois ceitis? E nenhum deles está esquecido diante de Deus.
                        </p>
                        <p>Ajuntando-se entretanto muitos milhares de pessoas, de sorte que se atropelavam uns aos outros, começou a dizer aos seus discípulos: Acautelai-vos primeiramente do fermento dos fariseus, que é a hipocrisia.
                            Mas nada há encoberto que não haja de ser descoberto; nem oculto, que não haja de ser sabido.
                            Porquanto tudo o que em trevas dissestes, à luz será ouvido; e o que falastes ao ouvido no gabinete, sobre os telhados será apregoado.
                            E digo-vos, amigos meus: Não temais os que matam o corpo e, depois, não têm mais que fazer.
                            Mas eu vos mostrarei a quem deveis temer; temei aquele que, depois de matar, tem poder para lançar no inferno; sim, vos digo, a esse temei.
                            Não se vendem cinco passarinhos por dois ceitis? E nenhum deles está esquecido diante de Deus.
                        </p>
                    </div>
                    <div class="controladores">
                        <div class="row justify-content-center">
                            <div class="col-6 coluna d-flex flex-row-reverse">
                                <button class="btn btnCapituloAnterior">Capítulo anterior</button>
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
        <h4>Bíblia online gratuita feita por Daniel David</h4>
        
    </footer>




    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="assets/js/biblia.js"></script>
</body>
</html>
