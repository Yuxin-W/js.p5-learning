let bubble = [];

function setup(){
    createCanvas(600, 400);
    for(let i = 0 ; i < 5; i++){
     let x = random(width);
     let y = random(height);
     let rr = random(15,40);
     let b = new Bubble(x, y ,rr);
     bubble.push(b);
    }
} 

function mousePressed(){
    for(let i = 0 ; i < bubble.length; i++){
        // 这里是将mouseX/mouse作为参数argument
        //传给class中定义的parameter，px和py
      bubble[i].click(mouseX, mouseY);
    }
}

function draw(){
    background(212, 191, 255);
//这里的bubble.length指的是bubble数组的长度，
//如果我上面不用push，则数组长度就为1；用了push，就是数组不断往后加1个长度
    for(let i = 0 ; i < bubble.length; i++){
    bubble[i].move();
    bubble[i].show();
    };
}

