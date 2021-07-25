// $(".not-loggedIn").addClass("d-none");
// $(".loggedIn").removeClass("d-none");

$(".playnow.not-loggedIn").click(function() {
  $(".not-loggedIn").addClass("d-none");
  $(".loggedIn").removeClass("d-none");
  new Swiper('.news', {
    loop: false,
    slidesPerView: 2.5,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 5,
        spaceBetween: 25
      }
    }
  });
});

$(".playnow.loggedIn").click(function() {
  $(".not-loggedIn").removeClass("d-none");
  $(".loggedIn").addClass("d-none");
  new Swiper('.news', {
    loop: false,
    slidesPerView: 2.5,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 5,
        spaceBetween: 25
      }
    }
  });
});

$(".navbar-toggler").click(function() {
  $("html").toggleClass("navbar-open");
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({once: true});
  let colors = ["#EBFFEE", "#FFF2BA", "#5000f1"]
  for (let i = 0; i < 10; i++) {
    let top = Math.floor(Math.random() * document.querySelector("main").scrollHeight / 2);
    let bottom = getRandomInt(document.querySelector("main").scrollHeight / 2, document.querySelector("main").scrollHeight);
    console.log(top, bottom);
    let marginleft = Math.floor(Math.random() * document.querySelector("main").scrollWidth);
    let color = colors[Math.floor(Math.random() * colors.length)];
    let speed = Math.floor(Math.random() * 7);
    $("main").append(`<div class="rellax" data-rellax-speed=${speed} style="transform: rotate(45deg); top: 0px; position: absolute; width: 25px;height: 25px; background: ${color}; margin-left: ${marginleft}px;margin-top: ${top}px;"></div>`);
    $("main").append(`<div class="rellax" data-rellax-speed=${speed} style="transform: rotate(45deg); top: 0px; position: absolute; width: 25px;height: 25px; background: ${color}; margin-left: ${marginleft}px;margin-top: ${bottom}px;"></div>`);
  }
  new Rellax('.rellax');
});

new Swiper('.hero', {
  loop: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  autoHeight: true
});

new Swiper('.featured', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});

let economy = new Swiper('.economy', {
  loop: true,
  slidesPerView: 2.1,
  spaceBetween: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    640: {
      slidesPerView: 4.4,
      spaceBetween: 5
    }
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});

$(".economy .swiper-slide-visible").css("opacity", 1);
$(".economy .swiper-slide-prev").fadeTo("slow", 0.2);
$(".economy .swiper-slide-visible").last().fadeTo("slow", 0.2);

economy.on('slideChangeTransitionEnd', function () {
  $(".economy .swiper-slide-visible").css("opacity", 1);
  $(".economy .swiper-slide-prev").fadeTo("slow", 0.2);
  $(".economy .swiper-slide-visible").last().fadeTo("slow", 0.2);
});

$(".arrow").click(function() {
  economy.slideNext();
});

new Swiper('.news', {
  loop: false,
  slidesPerView: 2.5,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 25
    }
  }
});

new Swiper('.testimonials', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 10
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

let once = 0;

$(window).on('resize scroll load', function(){
  if ($('#totaldownloads').isInViewport() && once == 0) {
    once = 1;
    let totalreach = new countUp.CountUp('totalreach', 80000, {duration: 1, suffix: '+'});
    let totaldownloads = new countUp.CountUp('totaldownloads', 45, {duration: 1.5, suffix: 'K'});
    totalreach.start();
    totaldownloads.start();
  } 
});

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}