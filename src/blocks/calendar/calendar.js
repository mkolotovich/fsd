// import Lightpick from 'lightpick';
// var picker = new Lightpick({ 
//   field: document.getElementById('datepicker1'),
//   singleDate: false,
//   lang: 'ru',
//   footer: true,
//   inline: true,
//   locale: {
//     buttons: {
//       prev: 'arrow_backward',
//       next: 'arrow_forward',
//       close: '×',
//       reset: 'очистить',
//       apply: 'применить'
//     }
//   },
//   startDate: '2019-08-19',
//   endDate: '2019-08-23',
// });
//
// var title = document.querySelector('.lightpick__month-title');
// var toolbar = document.querySelector('.lightpick__toolbar');
// toolbar.appendChild(title);
// var next = document.querySelector('.lightpick__next-action');
// next.classList.add('material-icons');
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js"
var months = document.querySelector('.flatpickr-monthDropdown-months');
let calendar = flatpickr('#flat', {
  locale: Russian, // locale for this instance only
  mode: "range",
  defaultDate: ["2019-08-19", "2019-08-23"],
  inline: true,
  nextArrow: '<i class="material-icons">arrow_forward</i>',
  prevArrow: '<i class="material-icons">arrow_backward</i>'
});
var today = document.querySelector('.today');
if (today === null) {
  document.querySelector('.flatpickr-day[aria-label="Август 8, 2019"]').classList.add('today');
}
// calendar.onMonthChange(function([], dateStr, instance) {
//   if (calendar.currentMonth === 7 && calendar.currentYear === 2019) {
//     months.style.width = 67 + 'px';
//   } else {
//     months.style.width = 'auto';
//   }
// });