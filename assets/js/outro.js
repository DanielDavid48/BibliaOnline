
$(document).ready(function () {
  try {
      localStorage.getItem('reload');
  } catch (e){
      console.log("Erro: " + e)
  } finally {
      if(localStorage.getItem('reload') === 'faça'){
          let livro = localStorage.getItem('Livro');
          let cap = localStorage.getItem('Capítulo');
          document.getElementById('input').value = livro;
          document.getElementById('input1').value = cap;
          document.getElementById('input2').value = "1";
          document.getElementById('envia').click();
          localStorage.setItem('reload', 'Feito')
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
  localStorage.removeItem("Livro");
  localStorage.setItem('Livro', $(this).attr('value'))
  valor = $(this).attr('value');
  console.log('Livro selecionado: ' + valor)
  document.getElementById('input').value = valor;
  document.getElementById('input1').value = "1";
  document.getElementById('input2').value = "1";
  
  document.getElementById('envia').click();

})

$('.list-group-item').on('click', function(){
  
  localStorage.removeItem("Livro");
  localStorage.setItem('Livro', $(this).children().attr('value'))
  valor = $(this).children().attr('value')
  console.log('Livro selecionado: ' + valor)
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
  localStorage.removeItem("Capítulo");
  localStorage.setItem('Capítulo', $(this).attr('value'))
  valor = $(this).attr('value');
  console.log('Capítulo: ' + valor)
  document.getElementById('input').value = localStorage.getItem('Livro');
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

  

  localStorage.removeItem("Versiculo");
  localStorage.setItem('Versiculo', $(this).attr('value'))
  valor = $(this).attr('value');
  console.log('Versículo: ' + valor)
  document.getElementById('input').value = localStorage.getItem('Livro');
  document.getElementById('input1').value = localStorage.getItem('Capítulo');
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
    capituloatual = localStorage.getItem('Capítulo')
    livroatual = localStorage.getItem('Livro')
    canSend = false;

    // Essa solicitação GET vai pedir ao modulo a quantidade de capitulos que o
    // livro atual tem
    $.ajax({
        method: "GET",
        url: "modulo.php",
        data: { nome: livroatual, modulo: "ConsultaCapitulos"}
    }).done(function( msg ) {
        // Se a solicitação for sucedida, define no localstorage a 
        // quantidade de capítylos do livro atual
        localStorage.setItem('totalcap', msg)
    }).fail(function(msg){
        // Se a solicitacao for falhada, define no localstorage 
        // a quantidade de capitulos do livro atual como 1
        localStorage.setItem('totalcap', 1)
    })

    // Pega o número de capitulos do livro atual do LocalStorage
    numcapitulos = localStorage.getItem('totalcap')


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
                url: "modulo.php",
                data: { nome: livroatual, tipo: "antes", modulo: "ConsultaLivro"}

            }).done(function( msg ) {
                // se for sucedido define os input do post com o livro novo
                document.getElementById('input').value = msg;
                document.getElementById('input1').value = "1";
                document.getElementById('input2').value = "1";

                // Atualiza os dados no localstorage
                localStorage.setItem('Livro', msg)
                localStorage.setItem('Capítulo', '1')
                localStorage.setItem('Versiculo', '1')

                canSend = true;

            }) .fail(function(msg){
                // se falhar, define alguns dados padrões
                document.getElementById('input').value = livroatual;
                document.getElementById('input1').value = capituloatual;
                document.getElementById('input2').value = "1";

                // Atualiza os dados no localstorage
                localStorage.setItem('Livro', livroatual)
                localStorage.setItem('Capítulo', capituloatual)
                localStorage.setItem('Versiculo', '1')

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
        localStorage.setItem('Livro', livroatual)
        localStorage.setItem('Capítulo', parseInt(capituloatual) - 1)
        localStorage.setItem('Versiculo', '1')

        canSend = true;
    }

    


    localStorage.setItem('reload', 'faça')
    // Faz o post dos dados
    if(canSend){document.getElementById('envia').click()}
    
})

$('.btnCapituloSucessor').on('click', function(){
    // Pega os dois dados essencias do localStorage
    capituloatual = localStorage.getItem('Capítulo')
    livroatual = localStorage.getItem('Livro')
    canSend = false;

    // Essa solicitação GET vai pedir ao modulo a quantidade de capitulos que o
    // livro atual tem
    $.ajax({
        method: "GET",
        url: "modulo.php",
        data: { nome: livroatual, modulo: "ConsultaCapitulos"}
    }).done(function( msg ) {
        // Se a solicitação for sucedida, define no localstorage a 
        // quantidade de capítylos do livro atual
        localStorage.setItem('totalcap', msg)
    }).fail(function(msg){
        // Se a solicitacao for falhada, define no localstorage 
        // a quantidade de capitulos do livro atual como 1
        localStorage.setItem('totalcap', 1)
    })

    // Pega o número de capitulos do livro atual do LocalStorage
    numcapitulos = localStorage.getItem('totalcap')


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
                url: "modulo.php",
                data: { nome: livroatual, tipo: "apos", modulo: "ConsultaLivro"}

            }).done(function( msg ) {
                // se for sucedido define os input do post com o livro novo
                document.getElementById('input').value = msg;
                document.getElementById('input1').value = "1";
                document.getElementById('input2').value = "1";

                // Atualiza os dados no localstorage
                localStorage.setItem('Livro', msg)
                localStorage.setItem('Capítulo', '1')
                localStorage.setItem('Versiculo', '1')

                canSend = true;

            }) .fail(function(msg){
                // se falhar, define alguns dados padrões
                document.getElementById('input').value = livroatual;
                document.getElementById('input1').value = capituloatual;
                document.getElementById('input2').value = "1";

                // Atualiza os dados no localstorage
                localStorage.setItem('Livro', livroatual)
                localStorage.setItem('Capítulo', capituloatual)
                localStorage.setItem('Versiculo', '1')

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
        localStorage.setItem('Livro', livroatual)
        localStorage.setItem('Capítulo', parseInt(capituloatual) + 1)
        localStorage.setItem('Versiculo', '1')

        canSend = true;
    }

    


    localStorage.setItem('reload', 'faça')
    // Faz o post dos dados
    if(canSend){document.getElementById('envia').click()}
    
})


