$(document).ready(function(){
  $('.partners__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 2,
    speed: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: true,
    responsive:[
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      }
    ],
    mobileFirst: true,
  });
  $('.team__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed:5000,
    waitForAnimate: false,
    wariableWidth: true,
    responsive:[
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 1199,
        settings: {
          arrows: true,
          slidesToShow: 3,
        }
      }
    ],
    mobileFirst: true,
  });
});