class Ball{

    constructor()
    {
        this.body = Bodies.circle(50,200,20);
        World.add(world,this.body);

    }

    display()
    {

       var pos = this.body.position;
       imageMode (CENTER);
       image(polygon_img,pos.x,pos.y,40,40);
    }
}