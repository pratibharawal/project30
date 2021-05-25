class Block
{
    constructor(x,y,w,h)
    {
      var options =
      {
        restitution :0.4,
        friction : 0.0
      }

    //  this.visiblity = 255;
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    
     World.add(world, this.body);

    }

display()
{
    
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      

}



}


