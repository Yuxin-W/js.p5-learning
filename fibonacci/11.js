function setup() {
  createCanvas(600,400);
 
    stroke(255);
   noFill();
   strokeWeight(0.2);
   arc(0,0,600,400,0,PI);
  frameRate(10);//设置每秒10帧
  
  function draw() {
      
   
    background(0);
   stroke(255);
   noFill();
   strokeWeight(0.2);
      translate(width/2,height/2);
      line(30,0,-30,0);
    rotate(PI/6*frameCount);
  }
 }