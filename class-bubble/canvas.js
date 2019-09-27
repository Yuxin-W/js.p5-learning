let bubble1;
let bubble2;
let fr=5;

function setup(){
    createCanvas(600, 400);
    frameRate(fr);
    // bubble1 = new Bubble(100,100);
    // bubble2 = new Bubble(300,300);
    // bubble3 = new Bubble(random(380,550),200);
    // console.log(bubble1.x, bubble1.y);
}

function draw(){
    background(212, 191, 255);
    bubble1.move();
    bubble1.colchange();
    bubble1.show();
    bubble2.move();
    bubble2.colchange();
    bubble2.show();    
    bubble3.move();
    bubble3.colchange();
    bubble3.show();
}

