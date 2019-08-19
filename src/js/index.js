import '../styles/main.scss';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';


import * as variables from './variables';



variables.downBtn.addEventListener('click', ()=>{
    variables.navigation.classList.toggle('mobile-nav');
});


// for filter
$(document).ready(function(){
    $('.category-item').click(function(){
        var category = $(this).attr('id');
        if(category == 'all'){
            $('.outer-sell-item').removeClass('hide-sell');
        }
        else{
            $('.outer-sell-item').addClass('hide-sell');
            $('.' + category).removeClass('hide-sell');
        }

        var btnContainer = $(".category-container");
        var btns = $(".category-item");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName(" act");
                current[0].className = current[0].className.replace(" act", " ");
                this.className += " act";
            });
        }
     });
});

// for filter ends


// for counter starts

window.addEventListener('scroll',()=>{
    // let scrollPosition = window.scrollY;
    // if(scrollPosition >= variables.about){
        
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 4000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
          
            });  
            
            
          
        });
    // } 
       
    // }

})






// for counter ends


// for scroll animation

AOS.init();
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


//   for scroll animation ends


// for swiper


// for banner swiper starts

var swiper = new Swiper('.swiper-first-container', {
    autoplay: {
        delay: 5000,
      },
    spaceBetween: 30,
    draggable:true,
    effect: 'fade',
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// for banner swiper ends


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    autoplay: {
        delay: 4000,
      },
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });


//   for testimonial start
var swiper = new Swiper('.swiper-second-container', {
    effect: 'flip',
    autoplay: {
        delay: 2000,
    },
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
 
});

// for testimonial ends


// for clients start

var swiper = new Swiper('.swiper-clients-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    autoplay: {
        delay: 4000,
    }


});

  if(innerWidth <= 420){
    var swiper = new Swiper('.swiper-clients-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        grabCursor: true,
        autoplay: {
            delay: 4000,
        }
    
    
    });
  }

// for clients end

//   for swiper ends