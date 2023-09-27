// Courtesy of https://stackoverflow.com/a/50430187

$('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
    var src = $(this).attr('src');
    var modal;
  
    function removeModal() {
      modal.remove();
      $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
      background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out'
    }).click(function() {
      removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e) {
      if (e.key === 'Escape') {
        removeModal();
      }
    });
});

// Courtesy of https://codepen.io/annalarson/pen/AegVzq
$(function(){  // $(document).ready shorthand
  $('.initialload').animate({opacity:'1'}, 800);
  $('.maininfo').animate({opacity:'1'}, 800);
});
$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          var bottom_of_object = $(this).position().top + ($(this).outerHeight() / 3);
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it in */
          if( bottom_of_window > bottom_of_object ){
              $(this).animate({opacity:'1'}, 800);
          }
      }); 
  });
});

// Courtesy of w3
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mainnav").style.fontSize = "2em";
    document.getElementById("mainnav").style.padding = ".25em 0";
  } else {
    document.getElementById("mainnav").style.fontSize = "4em";
    document.getElementById("mainnav").style.padding = ".25em 0";
  }
}

// Courtesy of https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html
$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});