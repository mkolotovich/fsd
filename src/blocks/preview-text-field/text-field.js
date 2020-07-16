import $ from 'jquery';
import 'select2';

$(document).ready(function() {
  $('.js-example-basic-single').select2();
  $('.preview-text-field_item__open .preview-text-field__item-input').select2({
    placeholder: "2 спальни, 2 кровати...",
  });

  $('.preview-text-field_item__open .preview-text-field__item-input').select2('open');

  let dropdownItem = document.querySelector(".select2-results__option:nth-child(1)");
  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add('dropdown');

  let newButton = document.createElement("button");
  newButton.classList.add('dropdown__button');
  newButton.innerHTML = "-";
  buttonWrapper.appendChild(newButton);
  dropdownItem.appendChild(buttonWrapper);
});
