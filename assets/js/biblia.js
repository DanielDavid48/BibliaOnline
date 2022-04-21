/* $('#main-recent-filter').toggle();
$('#main-recent-filter').draggable(); */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

/* document.getElementById("myDropdown").classList.toggle("show"); */

  
$('.btnTestamento').on('click', function(){
  if($(this).hasClass("active")){

  } else {
    $('.btnTestamento.active').removeClass("active")
    $(this).addClass("active");
  }
})

$('.divCapituloNumero').on('click', function(){
  if($(this).hasClass("active")){

  } else {
    $('.divCapituloNumero.active').removeClass("active")
    $(this).addClass("active");
  }
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




$(document).ready(function () {
  /* $.ajax({
    url : "../../auxiliarBiblia.php",
    type : 'post',
    processData: false,
    contentType: false,
    data : "ola",
    
  })
  .done(function(msg){
    alert(msg)
  
  })
  
  .fail(function(jqXHR, textStatus, msg){
    alert(msg)
  }); */

}); 

/* $('.taga').on('click', function(){
  nomeClicado = $(this).attr('value');
  console.log(nomeClicado)
  $.ajax({
    url : "auxiliarBiblia.php",
    type : 'POST',
    data : {
      "livro": nomeClicado
    }
    
  })
  .done(function(msg){
    alert(msg)
    location.href="http://localhost/construcaopuratemplates/auxiliarBiblia.php"
  
  })
  
  .fail(function(jqXHR, textStatus, msg){
    alert(msg)
  });
}) */