"use strict";


$(document).ready(function(){

  $('#container-recomendations dt').on('click', function(d){

    if($(this).hasClass('inactive')) {
      $('#container-recomendations dt').addClass('inactive');
      $('#container-recomendations dd').addClass('hidden');
      $(this).removeClass('inactive');
      $(this).next('dd').removeClass('hidden');
    }
  });

  $('#slide-3-3 dt').on('click', function(d){

    if($(this).hasClass('inactive')) {
      $('#slide-3-3 dt').addClass('inactive');
      $('#slide-3-3 dd').addClass('hidden');
      $(this).removeClass('inactive');
      $(this).next('dd').removeClass('hidden');
    }
  });

  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

});
