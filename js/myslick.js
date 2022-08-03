$(document).ready(function(){
  $('.clients__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    speed: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: true,
  });
  $('.team__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed:5000,
    waitForAnimate: false,
    wariableWidth: true,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 3,
          // centerMode: true,
        }
      }
    ],
    mobileFirst: true,
  });
});