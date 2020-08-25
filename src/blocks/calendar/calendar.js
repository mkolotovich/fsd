import Lightpick from 'lightpick';
var picker = new Lightpick({ 
  field: document.getElementById('datepicker1'),
  singleDate: false,
  lang: 'ru',
  footer: true,
  inline: true,
  locale: {
    buttons: {
      prev: '<i class="material-icons">arrow_backward</i>',
      next: 'arrow_forward',
      close: '×',
      reset: 'очистить',
      apply: 'применить'
    }
  },
  startDate: '2019-08-19',
  endDate: '2019-08-23',
});
var today = document.querySelector('.is-today');
console.log(today);
if (today === null) {
  document.querySelector('.lightpick__day[data-time="1565211600000"]').classList.add('is-today');
  console.log('today');
}
var title = document.querySelector('.lightpick__month-title');
var toolbar = document.querySelector('.lightpick__toolbar');
toolbar.appendChild(title);
var next = document.querySelector('.lightpick__next-action');
next.classList.add('material-icons');