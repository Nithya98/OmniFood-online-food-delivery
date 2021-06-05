
// For sticky nav bar
$(document).ready(function  (){
    $('.js--section--features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: "60px;"
    })
})

// Scroll on buttons
$('.scroll-to-plans').click(function(){
    $('html, body').animate({scrollTop:$('.js--section-plans').offset().top}, 1000)
})

$('.scroll-to-start').click(function(){
    $('html, body').animate({scrollTop:$('.js--section--features').offset().top}, 1000)
})

// Navigation scroll to

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//   Animation to scroll
$('.js--wp-1').waypoint(
    (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-2').waypoint(
    (direction) => {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-3').waypoint(
    (direction) => {
      $('.js--wp-3').addClass('animate__animated animate__fadeInUp');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-4').waypoint(
    (direction) => {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
      offset: '50%',
    }
  );

//   nav icon
$('.js--nav-icon').click(function(){
    var nav = $('.js-main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);

    if(icon.hasClass('fa-bars')){
        icon.addClass('fa-times');
        icon.removeClass('fa-bars');    
    }else{
        icon.addClass('fa-bars');
        icon.removeClass('fa-times');
    }
})