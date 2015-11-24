"use strict";


$(document).ready(function(){

  $('#container-recomendations dt').on('click', function(d){

    if($(this).hasClass('inactive')) {
      $('#container-recomendations dt').addClass('inactive');
      $('#container-recomendations dd').addClass('hidden');
      $(this).removeClass('inactive');
      $(this).next('dd').removeClass('hidden');
    }
    else {
      $(this).addClass('inactive');
      $(this).next('dd').addClass('hidden');
    }
  });

});
