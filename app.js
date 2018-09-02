var CANVAS_HEIGHT = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("height"));
var CANVAS_WIDTH = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("width"));
var FREE_SPACE = 200;
var container = document.getElementById('canvas');
var pipe = document.getElementById('first');
var bird = document.getElementById('bird');
var square = document.getElementsByClassName('square')[0];
var object = new component(removePX(window.getComputedStyle(square, null).getPropertyValue("left")), removePX(window.getComputedStyle(square, null).getPropertyValue("top")));
var first = true;
var collision = false;
var counter = 0;
var gravity = 30;

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
    let counter = height;
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
    let height = removePX(window.getComputedStyle(square, null).getPropertyValue("top"));
    if(x_axis > 400 && 480 > x_axis){
        console.log('in zone');
        if (!(height > top && bottom > (height+50))){
            collision = true;
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
};

function component(x, y) {
    this.x = x;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;   
    this.height = 50; 
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.update = function() {
        square.style.top = this.y +'px';
    }
    this.hitBottom = function() {
        var rockbottom = CANVAS_HEIGHT - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
};

function accelerate(n) {
    if (!collision) {
        object.gravity = n;
    }
};
function updateGameArea() {
    object.newPos();
    object.update();
}
setInterval(updateGameArea, 20);    