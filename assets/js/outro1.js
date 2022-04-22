function valor_cookie(cname) {
  var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Cria um novo cookie
// Parâmetro 1 é o nome do cookie
// Parâmetro 2 é o valor do cookie
function cria_cookie(nome, valor) {
  // Cria uma data 01/01/2020
  var data = new Date(2099,0,01);
  // Converte a data para GMT
  data = data.toGMTString();
  // Codifica o valor do cookie para evitar problemas
  //valor = encodeURI(valor);
  // Cria o novo cookie
  document.cookie = nome + '=' + valor + '; expires=' + data + ';';
}

$(document).ready(function () {
  if(valor_cookie('Livro') === ""){
    cria_cookie('Livro', 'Gênesis')
  }

  if(valor_cookie('Capítulo') === ""){
    cria_cookie('Capítulo', '1')
  }

  if(valor_cookie('Versiculo') === ""){
    cria_cookie('Versiculo', '1')
  }
  existe_cookie = valor_cookie('reload');
  if(existe_cookie != ""){
    if(existe_cookie === 'faça'){
      let livro = valor_cookie('Livro');
      let cap = valor_cookie('Capítulo');
      document.getElementById('input').value = livro;
      document.getElementById('input1').value = cap;
      document.getElementById('input2').value = "1";
      document.getElementById('envia').click();
      cria_cookie('reload', 'Feito')
    }
  }
}); 


$('.btnTestamento').on('click', function(){
  if($(this).hasClass("active")){

  } else {
    $('.btnTestamento.active').removeClass("active")
    $(this).addClass("active");
  }
})

$('.livroselecionadoA').on('click', function(){
  if($(this).hasClass("active")){

  } else {
    $('.list-group-item .active').removeClass("active")
    $(this).addClass("active");
  }
  cria_cookie('Livro', $(this).attr('value'))
  valor = $(this).attr('value');
  document.getElementById('input').value = valor;
  document.getElementById('input1').value = "1";
  document.getElementById('input2').value = "1";
  
  document.getElementById('envia').click();

})

$('.list-group-item').on('click', function(){
  
  cria_cookie('Livro', $(this).children().attr('value'))
  valor = $(this).children().attr('value')
  document.getElementById('input').value = valor;
  document.getElementById('input1').value = "1";
  document.getElementById('input2').value = "1";
  
  document.getElementById('envia').click();

})

$('.divCapituloNumero').on('click', function(){
  if($(this).hasClass("active")){

  } else {
    $('.divCapituloNumero.active').removeClass("active")
    $(this).addClass("active");
  }
  cria_cookie('Capítulo', $(this).attr('value'))
  valor = $(this).attr('value');
  document.getElementById('input').value = valor_cookie('Livro');
  document.getElementById('input1').value = valor;
  document.getElementById('input2').value = "1";
  
  document.getElementById('envia').click();
})

$('.divVersiculo').on('click', function(){
  if($(this).hasClass("active")){

  } else {
    $('.divVersiculo.active').removeClass("active")
    $(this).addClass("active");
  }
  
  pegaVersiculo = document.getElementById('Verso' + $(this).attr('value'))
  window.location.href='#Verso' + $(this).attr('value');

  cria_cookie('Versiculo', $(this).attr('value'))
  valor = $(this).attr('value');
  document.getElementById('input').value = valor_cookie('Livro');
  document.getElementById('input1').value = valor_cookie('Capítulo');
  document.getElementById('input2').value = valor;
  
  document.getElementById('envia').click();
  
})

$('#bars').on('click', function(){
  largura = window.screen.width;

  if(largura <= 511){
      $('#bars2').removeClass('puxado')
      $('#bars2').removeClass('fa-bars')
      $('#bars2').addClass('fa-times')
  } else {
      $('#bars2').addClass('puxado')
  }

  if($(this).hasClass("fa-times")){
    $(this).removeClass("fa-times");
    $(this).addClass("fa-bars");
    $(".main commenu").removeClass("commenu");
    $(".main commenu").addClass("semmenu");
    $('.sidebar').addClass("semmenu");

  } else {
    $(this).removeClass("fa-bars");
    $(this).addClass("fa-times");
    $(".main semmenu").removeClass("semmenu");
    $(".main").addClass("commenu");
    $('.sidebar').removeClass("semmenu");
  }
})

$('#bars2').on('click', function(){
  
  if($(this).hasClass("fa-times")){
    $(this).removeClass("fa-times");
    $(this).addClass("fa-bars");
    $('#bars').removeClass('fa-times')
    $('#bars').addClass('fa-bars')
    $(".main commenu").removeClass("commenu");
    $(".main commenu").addClass("semmenu");
    $('.sidebar').addClass("semmenu");

  } else {
    $(this).removeClass("fa-bars");
    $(this).addClass("fa-times");
    $(".main semmenu").removeClass("semmenu");
    $(".main").addClass("commenu");
    $('.sidebar').removeClass("semmenu");
  }
})


$("#btnAntigoTestamento").on('click', function(){
  $('.listaNovoTestamento.si').removeClass("si");
  $('.listaNovoTestamento').addClass("no");
  $('.listaAntigoTestamento').addClass("si");

})

$("#btnNovoTestamento").on('click', function(){
  $('.listaAntigoTestamento.si').removeClass("si");
  $('.listaAntigoTestamento').addClass("no");
  $('.listaNovoTestamento').addClass("si");
})
  
$('.btnCapituloAnterior').on('click', function(){
    // Pega os dois dados essencias do localStorage
    capituloatual = valor_cookie('Capítulo')
    livroatual = valor_cookie('Livro')
    canSend = false;

    // Essa solicitação GET vai pedir ao modulo a quantidade de capitulos que o
    // livro atual tem
    $.ajax({
        method: "GET",
        url: "assets/modules/modulo.php",
        data: { nome: livroatual, modulo: "ConsultaCapitulos"}
    }).done(function( msg ) {
        // Se a solicitação for sucedida, define no localstorage a 
        // quantidade de capítylos do livro atual
        cria_cookie('totalcap', msg)
    }).fail(function(msg){
        // Se a solicitacao for falhada, define no localstorage 
        // a quantidade de capitulos do livro atual como 1
        cria_cookie('totalcap', 1)
    })

    // Pega o número de capitulos do livro atual do LocalStorage
    numcapitulos = valor_cookie('totalcap')


    // Verifica se o capitulo atual é o ultimo capitulo do livro atual
    // Caso seja, faz com que o livro seja mudado
    if(parseInt(capituloatual) === 1){
        // Verifica se o livro atual é o último da biblia
        if(livroatual === "Gênesis"){
            Swal.fire('Não é possível retroceder pois Gênesis é o primeiro livro da bíblia!')
        } else {
            // Essa solicitação GET vai pedir ao módulo qual o livro que sucede o livro atual
            $.ajax({
                method: "GET",
                url: "assets/modules/modulo.php",
                data: { nome: livroatual, tipo: "antes", modulo: "ConsultaLivro"}

            }).done(function( msg ) {
                // se for sucedido define os input do post com o livro novo
                document.getElementById('input').value = msg;
                document.getElementById('input1').value = "1";
                document.getElementById('input2').value = "1";

                // Atualiza os dados no localstorage
                cria_cookie('Livro', msg)
                cria_cookie('Capítulo', '1')
                cria_cookie('Versiculo', '1')

                canSend = true;

            }) .fail(function(msg){
                // se falhar, define alguns dados padrões
                document.getElementById('input').value = livroatual;
                document.getElementById('input1').value = capituloatual;
                document.getElementById('input2').value = "1";

                // Atualiza os dados no localstorage
                cria_cookie('Livro', livroatual)
                cria_cookie('Capítulo', capituloatual)
                cria_cookie('Versiculo', '1')

                canSend = true;
            })
        }
    } else {
        // Caso o capítulo atual não seja o último capítulo do livro atual
        // troca-se o capitulo sucendedo-o normalmente
        document.getElementById('input').value = livroatual;
        document.getElementById('input1').value = parseInt(capituloatual) - 1;
        document.getElementById('input2').value = "1";

        // Atualiza os dados no localstorage
        cria_cookie('Livro', livroatual)
        cria_cookie('Capítulo', parseInt(capituloatual) - 1)
        cria_cookie('Versiculo', '1')

        canSend = true;
    }

    


    cria_cookie('reload', 'faça')
    // Faz o post dos dados
    if(canSend){document.getElementById('envia').click()}
    
})

$('.btnCapituloSucessor').on('click', function(){
    // Pega os dois dados essencias do localStorage
    capituloatual = valor_cookie('Capítulo')
    livroatual = valor_cookie('Livro')
    canSend = false;

    // Essa solicitação GET vai pedir ao modulo a quantidade de capitulos que o
    // livro atual tem
    $.ajax({
        method: "GET",
        url: "assets/modules/modulo.php",
        data: { nome: livroatual, modulo: "ConsultaCapitulos"}
    }).done(function( msg ) {
        // Se a solicitação for sucedida, define no localstorage a 
        // quantidade de capítylos do livro atual
        cria_cookie('totalcap', msg)
    }).fail(function(msg){
        // Se a solicitacao for falhada, define no localstorage 
        // a quantidade de capitulos do livro atual como 1
        cria_cookie('totalcap', 1)
    })

    // Pega o número de capitulos do livro atual do LocalStorage
    numcapitulos = valor_cookie('totalcap')


    // Verifica se o capitulo atual é o ultimo capitulo do livro atual
    // Caso seja, faz com que o livro seja mudado
    if(parseInt(capituloatual) === parseInt(numcapitulos)){
        // Verifica se o livro atual é o último da biblia
        if(livroatual === "Apocalipse"){
            Swal.fire('Não é possível avançar pois Apocalipse é o último livro da bíblia!')
        } else {
            // Essa solicitação GET vai pedir ao módulo qual o livro que sucede o livro atual
            $.ajax({
                method: "GET",
                url: "assets/modules/modulo.php",
                data: { nome: livroatual, tipo: "apos", modulo: "ConsultaLivro"}

            }).done(function( msg ) {
                // se for sucedido define os input do post com o livro novo
                document.getElementById('input').value = msg;
                document.getElementById('input1').value = "1";
                document.getElementById('input2').value = "1";

                // Atualiza os dados no localstorage
                cria_cookie('Livro', msg)
                cria_cookie('Capítulo', '1')
                cria_cookie('Versiculo', '1')

                canSend = true;

            }) .fail(function(msg){
                // se falhar, define alguns dados padrões
                document.getElementById('input').value = livroatual;
                document.getElementById('input1').value = capituloatual;
                document.getElementById('input2').value = "1";

                // Atualiza os dados no localstorage
                cria_cookie('Livro', livroatual)
                cria_cookie('Capítulo', capituloatual)
                cria_cookie('Versiculo', '1')

                canSend = true;
            })
        }
    } else {
        // Caso o capítulo atual não seja o último capítulo do livro atual
        // troca-se o capitulo sucendedo-o normalmente
        document.getElementById('input').value = livroatual;
        document.getElementById('input1').value = parseInt(capituloatual) + 1;
        document.getElementById('input2').value = "1";

        // Atualiza os dados no localstorage
        cria_cookie('Livro', livroatual)
        cria_cookie('Capítulo', parseInt(capituloatual) + 1)
        cria_cookie('Versiculo', '1')

        canSend = true;
    }

    


    cria_cookie('reload', 'faça')
    // Faz o post dos dados
    if(canSend){document.getElementById('envia').click()}
    
})


