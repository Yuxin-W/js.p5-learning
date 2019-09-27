var shell = {
  X: 0,
  r: 0,
  g: 200
};
var col = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  col = map(mouseX,0,400,0,250);
  background(col,120,230,10);
 
  ellipse(mouseX,mouseY,20,20);
  fill(shell.r,shell.g,190,90);
  noStroke();
  
  shell.r = shell.r + 1;
  shell.g = shell.g - 1;

}