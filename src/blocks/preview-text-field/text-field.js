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
  
  $(".preview-text-field__item_open .preview-text-field__item-input").select2({
    placeholder: "2 спальни, 2 кровати...",
    templateResult: formatState
  });

  $('.preview-text-field__item_open .preview-text-field__item-input').select2('open');
  $('.preview-text-field__item_checkbox-list-open .preview-text-field__item-input').select2('open');
});
