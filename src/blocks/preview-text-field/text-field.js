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
  var dropdown = $(".preview-text-field__item_open .preview-text-field__item-input");
  //
  var dropdownIncrease = $("body > span:nth-child(5) .select2-results__options li:nth-child(1) .dropdown .dropdown__button:last-child");  
  var parent = dropdownIncrease.parentNode;
  //
  dropdown.select2({
    placeholder: "2 спальни, 2 кровати...",
    templateResult: formatState,
  });
  //
  dropdownIncrease.onclick = function() {
    var count = parent.lastElementChild.textContent;
    console.log(count);
    parent.lastElementChild.textContent = count + 1;
  };
  //
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
});
