var fibonacci = [];
var a;

function setup() {
  createCanvas(600,400);
 
    stroke(255);
   noFill();
   strokeWeight(0.2);
   arc(0,0,600,400,0,PI);
  frameRate(10);//设置每秒10帧
  
}

function draw() {
   
  
   
    background(0);
   stroke(255);
   noFill();
   strokeWeight(0.2);
  
   translate(width/2,height/2);
    rotate(PI/6*frameCount);
   for(var i=0;i<=19;i++){
     if(i<=1){
       a=1;
     }
     else{
       a=fibonacci[i-1]+fibonacci[i-2];
     }
     fibonacci[i] = a;
     arc(0,0,a,a,0,PI/2);
     rotate(PI/2);
     if(i != 0){
        translate(-fibonacci[i-1]/2,0);
     }
    
    
     
   }
   
 
}