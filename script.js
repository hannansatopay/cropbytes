document.addEventListener("DOMContentLoaded", function () {
  AOS.init({once: true});
});

new Swiper('.hero', {
  loop: false,
  slidesPerView: 1
});

new Swiper('.featured', {
  loop: false,
  slidesPerView: 2.5,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});

let economy = new Swiper('.economy', {
  loop: false,
  slidesPerView: 2.1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 7,
      spaceBetween: 10
    }
  }
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
      spaceBetween: 20
    }
  }
});

new Swiper('.testimonials', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1.1,
  spaceBetween: 5,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

const options = {
  duration: 1.5,
};

let once = 0;

$(window).on('resize scroll load', function(){
  if ($('#totaldownloads').isInViewport() && once == 0) {
    once = 1;
    let totalreach = new countUp.CountUp('totalreach', 60000, options);
    let totaldownloads = new countUp.CountUp('totaldownloads', 45, options);
    totalreach.start();
    totaldownloads.start();
  } 
});

$("body").find('[data-bs-toggle="modal"]').click(function() {
  let toggle = $(this);
  let src = toggle.attr("data-bs-video")+"?modestbranding=1&autohide=1&rel=0&showinfo=0&html5=1&autoplay=1"; 
  $(toggle.attr("data-bs-target")+' iframe').attr('src', src);

  $("#video").on('hidden.bs.modal', function (e) {
    $("#video iframe").attr("src", toggle.attr("data-bs-video"));
  });
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