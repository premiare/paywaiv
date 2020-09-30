 // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

// SMOOTH SCROLL TO TOP
$(document).ready(function() {
  $(".homeLink").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});


// DROP DOWN MENU - RESPONSIVE
$(document).ready(function(){
  //this feature only show on 600px device width
    $(".hamburger-menu").click(function(){
      $(".burger-1, .burger-2, .burger-3").toggleClass("open");
      $(".topNav").toggleClass("responsive");
    });
});



// MENU CHANGES COLOR OVER DARK ELEMENTS
$(document).ready(function(){
	$(window).scroll(function(){
  	var light_pos = $('.mainImage').offset().top;
    var light_height = $('.mainImage').height();
    var menu_pos = $('.topNav').offset().top;
    var menu_height = $('.topNav').height();
    var scroll = $(window).scrollTop();

    // console.log('light',light_pos);
    // console.log('menu',menu_pos);
    // console.log('scroll',scroll);

    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
    	$('.navLink').addClass('menuWhite');
      $('.navLink').removeClass('menuBlack');
    }
    else {
    	$('.navLink').removeClass('menuWhite');
      $('.navLink').addClass('menuBlack');
    }
  })
});
