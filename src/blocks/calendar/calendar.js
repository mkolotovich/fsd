import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js"
let calendar = flatpickr('#flat', {
  locale: Russian, // locale for this instance only
  mode: "range",
  defaultDate: ["2019-08-19", "2019-08-23"],
  inline: true,
  nextArrow: '<i class="material-icons">arrow_forward</i>',
  prevArrow: '<i class="material-icons">arrow_backward</i>',
  monthSelectorType: "static",
  onYearChange: function(selectedDates, dateStr, instance) {
    if (calendar.currentYear > 2019) {
      year.style.width = 49 + 'px';
    } else if (calendar.currentYear <= 2019) {
      year.style.width = 44 + 'px';
    }
  }
});
var year = document.querySelector('.flatpickr-current-month .numInputWrapper');
var calendarBlock = document.querySelector('.flatpickr-calendar.inline');
var buttons = document.querySelector('.buttons-list');
if (calendarBlock !== null) {
  calendarBlock.append(buttons);
}
var augustDays = document.querySelectorAll('.rangeMode .flatpickr-day:nth-child(n+36)');
var DaysInRange = document.querySelectorAll('.flatpickr-day.inRange').length - 1;
var lastDayInRange = document.querySelectorAll('.flatpickr-day.inRange')[DaysInRange];
var today = document.querySelector('.today');
if (today === null && document.querySelector('.flatpickr-day[aria-label="Август 8, 2019"]') !== null) {
  document.querySelector('.flatpickr-day[aria-label="Август 8, 2019"]').classList.add('today');
}
if (calendar.currentMonth === 7 && calendar.currentYear === 2019) {
  for(let i = 0; i < augustDays.length; i++) {
    augustDays[i].style.display = 'none';
  }
};
if (calendarBlock !== null) {
  lastDayInRange.style.boxShadow = '0px 0 0 #bc9cff40, 19px 0 0 #bc9cff40';
}