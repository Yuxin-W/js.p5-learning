var on = false;

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(200);
  
  if (on) {
   background(220,130,190);
  }
  
  rectMode(CENTER);
  rect(300,300,30,30);
  stroke(255);
  noFill();
  if(mouseX <= 330 && mouseX >= 270 && mouseY <= 330 && mouseY >= 270){
   fill(123,149,201);
  }
}

function mousePressed(){
 if(mouseX <= 330 && mouseX >= 270 && mouseY <= 330 && mouseY >= 270){
 on=!on
 }
}