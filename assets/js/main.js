/*jslint white: true */
"use strict";


$(document).ready(function () {

    $('#container-recomendations dt').on('click', function () {

    if($(this).hasClass('inactive')) {
      $('#container-recomendations dt').addClass('inactive');
      $('#container-recomendations dd').addClass('hidden');
      $(this).removeClass('inactive');
      $(this).next('dd').removeClass('hidden');
    }
  });

  $('.the-stats dt').on('click', function () {
    var parent_id = $(this).parents('section.the-stats').attr("id");

    if($(this).hasClass('inactive')) {
      $('#' + parent_id + ' dt').addClass('inactive');
      $('#' + parent_id + ' dd').addClass('hidden');
      $(this).removeClass('inactive');
      $(this).next('dd').removeClass('hidden');
    }
  });

  $('.the-stats .back').on('click', function () {
    var parent_id = $(this).parents('section.the-stats').attr("id");

    var leftPanelWidth = $('#' + parent_id + ' .left-panel').width();

    // If the info panel is not .hidden, slide it out and present data panel
    if($('#' + parent_id + ' .left-panel.data').hasClass('hidden') === false ) {

      //start info slide out animation
      $('#' + parent_id + ' .left-panel.data').animate(
        {left: -leftPanelWidth},
        500,
        "swing",
        function () {
          // swap out the info div with the data div
          $('#' + parent_id + ' .left-panel.info').removeClass('hidden');
          $('#' + parent_id + ' .left-panel.data').addClass('hidden');
        }
      );
      //end info slide out animation

      //start data slide in animation
      $('#' + parent_id + ' .left-panel.info').css('left', -leftPanelWidth);
      $('#' + parent_id + ' .left-panel.info').animate(
        {left: 0},
        1500,
        "swing"
      );
      //end data slide in animation
    }
  });

  $('a[href^="#"]').on('click', function (event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

});


function isIterable(obj){
   if(obj === undefined || obj === null){
      return false;
   }else if (obj.constructor === Array) {
     return true;
   }else{
      return obj.iterator !== undefined;
   }
}
