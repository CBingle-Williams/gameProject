var CANVAS_HEIGHT = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("height"));
var CANVAS_WIDTH = removePX(window.getComputedStyle(document.getElementsByClassName('container')[0], null).getPropertyValue("width"));
var FREE_SPACE = 200;
var sticks = document.getElementsByClassName('box');
var pipe = document.getElementById('first');
console.log(pipe);
var first = true;

var object = {
    createObject(){

    },

}
function pipes(id) {
    var elem = document.getElementById(id);
    var topElem = elem.getElementsByClassName('box')[0];
    var bottomElem = elem.getElementsByClassName('box')[1];
    //var squares = document.getElementsByClassName('square')[0];
    var pos = 0;
    var id = setInterval(frame, 6);
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
        pos = 0;
      } else {
            pos++;
            elem.style.right = pos + 'px';
        }
    }
};
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