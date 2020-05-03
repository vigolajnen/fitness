'use strict';

if ('NodeList' in window && !NodeList.prototype.forEach) {

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var itemTabs = document.querySelectorAll('.tabs__item');

itemTabs.forEach(function (item) {
  item.addEventListener('click', function () {

    var id = item.getAttribute('data-tab');
    var content = document.querySelector('.tabs__content-item[data-tab="' + id + '"]');
    var activeItem = document.querySelector('.tabs__item.tabs__item--active');
    var activeContent = document.querySelector('.tabs__content-item.tabs__content-item--active');

    activeItem.classList.remove('tabs__item--active');
    item.classList.add('tabs__item--active');
    activeContent.classList.remove('tabs__content-item--active');
    content.classList.add('tabs__content-item--active');
  });
});


var phone = document.querySelector('#phone');
if (phone) {
  phone.addEventListener('input', function () {
    if (phone.value.length < 16) {
      phone.setCustomValidity('Введите номер телефона полностью');
    } else {
      phone.setCustomValidity('');
    }
  });
}
