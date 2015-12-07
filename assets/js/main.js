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

  $('#slide-3-3 .back').on('click', function(){
    console.log('hahaha');
    var leftPanelWidth = $('#slide-3-3 .left-panel').width();

    // If the info panel is not .hidden, slide it out and present data panel
    if($('#slide-3-3 .left-panel.data').hasClass('hidden') === false ){

      //start info slide out animation
      $('#slide-3-3 .left-panel.data').animate(
        {left: -leftPanelWidth},
        500,
        "swing",
        function(){
          // swap out the info div with the data div
          $('#slide-3-3 .left-panel.info').removeClass('hidden');
          $('#slide-3-3 .left-panel.data').addClass('hidden');
        }
      );
      //end info slide out animation

      //start data slide in animation
      $('#slide-3-3 .left-panel.info').css('left', -leftPanelWidth);
      $('#slide-3-3 .left-panel.info').animate(
        {left: 0},
        1500,
        "swing"
      );
      //end data slide in animation

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
