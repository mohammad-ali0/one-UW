/**
 * RideNexa - Ride Sharing HTML Template
 *
 * @author themeVillage (https://www.theme-village.com/)
 * @version 1.0.0
 **/

'use strict';


// Mobile Toggle Nav animation
new VenoBox({
  selector: '.venobox',
  autoplay: true,
  maxWidth: '1000px',
});

const toggleNav = document.querySelector('button.navbar-toggler');
if(toggleNav){
  toggleNav.addEventListener('click', function (e) {
    e.preventDefault();
  this.classList.toggle('active');
});
}
/* 
// JavaScript to toggle the custom icon and navbar menu
document.getElementById('custom-toggler').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navbar-collapse').classList.toggle('show');
}); */

/**
 * Slider Counter
 */
const progressCircle = document.querySelector('.autoplay-progress svg');
const progressContent = document.querySelector('.autoplay-progress span');
let bannerSlide = new Swiper('.slider-carousel', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty('--progress', 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

/* ===============================
Scroll to Top
*/
const scrollTop = function () {
  let scrollpos = window.scrollY;
  let backBtn = document.querySelector('.back-top');
  if (backBtn) {
    let add_class_on_scroll = () => backBtn.classList.add('back-top-show');
    let remove_class_on_scroll = () =>
      backBtn.classList.remove('back-top-show');

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;
      if (scrollpos >= 800) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });

    backBtn.addEventListener('click', () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    );
  }
};

// Counter
new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: '.purecounter',
  delay: 200,
});

let reviewSlider = new Swiper('.review-slider', {
  direction: 'vertical',
  freeMode: true,
  loop: true,
  spaceBetween: 240,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let reviewSlider2 = new Swiper('.review-slider2', {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
  },
});

let servicesSlider = new Swiper('.services-slider', {
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

let swiper3 = new Swiper('.client-thumb', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper('.review-3', {
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  thumbs: {
    swiper: swiper3,
  },
});

/* ===============================
Scroll to Top
=================================== */
const backTotop = (function () {
  let scrollpos = window.scrollY;
  let backBtn = document.querySelector('.back-top');
  if (backBtn) {
    let add_class_on_scroll = () => backBtn.classList.add('back-top-show');
    let remove_class_on_scroll = () =>
      backBtn.classList.remove('back-top-show');

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;
      if (scrollpos >= 800) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });

    backBtn.addEventListener('click', () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    );
  }
})();

/*====================================
    Product Quantity (cart)
======================================*/

const productQuantity = (selector) => {
  const quantity = document.querySelectorAll(selector);

  quantity.forEach((element) => {
    const quantityIncrease = element.querySelector('.qty-plus');
    const quantityDecrease = element.querySelector('.qty-minus');
    const quantityInput = element.querySelector('.qty-count');

    let count = 1;

    quantityIncrease.addEventListener('click', () => {
      count++;
      count = count < 10 ? '0' + count : count;
      quantityInput.value = count;
    });
    quantityDecrease.addEventListener('click', () => {
      if (count > 1) {
        count--;
        count = count < 10 ? '0' + count : count;
        quantityInput.value = count;
      }
    });
  });
};

productQuantity('.cart-quanty');
/* =================================  
Remove Cart Item
==================================== */

let removeBtns = document.querySelectorAll('.remove');
removeBtns.forEach(function (removeBtn) {
  removeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.closest('.cart_item').remove();
  });
});

const checkoutShipping = (selector) => {
  const checkoutVisible = document.querySelector(selector);
  const shipping = document.querySelectorAll('#billform-dirrentswitch');

  if (checkoutVisible) {
    shipping.forEach((element) => {
      element.addEventListener('click', (e) => {
        toggleSlide(checkoutVisible);
      });
    });
  }
};

checkoutShipping('#checkoutCouponform1');
/**
 * Nice Select 2
 */
let niceSelector = document.getElementById('select');
if (niceSelector) {
  NiceSelect.bind(niceSelector, {
    placeholder: 'Language',
  });
}
let passenger = document.getElementById('passenger');
if (passenger) {
  NiceSelect.bind(passenger, {
    placeholder: 'Passenger',
  });
}
let selectCar = document.getElementById('select-car');
if (selectCar) {
  NiceSelect.bind(selectCar, {
    placeholder: 'Select Car',
  });
}
const elem = document.querySelector('input[name="foo"]');
if(elem) {
  const datepicker = new Datepicker(elem); 
}
