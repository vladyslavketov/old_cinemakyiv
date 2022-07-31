$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    slidesToShow: 3,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
  });
});