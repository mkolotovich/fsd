var rateButton = document.querySelectorAll('.rate-button button');
for(let i = 0; i < rateButton.length; i++) {
  rateButton[i].onclick = function(e){
    console.log(e.target);
  };
}
