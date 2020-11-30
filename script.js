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
      // $(".topNav.responsive").toggle("fast");
      $(".navBar").toggleClass("navOpen");
      $(".navText").toggle("fast");
      $(".navLink").toggleClass("menuBlack");
    });
});

// scroll functions

$(document).ready(function() {
    var previousScroll = 20;
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= previousScroll) {
        $(".navBar").addClass("navBarHide");
    } else if (scroll < previousScroll) {
        $(".navBar").removeClass("navBarHide");
    }
    previousScroll = scroll;
});
});
