class Bubble{

    constructor(x,y,rr){
        this.x = x;
        this.y = y;
        this.rr = rr;
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
        ellipse(this.x, this.y, this.rr * 2, this.rr * 2);
    }

//为了避免在class中使用全局变量mouseX/mouseY,
//所以我们单独为click设置参数px/py以替代
    click(px, py){
        let d = dist (px, py, this.x, this.y)
        if (d <= this.rr ){
            console.log("pressed");
            //这里不能直接写fill（100，100，100）；
            //而是要写对于参数this.r, this.g, this.b的改变
            this.r = 100;
            this.g = 100;
            this.b = 100;
        }
    }


}