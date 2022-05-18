let card = document.getElementById('cardText');
card.innerHTML = 'Mastercraft Bamboo Monitor Riser';

let cards = document.getElementById('Cardtext');
cards.innerHTML = 'A beutiful & hardcrafted monitor stand to reduce neck and eye strain.';

let button = document.querySelector('.firstButton');
button.innerHTML = 'Back this project';
button.style.borderRadius = '50px'
button.style.border = 'none'
button.style.outline = 'none'

function move() {
    var elem = document.querySelector(".bar");   
    var width = 1;
    var id = setInterval(frame, 80);
    function frame() {
      if (width >= 75) {
        endInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  var modal = document.getElementById('firstModal');

var btn = document.querySelector(".radios");

var butter = document.querySelector(".radioss");

var butters = document.querySelector(".radia");

var butterer = document.querySelector(".radion");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
butter.onclick = function() {
    modal.style.display = "block";
}
butters.onclick = function() {
    modal.style.display = "block";
}
butterer.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modals = document.getElementById('secondModal');

var btns = document.querySelector(".firstButton");

var spans = document.getElementsByClassName("back")[0];

btns.onclick = function() {
    modals.style.display = "block";
}

spans.onclick = function() {
    modals.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modals) {
        modals.style.display = "none";
    }
}

var drop = document.querySelector('.closingBar');

var learn = document.querySelector('.menu');
var why = document.querySelector('.menu1');
var green = document.querySelector('.auto');
var done = document.querySelector('.closingBar');
why.onclick = function() {
    green.style.display = "block";
}
learn.onclick = function() {
    drop.style.display ="block";
    why.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == green) {
        green.style.display = "none";
    }
}

done.onclick = function() {
    green.style.display = "none";
    done.style.display ="none";
    why.style.display = "block";
}
// let buttons = document.querySelector('.secondButton');
// buttons.innerHTML = 'Bookmark';
// buttons.style.borderRadius = '50px'
