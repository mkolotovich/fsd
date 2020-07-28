import $ from 'jquery';
import 'select2';

$(document).ready(function() {
  $('.js-example-basic-single').select2();

  function formatState (state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<div class="dropdown"><button class="dropdown__button" />-</button><span>' + state.id + '</span><button class="dropdown__button" />+</button></div>' + state.text + '</li>'
    );
    return $state;
  };
  var dropdown = $(".preview-text-field__item_open .preview-text-field__item-input");
  dropdown.select2({
    placeholder: "2 спальни, 2 кровати...",
    templateResult: formatState
  });
  
  var dropdownApply = $(".form-elements-center-column .preview-text-field__item-input");

  function formatState (state) {
    if (!state.id) {
      return state.text;
    }
    var $state;
    if (state.id === 'применить') {
      $state = $(
        '<span class="dropdown__apply">' + state.text + '</span>'
      );  
    } else { 
      $state = $(
        '<div class="dropdown"><button class="dropdown__button" />-</button><span>' + state.id + '</span><button class="dropdown__button" />+</button></div>' + state.text + '</li>'
      );
    }
    return $state;
  };
  
  dropdownApply.select2({
    placeholder: "Сколько гостей",
    templateResult: formatState
  });

  dropdown.select2('open');
});
