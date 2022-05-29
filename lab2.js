let myName = "A. Name";
console.log(myName);

myName = "Same variables, different name."
console.log(myName);


var a = 10;
var b = 5;

var c = a + b;
console.log(c);


let spices = 0;
function draw() {
    spices = spices + 6;
    console.log(spices);
}

let xPos = 0;
let yPos = 40;

let xspeed = 2;
let yspeed = 0;

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(62, 237, 108)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    var myBool = xPos > 100;

    console.log(xPos,myBool);


    fill(19, 71, 26)
    circle(xPos, yPos, 30);
}
