let words = ["NAUGHT", "INGENUITY", "INTERACTION", "FLUFFY PONY" ,"  "];
let fr = 5;
let index = 0;
let on = false;

function setup(){
createCanvas(600, 400);
}

function draw(){

    frameRate(fr);
    // let picked = random(words);

    background(50,0,77);
    fill(255, 208, 0);
    
    noStroke();
    textSize(32);
    textAlign(RIGHT, CENTER);
    text("DESIGN IS", 280, 200);

    stroke(255, 208, 0);
    strokeWeight(3);
    line(300, 220, 520, 220);

    if(on){
        noStroke();
        textSize(30);
        textAlign(LEFT,CENTER);
     //text(picked, 300, 200);
        text(words[index], 300, 200);

        if (index <= 3 ){
            index = index + 1;
            }else{
            index = 0;
            }
    }else{
        noStroke();
        textSize(30);
        textAlign(LEFT,CENTER);
     //text(picked, 300, 200);
        text(words[index], 300, 200);
    }
}

function mousePressed(){
    on=!on
}
// function mousePressed(){
//     if (index <= 2 ){
//     index = index + 1;
//     }else{
//     index = 0;
//     }
// }