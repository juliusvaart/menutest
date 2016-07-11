(function($) {

  $('.current').on('click', function() {
    
    if($('#editooturbomenu').hasClass('open')) {
      
      $('#editooturbomenu').animate({
        marginTop: '-12em'
      }, 300).removeClass('open');
      
      $('.current').text($textthing);
      
      $('.hamburger').animate({
        top: 20
      }, 300);
      
    } else {
    
      $('#editooturbomenu').animate({
        marginTop: 0
      }, 300).addClass('open');
      
      $textthing = $('.current').text();
      
      $('.current').text('menu sluiten');
      
      $('.hamburger').animate({
        top: 160
      }, 300);
    
    }
    
  });
  
})(jQuery);  
