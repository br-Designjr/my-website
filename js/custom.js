/* jQuery Pre loader
-----------------------------------------------*/
$(window).on('load', function() {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
  -----------------------------------------------*/
  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });

  /* Smoothscroll js
  -----------------------------------------------*/
  $('.navbar-default a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 49
    }, 1000);
    event.preventDefault();
  });





  
  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $('body').vegas({
    slides: [
      { src: 'images/shop.jpg' },
      { src: 'images/Chow-Chow-puppies.jpg' },
      { src: 'images/chow-chow-puppies2.jpg' },
      { src: 'images/slider-dog-and-cat-eating.jpg' }
    ],
    timer: false,
    transition: ['zoomIn'],
    animation: ['kenburns']
  });

  /* Team carousel (מותגים / צוות)
  -----------------------------------------------*/
  $("#team-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 700,
    margin: 20,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  /* Back to Top
  -----------------------------------------------*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

  /* wow.js animation initialization
  -----------------------------------------------*/
  new WOW({ mobile: false }).init();

});
