$(document).ready(function(){

// SLIDER
   $('.slider').slick({
    arrows: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
   });

// FULL PAGE
   $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true
});

   //methods
$.fn.fullpage.setAllowScrolling(true);   
});
 







