'use strict';

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var mySwiper = new Swiper('#trainers', {
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
  
var mySwiper = new Swiper('#reviews', {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 0,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



var itemTabs = document.querySelectorAll('.tabs__item');
var contentItems = document.querySelectorAll('.tabs__content-item');

itemTabs.forEach(function(item) {
   item.addEventListener('click', function() {
      var id = this.getAttribute('data-tab'),
          content = document.querySelector('.tabs__content-item[data-tab="'+id+'"]'),
          activeItem = document.querySelector('.tabs__item.tabs__item--active'),
          activeContent = document.querySelector('.tabs__content-item.tabs__content-item--active');
      
      activeItem.classList.remove('tabs__item--active');
      item.classList.add('tabs__item--active');
      
      activeContent.classList.remove('tabs__content-item--active');
      content.classList.add('tabs__content-item--active');
   });
});


var phone = document.querySelector('#phone');
  phone.addEventListener('input', function () {
    if (phone.value.length < 16) {
      phone.setCustomValidity('Введите номер телефона полностью');
    } else {
      phone.setCustomValidity('');
    }
  });
