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

(function () {
  
  var weekDays = document.querySelector('.week-days');
  var scheduleDays = document.querySelector('.schedule__days');
  var scheduleBtn = document.querySelector('.schedule__button');
  var hours = document.querySelector('.hours');

  function onMenuClose() {
    scheduleBtn.classList.remove('schedule__button--open');
    weekDays.classList.remove('week-days--open');
    scheduleDays.classList.remove('schedule__days--close');
    hours.classList.remove('hours--opacity');
  }

  if (scheduleBtn) {
    scheduleBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      scheduleBtn.classList.toggle('schedule__button--open');
      weekDays.classList.toggle('week-days--open');
      scheduleDays.classList.toggle('schedule__days--close');
      hours.classList.toggle('hours--opacity');


      if (weekDays.classList.contains('week-days--open')) {

        var weekDaysItems = document.querySelectorAll('.week-days__item');
        var firstItem = document.querySelector('.week-days__item:first-child');
        
        weekDaysItems.forEach(function (item) {
          item.addEventListener('click', function (evt) {
            var firstItemText = firstItem.innerText;
            var text = item.innerText;
            
            item.innerText = firstItemText;
            firstItem.innerText = text;
            firstItem.classList.add('week-days__item--active');
            
            onMenuClose();
          })
        });
      }
    });

    
  }

  
})();
