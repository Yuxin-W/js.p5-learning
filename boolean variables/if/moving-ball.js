var shell = 200;
    function setup() {
      createCanvas(400, 400);
      console.log("shown");
    
    }
    
    function draw() {
      background(220);
      shell = shell+1
      
      ellipse(shell,200,40,40)
      fill(220,20,70);
      noStroke();
      console.log("shown");
      
    }
