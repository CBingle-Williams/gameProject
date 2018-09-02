var CANVAS_HEIGHT = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("height"));
var CANVAS_WIDTH = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("width"));
var FREE_SPACE = 200;

var sticks = document.getElementsByClassName('box');

var object = {
    createObject(){

    },

}

function myMove() {
    removePX('500px');
    var elem = document.getElementsByClassName('parent');
    var squares = document.getElementsByClassName('square')[0];
    var pos = 0;
    var id = setInterval(frame, 0.001);
    function frame() {
      if (pos == (CANVAS_WIDTH+90)) {
        let top = Math.floor(Math.random() * (300-100)) + 100;
        let bottom = CANVAS_HEIGHT - FREE_SPACE - top;
        sticks[0].style.height = top + 'px';
        sticks[1].style.height = bottom + 'px';
        pos = 0;
      } else {
        for (let bar of elem){
            pos++;
            /*if (removePX(window.getComputedStyle(squares, null).getPropertyValue("left")) - removePX(window.getComputedStyle(bar, null).getPropertyValue("left")) == 50){
                alert('collision');
                clearInterval(id);
            }
            else{
                bar.style.left = pos + 'px';
            }
            console.log(removePX(window.getComputedStyle(squares, null).getPropertyValue("left")) - removePX(window.getComputedStyle(bar, null).getPropertyValue("left")));
            };*/
            bar.style.right = pos + 'px';
            }
        }
    };
}
function removePX(string) {
    return parseInt(string.replace('px',''));
}
function freeSpace(){
    let top = removePX(window.getComputedStyle(sticks[0], null).getPropertyValue("height"));
    let bottom = removePX(window.getComputedStyle(sticks[1], null).getPropertyValue("height"));
    return ("Between: " + top + " and " + (CANVAS_HEIGHT-bottom));
}
console.log(CANVAS_HEIGHT);
console.log(CANVAS_WIDTH);