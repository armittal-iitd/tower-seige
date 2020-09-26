class Polygon {

    constructor(x,y,width,height){

        this.body=Bodies.rectangle(x,y,width,height);
        this.width=this.width;
        this.height=this.height;
        this.image=loadImage('images/polygon.png')
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
       
        pop();
    }

}