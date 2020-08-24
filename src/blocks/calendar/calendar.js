$('input[name="dates"]').daterangepicker({
  "locale": {
      "format": "MM/DD/YYYY",
      "separator": " - ",
      "applyLabel": "применить",
      "cancelLabel": "очистить",
      "fromLabel": "From",
      "toLabel": "To",
      "weekLabel": "W",
      "daysOfWeek": [
          "Вс",
          "Пн",
          "Вт",
          "Ср",
          "Чт",
          "Пт",
          "Сб"
      ],
      "monthNames": [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Mай",
          "Июнь",
          "Июль",
          "Aвгуст",
          "Сентябрь",
          "Oктябрь",
          "Ноябрь",
          "Декабрь"
      ],
      "firstDay": 1
  },
  "startDate": "08/18/2019",
  "endDate": moment(),
}, function(start, end, label) {
console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
});