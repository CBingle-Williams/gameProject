var CANVAS_HEIGHT = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("height"));
var CANVAS_WIDTH = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("width"));
var FREE_SPACE = 200;
var pipe = document.getElementById('first');
var first = true;
var counter = 0;

function pipes(id) {
    var elem = document.getElementById(id);
    var position = elem.getElementsByClassName('parent')[0];
    var topElem = elem.getElementsByClassName('box')[0];
    var bottomElem = elem.getElementsByClassName('box')[1];
    //var squares = document.getElementsByClassName('square')[0];
    var space = [220,420];
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if(first && pos == 290){
            pipes('second');
            first = false;
        }
      if (pos == (CANVAS_WIDTH+110)) {
        let top = Math.floor(Math.random() * (300-100)) + 100;
        let bottom = CANVAS_HEIGHT - FREE_SPACE - top;
        topElem.style.height = top + 'px';
        bottomElem.style.height = bottom + 'px';
        space[0] = top;
        space[1] = CANVAS_HEIGHT - bottom;
        pos = 0;
      } else {
            checkCollisions(pos, space[0], space[1]);
            pos++;
            elem.style.right = pos + 'px';
        }
    }
};

function checkCollisions(x_axis, top, bottom){
    console.log(x_axis + " " + top + " " + bottom);
    if(x_axis == 400){
        if (!(300 > top && bottom > (300+50))){
            alert('collision');
        }
        else {
            counter++;
            document.getElementById('counter').innerHTML = counter;
        }
    }
}

function removePX(string) {
    return parseInt(string.replace('px',''));
}