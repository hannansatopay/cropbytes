document.addEventListener("DOMContentLoaded", function () {
  AOS.init({once: true});
});

new Swiper('.hero', {
  loop: false,
  slidesPerView: 1
});

new Swiper('.featured', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});

new Swiper('.economy', {
  loop: false,
  slidesPerView: 1.5,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 10
    }
  }
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