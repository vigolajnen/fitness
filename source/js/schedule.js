'use strict';

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

        var days = document.querySelectorAll('.days');
        var weekDaysItems = document.querySelectorAll('.week-days__item');
        var firstItem = document.querySelector('.week-days__item:first-child');

        weekDaysItems.forEach(function (item) {
          item.addEventListener('click', function (evt) {
            evt.preventDefault();
            var firstItemText = firstItem.innerText;
            var text = evt.target.innerText;

            item.innerText = firstItemText;
            firstItem.innerText = text;

            days.forEach(function (day) {
              var weekDay = day.getAttribute('data-weekDay');

              if (weekDay !== text) {
                day.classList.toggle('days--hidden');
              }
            });

            onMenuClose();
          });
        });
      }
    });
  }

  var daysItems = document.querySelectorAll('.days__item');
  var weekDaysItems = document.querySelectorAll('.week-days__item');
  var hoursItems = document.querySelectorAll('.hours__item');

  daysItems.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      item.classList.add('days__item--active');

      var itemHour = item.getAttribute('data-hour');
      var itemWeekDay = item.parentElement.getAttribute('data-weekDay');

      hoursItems.forEach(function (hour) {
        var text = hour.innerText;

        if (text === itemHour) {
          hour.classList.add('hours__item--active');
        }
      });

      weekDaysItems.forEach(function (weekDay) {
        var dayText = weekDay.innerText;

        if (dayText === itemWeekDay) {
          weekDay.classList.add('week-days__item--active');
        }
      });

    });

    item.addEventListener('mouseout', function () {
      item.classList.remove('days__item--active');

      var itemHour = item.getAttribute('data-hour');
      var itemWeekDay = item.parentElement.getAttribute('data-weekDay');

      hoursItems.forEach(function (hour) {
        var text = hour.innerText;

        if (text === itemHour) {
          hour.classList.remove('hours__item--active');
        }
      });

      weekDaysItems.forEach(function (weekDay) {
        var dayText = weekDay.innerText;

        if (dayText === itemWeekDay) {
          weekDay.classList.remove('week-days__item--active');
        }
      });
    });
  });
})();
