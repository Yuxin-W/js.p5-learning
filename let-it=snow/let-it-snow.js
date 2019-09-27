class Bubble{
    //this是类实例化后对象的属性，
    constructor (x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    show(){
        noStroke();
        fill(255, 50);
        ellipse(this.x, this.y, this.r, this.r);
    }

    move(){
       let j = 0.5
       let k = 1
        j = j + random(-1,1)
        if(this.y >= (height-this.r/2) || this.x <= 0){
            j = -j;    
        }
        if(this.y >= (height-this.r/2) || this.y <= 0){
            k= -k;
         //   console.log(k);    
           }
        this.x = this.x + j;
        this.y = this.y + k;
    }

    click(){
        let a = dist(this.x, this.y, mouseX, mouseY);
        if(a <= this.r){
            console.log("pressed")

        }
    }


}
