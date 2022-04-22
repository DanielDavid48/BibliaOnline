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
  //var data = new Date(2099,0,01);
  // Converte a data para GMT
  //data = data.toGMTString();
  // Codifica o valor do cookie para evitar problemas
  //valor = encodeURI(valor);
  // Cria o novo cookie
  document.cookie = nome + '=' + valor + ';'
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
  document.getElementById('envia').click();

})

$('.list-group-item').on('click', function(){
  cria_cookie('Livro', $(this).children().attr('value'))
  document.getElementById('envia').click();

})

$('.divCapituloNumero').on('click', function(){
  if($(this).hasClass("active")){

  } else {
    $('.divCapituloNumero.active').removeClass("active")
    $(this).addClass("active");
  }
  cria_cookie('Capítulo', $(this).attr('value'))
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
    // Pega os dois dados essencias do cookies
    capituloatual = valor_cookie('Capítulo')
    livroatual = valor_cookie('Livro')
    canSend = false;


    // Pega o número de capitulos do livro atual do cookies
    numcapitulos = valor_cookie('totalcapitulos')

    // Verifica se o capitulo atual é o ultimo capitulo do livro atual
    // Caso seja, faz com que o livro seja mudado
    if(parseInt(capituloatual) === 1){
        // Verifica se o livro atual é o último da biblia
        if(livroatual === "Gênesis"){
            Swal.fire('Não é possível retroceder pois Gênesis é o primeiro livro da bíblia!')
        } else {
              // Atualiza os dados no cookies
              cria_cookie('anterior', 'mudalivro')
              canSend = true;
        }
    } else {
        // Caso o capítulo atual não seja o último capítulo do livro atual
        // troca-se o capitulo sucendedo-o normalmente
        cria_cookie("capnovo", parseInt(capituloatual) - 1);

        // Atualiza os dados no cookies
        cria_cookie('anterior', "socapitulo")

        canSend = true;
    }

    //cria_cookie('reload', 'faça')
    // Faz o post dos dados
    if(canSend){document.getElementById('envia').click()}
    
})

$('.btnCapituloSucessor').on('click', function(){
  // Pega os dois dados essencias do cookies
  capituloatual = valor_cookie('Capítulo')
  livroatual = valor_cookie('Livro')
  canSend = false;


  // Pega o número de capitulos do livro atual do cookies
  numcapitulos = valor_cookie('totalcapitulos')

  // Verifica se o capitulo atual é o ultimo capitulo do livro atual
  // Caso seja, faz com que o livro seja mudado
  if(parseInt(capituloatual) === parseInt(valor_cookie('totalcapitulos'))){
      // Verifica se o livro atual é o último da biblia
      if(livroatual === "Apocalipse"){
        Swal.fire('Não é possível avançar pois Apocalipse é o último livro da bíblia!')
      } else {
            // Atualiza os dados no cookies
            cria_cookie('proximo', 'mudalivro')
            canSend = true;
      }
  } else {
      // Caso o capítulo atual não seja o último capítulo do livro atual
      // troca-se o capitulo sucendedo-o normalmente
      cria_cookie("capnovo", parseInt(capituloatual) + 1);

      // Atualiza os dados no cookies
      cria_cookie('anterior', "socapitulo")

      canSend = true;
  }

  //cria_cookie('reload', 'faça')
  // Faz o post dos dados
  if(canSend){document.getElementById('envia').click()}
  
})