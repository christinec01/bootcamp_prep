$(document).ready(function(){
    $('.clickme').mouseenter(function(){
      $(this).fadeTo('slow', .2);
    });

    $('.clickme').mouseleave(function(){
      $(this).fadeTo('fast', 1);
    });

});
