//Slider Menu JS
$(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        fade:false,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left prevleft"></i>',
        nextArrow:'<i class="fas fa-chevron-right nextright"></i>'
      }); 
  });

//Sticky Menu JS
var navbar = document.querySelector(".navbar");
window.addEventListener("scroll",function(){
  var sticky = window.scrollY;
  navbar.classList.toggle("sticky_header", sticky >200);
})

//MixIt UP JS
var mixer = mixitup('.prj-item-main');

//LightBox JS
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

//VenuBox JS
new VenoBox({
  spinner: 'circle-fade',
});

//CounterUP JS
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

//Slik Slider JS
$('.recent-posts-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-chevron-left post-prevleft"></i>',
  nextArrow:'<i class="fas fa-chevron-right post-nextright"></i>',
  centerMode:true,
  centerPadding:"0px",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});