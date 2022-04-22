
$(document).ready(function () {
  localStorage.setItem('Livro', 'Gênesis');
  localStorage.setItem('Capítulo', '1');
  localStorage.setItem('Versículo', '1');

  document.getElementById('input').value = 'Gênesis';
  document.getElementById('input1').value = '1';
  document.getElementById('input2').value = '1';

  
  document.getElementById('envia').click();


}); 

$('.btnTestamento').on('click', function(){
  if($(this).hasClass("active")){

  } else {
    $('.btnTestamento.active').removeClass("active")
    $(this).addClass("active");
  }
})

$('.botao').on('click', function(){
  alert('ENtrou')
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
})

$('#bars').on('click', function(){
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





