import $ from 'jquery';
import 'select2';

$(document).ready(function() {
  $('.js-example-basic-multiple').select2();

  function formatState (state) {
    if (!state.id) {
      return state.text;
    }
    var $state;
    if (state.id === 'применить') {
      $state = $(
        '<button class="dropdown__apply">' + state.text + '</button>'
      );  
    } else if(state.id === 'очистить') {
      $state = $(
        '<button class="dropdown__apply">' + state.text + '</button><button class="dropdown__apply dropdown__apply_cancel">' + state.id + '</button>'
      ); 
    }
    else { 
      $state = $(
        '<div class="dropdown"><button class="dropdown__button" />-</button><span>' + state.id + '</span><button class="dropdown__button" />+</button></div>' + state.text + '</li>'
      );
    }
    return $state;
  };
  var dropdown = $(".preview-text-field:first-child .preview-text-field__item_open .preview-text-field__item-input");
  var dropdownDefault = $(".preview-text-field__item:nth-child(8) .preview-text-field__item-input");

  dropdown.select2({
    placeholder: "2 спальни, 2 кровати...",
    templateResult: formatState,
    closeOnSelect: false,
  });

  dropdown.on('select2:selecting', function (evt) {
    evt.preventDefault();
    var count = parent.children[1].textContent;
    var countBeds = parentBeds.children[1].textContent;
    if (Number(count) === 0) {
      dropdownDecrease.style.opacity = '0.38';
    } else if (Number(count) >= 0) {
      dropdownDecrease.style.opacity = '1';
    }
    dropdownIncrease.onclick = function() {
      parent.children[1].textContent = Number(count) + 1;
      newPlaceholder[0] = Number(newPlaceholder[0]) + 1;
      var newPlaceholderString = newPlaceholder.join(' ');
      console.log(newPlaceholderString);
      placeholder[2].placeholder = newPlaceholderString;
    }
    dropdownDecrease.onclick = function() {
      if(count > 0) {
        parent.children[1].textContent = Number(count) - 1;
        newPlaceholder[0] = Number(newPlaceholder[0]) - 1;
        var newPlaceholderString = newPlaceholder.join(' ');
        console.log(newPlaceholderString);
        placeholder[2].placeholder = newPlaceholderString;
      }
      dropdownBedsIncrease.onclick = function() {
        parentBeds.children[1].textContent = Number(countBeds) + 1;
        newPlaceholder[2] = Number(newPlaceholder[2]) + 1;
        var newPlaceholderString = newPlaceholder.join(' ');
        console.log(newPlaceholderString);
        placeholder[2].placeholder = newPlaceholderString;
      } 
    }
    dropdownBedsDecrease.onclick = function() {
      parentBeds.children[1].textContent = Number(countBeds) - 1;
      newPlaceholder[2] = Number(newPlaceholder[2]) - 1;
      var newPlaceholderString = newPlaceholder.join(' ');
      console.log(newPlaceholderString);
      placeholder[2].placeholder = newPlaceholderString;
    }
  });
  dropdownDefault.select2({
    placeholder: "2 спальни, 2 кровати...",
    templateResult: formatState,
  });

  var dropdownApply = $(".container_ui-kit .form-elements-center-column .preview-text-field__item-input");
  var multiple = $(".container_ui-kit > ul:nth-child(1) > li:nth-child(3) > select");
  var dropdownClear = $(".container_ui-kit .form-elements-right-column .preview-text-field__item-input");
  
  multiple.select2({
    placeholder: "Сколько гостей",
    templateResult: formatState
  });
  dropdownApply.select2({
    placeholder: "Сколько гостей",
    templateResult: formatState
  });
  dropdownClear.select2({
    placeholder: "3 гостя",
    templateResult: formatState
  });
  dropdown.select2('open');
  var dropdownIncrease = document.querySelector(".dropdown .dropdown__button:last-child");  
  var dropdownDecrease = document.querySelector("body > span:nth-child(6) .select2-results__options li:nth-child(1) .dropdown .dropdown__button:first-child");  
  var dropdownBedsIncrease = document.querySelector("body > span:nth-child(6) .select2-results__options li:nth-child(2) .dropdown .dropdown__button:last-child");
  var dropdownBedsDecrease = document.querySelector("body > span:nth-child(6) .select2-results__options li:nth-child(2) .dropdown .dropdown__button:first-child");  
  var placeholder = $('.select2-container .select2-search--inline .select2-search__field');
  var newPlaceholder = placeholder[1].placeholder.split(' ')
  console.log(dropdownBedsIncrease);
  var parent = dropdownIncrease.parentNode;
  var parentBeds = dropdownBedsIncrease.parentNode;
});
