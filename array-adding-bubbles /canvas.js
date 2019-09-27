let bubble = [];

function setup(){
    createCanvas(600, 400);
  // for(let i = 0 ; i <= 500; i++){
    //   let x = i*1+10;
   // 　bubble[i] = new Bubble(random(width),random(height), 40);
  //  };
} 

function mousePressed(){
//    for(let i = 0 ; i <= 500; i++){
    let a = new Bubble(mouseX, mouseY);
   // bubble[0] = a;
    console.log(bubble[0])
  bubble.push(a);
    // console.log(a);

    
}

function draw(){
    background(212, 191, 255);
//这里的bubble.length指的是bubble数组的长度，
//如果我上面不用push，则数组长度就为1；用了push，就是数组不断往后加1个长度
    for(let i = 0 ; i < bubble.length; i++){
    bubble[i].move();
   // bubble[i].colchange();
    bubble[i].show();
    };

}

