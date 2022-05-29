let i = 0;

while(i < 5)
{
    console.log(i);
}
console.log("Afterwards:" + i);


function setup(){
    createCanvas(400, 300);

}
    background(100);

    nofill();

    for( var i = 0; i < 15; i++) {
        var randColor = Math.random(                                                                                                                                                                                                                                                                                      )
        circle(i * 20,150, i * 10);
        stroke(255 - (i*15));
    }
    console.log("Afterwards:" + i);

}

function draw() {
    
}