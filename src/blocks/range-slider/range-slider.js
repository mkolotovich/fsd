
import 'ion-rangeslider';
$(".js-range-slider").ionRangeSlider({
  skin: "big",
  type: "double",
  min: 5000,
  max: 10000,
  from: 6500,
  to: 8200,
  grid: false,
  force_edges: false,     // force UI in the box
  hide_min_max: true,    // show/hide MIN and MAX labels
  hide_from_to: true,    // show/hide FROM and TO labels
  block: false            // block instance from changing
});