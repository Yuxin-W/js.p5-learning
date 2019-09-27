var r = 0;
var d = 10;

function setup() {
createCanvas(600, 400);

}

function draw() {
    background(20);
    noStroke();

    // for (var x = 10; x <= width; x += 40){
    //    for (var y = 10; y <= height; y += 40){
    //     r = map(x, 0, 600, 0,255);
    //      noStroke();
    //        d = map(x,0, 600, 10, 20);
    //        fill(r,0,189);
    //     ellipse(x, y, d,d); 
    //    }
    // }

    for (var x = 10; x <= width; x += 40){
       for (var y = 10; y <= height; y += 40){
           r = map(x, 0, 600, 0,255);
           noStroke();
           d = map(y,0, 600, 18, 0.5);
           fill(r,0,189);
        ellipse(x, y, d,d); 
       }
    }

}