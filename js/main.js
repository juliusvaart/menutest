(function($) {


  $('.current').on('click', function() {
    
    if($('.sitemenu').hasClass('open')) {
      
      $('.sitemenu').animate({
        marginTop: -140
      }, 300).removeClass('open');
      
      $('.current').text($textthing);
      
      $('.hamburger').animate({
        top: 20
      }, 300);
      
    } else {
    
      $('.sitemenu').animate({
        marginTop: 0
      }, 300).addClass('open');
      
      $textthing = $('.current').text();
      
      $('.current').text('menu sluiten');
      
      $('.hamburger').animate({
        top: 160
      }, 300);
    
    }
    
  });
  
  
/*
  $('.sitemenu').swipe({
    
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      
      if(direction == 'down' && distance > 10) {
        
        $('.sitemenu').animate({
          marginTop: 0
        }, 300).addClass('open');
        
      }
      if(direction == 'up' && distance > 10) {
        
        $('.sitemenu').animate({
          marginTop: -110
        }, 300).removeClass('open');
      
      }
      
      //alert(distance);
      
      $('.text').text( phase +" you have swiped " + distance + "px in direction:" + direction );
      
    },
    
    allowPageScroll: 'vertical'
    
  });
*/
  
/*
  
  $('.sitemenu').swipe( { swipeStatus:swipe2, allowPageScroll:"horizontal" } );
  
  function swipe2(event, phase, direction, distance) {
    $('.text').text( phase +" you have swiped " + distance + "px in direction:" + direction );
    
    
    
    
    if(direction == 'up') {
      
      $theswipe = distance + 110;
    
      $('.sitemenu').css({
        marginTop: $theswipe
      })
    
    }
    
    if(distance > 109) {
      return false;
    }
    
  }
*/
  
  
  
})(jQuery);
