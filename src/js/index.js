import '../styles/main.scss';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';



import * as variables from './variables';



$(document).on('click', function (event) {
//   ... clicked on the 'body', but not inside of #menutop
    variables.navigation.classList.remove('mobile-nav');

});
$('.down-lists').on('click', function (event) {
  event.stopPropagation();
    variables.navigation.classList.toggle('mobile-nav');
  
});

// for nav
window.addEventListener('scroll', ()=>{

    if(scrollY >= 42){
        variables.navigation.classList.add('scrolledNav');
    }else{
        
        variables.navigation.classList.remove('scrolledNav');
    }

})


// scroll to from nav

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        // event.preventDefault();

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
    

    //   $(".button-buy").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $("#our-product").offset().top
    //     }, 900);
    // });
    // });

       $(".pointHome").click(function() {
        $('html, body').animate({
            scrollTop: $(".banner").offset().top
        }, 900);
        $(variables.buttons).removeClass('active');
        $('.pointHome').addClass('active');
        
        
    });

    $(".pointService").click(function() {
        $('html, body').animate({
            scrollTop: $(".services").offset().top-70
        }, 900);
       
        $(variables.buttons).removeClass('active');
        $('.pointService').addClass('active');
    });

    $(".pointCourses").click(function() {
        $('html, body').animate({
            scrollTop: $(".courses").offset().top-70
        }, 900);
        $(variables.buttons).removeClass('active');
        $('.pointCourses').addClass('active');
    });

    $(".pointAbout").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top-70
        }, 900);
         $(variables.buttons).removeClass('active');
        $('.pointAbout').addClass('active');
    });
    $(".pointBlog").click(function() {
        $('html, body').animate({
            scrollTop: $(".blog").offset().top-70
        }, 900);
         $(variables.buttons).removeClass('active');
        $('.pointBlog').addClass('active');
    });
    $(".pointContact").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top-70
        }, 900);
         $(variables.buttons).removeClass('active');
        $('.pointContact').addClass('active');
    });

    
    // for toggle nav class

    // for(let i=0 ; i < variables.buttons.length; i++){
    //     console.log(variables.buttons[i]);
    //     if(varibles.button[i])
    // }

     

 
   



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
    
  });

// for banner swiper ends


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    autoplay: {
        delay: 4000,
      },
    centeredSlides: true,
    loop:true,
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


