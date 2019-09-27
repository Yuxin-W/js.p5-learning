function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(175,250,245);
    goldfish( mouseX,mouseY,100,15);
    goldfish( 200,300,170,25);
}

function goldfish(x, y, w, dc){
    fill(232, 88, 88,);
    noStroke();
    ellipse(x, y, w, 50);
    triangle(x, y, x-w/2, y+dc/2+20, x-w/2, y-dc/2-20);

    fill(225,113,0);
    noStroke();
    circle(x+w/2, y+dc/2+5, dc);
    circle(x+w/2, y-dc/2-5, dc);
}