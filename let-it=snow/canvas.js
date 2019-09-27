let bubble = [];
let r = 0;
let g = 28;
let b = 47;

function setup(){
    createCanvas(600,400);
}

//使用function mousepressed进行实体化对象，
//但是还是要最后在draw中使实体化对象被画出来
function mouseDragged(){
    let b = new Bubble(mouseX, mouseY,random(15,40));
    bubble.push(b);
    r = r + 1;
    g = g + 1;
    b = b + 1;

    //增加背景亮度，东方既白
}

function draw(){
    background(r,28,47);
    for(i=0; i < bubble.length; i ++){
        bubble[i].show();
        bubble[i].move();
    }
}