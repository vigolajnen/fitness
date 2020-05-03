'use strict';

// (function () {

//   var weekDays = document.querySelector('.week-days');
//   var scheduleDays = document.querySelector('.schedule__days');
//   var scheduleBtn = document.querySelector('.schedule__button');
//   var hours = document.querySelector('.hours');

//   function onMenuClose() {
//     scheduleBtn.classList.remove('schedule__button--open');
//     weekDays.classList.remove('week-days--open');
//     scheduleDays.classList.remove('schedule__days--close');
//     hours.classList.remove('hours--opacity');
//   }

//   if (scheduleBtn) {
//     scheduleBtn.addEventListener('click', function (evt) {
//       evt.preventDefault();
//       scheduleBtn.classList.toggle('schedule__button--open');
//       weekDays.classList.toggle('week-days--open');
//       scheduleDays.classList.toggle('schedule__days--close');
//       hours.classList.toggle('hours--opacity');

//       if (weekDays.classList.contains('week-days--open')) {

//         var days = document.querySelectorAll('.days');
//         var weekDaysItems = document.querySelectorAll('.week-days__item');
//         var firstItem = document.querySelector('.week-days__item:first-child');

//         weekDaysItems.forEach(function (item) {
//           item.addEventListener('click', function (evt) {
//             evt.preventDefault();
//             var firstItemText = firstItem.innerText;
//             var text = evt.target.innerText;

//             item.innerText = firstItemText;
//             firstItem.innerText = text;

//             days.forEach(function (day) {
//               var weekDay = day.getAttribute('data-weekDay');

//               if (weekDay !== text) {
//                 day.classList.toggle('days--hidden');
//               }
//             });

//             onMenuClose();
//           });
//         });
//       }
//     });
//   }

//   var daysItems = document.querySelectorAll('.days__item');
//   var weekDaysItems = document.querySelectorAll('.week-days__item');
//   var hoursItems = document.querySelectorAll('.hours__item');

//   daysItems.forEach(function (item) {
//     item.addEventListener('mouseover', function () {
//       item.classList.add('days__item--active');

//       var itemHour = item.getAttribute('data-hour');
//       var itemWeekDay = item.parentElement.getAttribute('data-weekDay');

//       hoursItems.forEach(function (hour) {
//         var text = hour.innerText;

//         if (text === itemHour) {
//           hour.classList.add('hours__item--active');
//         }
//       });

//       weekDaysItems.forEach(function (weekDay) {
//         var dayText = weekDay.innerText;

//         if (dayText === itemWeekDay) {
//           weekDay.classList.add('week-days__item--active');
//         }
//       });

//     });

//     item.addEventListener('mouseout', function () {
//       item.classList.remove('days__item--active');

//       var itemHour = item.getAttribute('data-hour');
//       var itemWeekDay = item.parentElement.getAttribute('data-weekDay');

//       hoursItems.forEach(function (hour) {
//         var text = hour.innerText;

//         if (text === itemHour) {
//           hour.classList.remove('hours__item--active');
//         }
//       });

//       weekDaysItems.forEach(function (weekDay) {
//         var dayText = weekDay.innerText;

//         if (dayText === itemWeekDay) {
//           weekDay.classList.remove('week-days__item--active');
//         }
//       });
//     });
//   });
// })();

/////////////////////////////////////////////////

// (function () {

//   var hoursDB = ['08:00', '12:00', '18:00', '20:00'];

//   var scheduleDB = [
//     {
//       id: 1,
//       day: 'Понедельник',
//       lessons: [
//         {
//           id: 1,
//           hours: hoursDB[1],
//           name: 'Crossfit'
//         },
//         {
//           id: 2,
//           hours: hoursDB[2],
//           name: 'Body Sculpt'
//         },
//         {
//           id: 3,
//           hours: hoursDB[3],
//           name: 'Functional'
//         },
//         {
//           id: 4,
//           hours: hoursDB[4],
//           name: 'Stretching'
//         }
//       ]
//     },
//     {
//       id: 2,
//       day: 'Вторник',
//       lessons: [
//         {
//           id: 1,
//           hours: hoursDB[1],
//           name: 'Aerostretching'
//         },
//         {
//           id: 2,
//           hours: hoursDB[2],
//           name: 'CrossFit'
//         },
//         {
//           id: 3,
//           hours: hoursDB[3],
//           name: 'Body Sculpt'
//         },
//         {
//           id: 4,
//           hours: hoursDB[4],
//           name: 'Functional'
//         }
//       ]
//     },
//     {
//       id: 3,
//       day: 'Среда',
//       lessons: [
//         {
//           id: 1,
//           hours: hoursDB[1],
//           name: 'Hot Iron'
//         },
//         {
//           id: 2,
//           hours: hoursDB[2],
//           name: 'Aerostretching'
//         },
//         {
//           id: 3,
//           hours: hoursDB[3],
//           name: 'CrossFit'
//         },
//         {
//           id: 4,
//           hours: hoursDB[4],
//           name: 'Body Sculpt'
//         }
//       ]
//     },
//     {
//       id: 4,
//       day: 'Четверг',
//       lessons: [
//         {
//           id: 1,
//           hours: hoursDB[1],
//           name: 'Pilates'
//         },
//         {
//           id: 2,
//           hours: hoursDB[2],
//           name: 'Hot Iron'
//         },
//         {
//           id: 3,
//           hours: hoursDB[3],
//           name: 'Aerostretching'
//         },
//         {
//           id: 4,
//           hours: hoursDB[4],
//           name: 'CrossFit'
//         }
//       ]
//     },
//     {
//       id: 5,
//       day: 'Пятница',
//       lessons: [
//         {
//           id: 1,
//           hours: hoursDB[1],
//           name: 'Stretching'
//         },
//         {
//           id: 2,
//           hours: hoursDB[2],
//           name: 'Pilates'
//         },
//         {
//           id: 3,
//           hours: hoursDB[3],
//           name: 'Hot Iron'
//         },
//         {
//           id: 4,
//           hours: hoursDB[4],
//           name: 'Aerostretching'
//         }
//       ]
//     },
//     {
//       id: 6,
//       day: 'Суббота',
//       lessons: [
//         {
//           id: 1,
//           hours: hoursDB[1],
//           name: 'Functional'
//         },
//         {
//           id: 2,
//           hours: hoursDB[2],
//           name: 'Stretching'
//         },
//         {
//           id: 3,
//           hours: hoursDB[3],
//           name: 'Pilates'
//         },
//         {
//           id: 4,
//           hours: hoursDB[4],
//           name: 'Hot Iron'
//         }
//       ]
//     },
//     {
//       id: 7,
//       day: 'Воскресенье',
//       lessons: [
//         {
//           id: 1,
//           hours: hoursDB[1],
//           name: 'Body Sculpt'
//         },
//         {
//           id: 2,
//           hours: hoursDB[2],
//           name: 'Functional'
//         },
//         {
//           id: 3,
//           hours: hoursDB[3],
//           name: 'Stretching'
//         },
//         {
//           id: 4,
//           hours: hoursDB[4],
//           name: 'Pilates'
//         }
//       ]
//     }
//   ]

//   function createschedule() {
//     var daysListElement = document.querySelector('.schedule__days');
//     var weekDaysListElement = document.querySelector('.schedule__week-days');
//     var hoursListElement = document.querySelector('.schedule__hours');
//     var scheduleFragment = document.createDocumentFragment();
//     var hoursFragment = document.createDocumentFragment();
//     var weekDaysFragment = document.createDocumentFragment();
 
//     for (var i = 0; i < scheduleDB.length; i++) { 

//       var weekDayDiv = document.createElement('div');
//       weekDayDiv.className = 'week-days__item';
//       weekDayDiv.innerText = scheduleDB[i].day;

//       weekDaysListElement.appendChild(weekDayDiv);

//       var divParent = document.createElement('div');
//       divParent.className = 'days';
//       divParent.setAttribute('data-weekDay', scheduleDB[i].day);

//       for (var j = 0; j < scheduleDB[i].lessons.length; j++) { 
        
//         // занятия
//         var div = document.createElement('div');
//         div.className = 'days__item';
//         div.innerText = scheduleDB[i].lessons[j].name;
//         div.setAttribute('data-hour', scheduleDB[i].lessons[j].hours);
//         divParent.appendChild(div);
//       }
//       scheduleFragment.appendChild(divParent);
//       weekDaysFragment.appendChild(weekDayDiv);
//     }   
//     // часы
//     for (var i = 0; i < hoursDB.length; i++) { 
//       var hoursDiv = document.createElement('div');
//       hoursDiv.className = 'hours__item';
//       hoursDiv.innerText = hoursDB[i];
//       hoursFragment.appendChild(hoursDiv);
//     }

//     daysListElement.innerHTML = '';
//     daysListElement.appendChild(scheduleFragment);

//     hoursListElement.innerHTML = '';
//     hoursListElement.appendChild(hoursFragment);


//     weekDaysListElement.innerHTML = '';
//     weekDaysListElement.appendChild(weekDaysFragment);
//   }

//   createschedule();

// })();
