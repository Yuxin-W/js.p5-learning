class Bubble{

    constructor(xx,yy){
        this.x = xx;
        this.y = yy;
        this.r = 94;
        this.g = 141;
        this.b = 255;
    }

    move(){
        this.x += random(-6,6);
        this.y += random(-4,4);
    }

    colchange(){
        this.r = random(89, 200);
        this.g = random(0, 255);
    }

    show(){
        noStroke();
        fill(this.r, this.g, this.b, 50);
        ellipse(this.x, this.y, 50, 50);
    }


}