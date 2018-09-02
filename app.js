var CANVAS_HEIGHT = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("height"));
var CANVAS_WIDTH = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("width"));
var FREE_SPACE = 200;
var pipe = document.getElementById('first');
var bird = document.getElementById('bird');
var square = document.getElementsByClassName('square')[0];
var first = true;
var collision = false;
var counter = 0;

function pipes(id) {
    var elem = document.getElementById(id);
    var topElem = elem.getElementsByClassName('box')[0];
    var bottomElem = elem.getElementsByClassName('box')[1];
    var space = [220,420];
    var pos = 0;
    var id = setInterval(frame, 6);
    function frame() {
        if (collision){clearInterval(id)};
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
            if(checkCollisions(pos, space[0], space[1])){collision = true};
            pos++;
            elem.style.right = pos + 'px';
        }
    }
};

function killBird() {
    bird.innerHTML = '<img src="bird1.png" height="50px" width="50px"></img>';
    square.style.transform = 'rotate(+90deg)';
    var height = removePX(window.getComputedStyle(square, null).getPropertyValue("top"));
    var counter = height;
    let id = setInterval(drop,0.01);
    function drop() {
        if (removePX(window.getComputedStyle(square, null).getPropertyValue("top")) > 590) {
            clearInterval(id);
            return 0;
        }
        else {
            console.log('hello');
            counter = counter+4;
            square.style.top = counter +'px';
        }
    }
}

function checkCollisions(x_axis, top, bottom){
    if(x_axis == 400){
        if (!(100 > top && bottom > (100+50))){
            killBird();
            return true;
        }
        else {
            counter++;
            document.getElementById('counter').innerHTML = counter;
        }
    }
};

function removePX(string) {
    return parseInt(string.replace('px',''));
}