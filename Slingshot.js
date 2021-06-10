class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 2
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 270, 20);
        image(this.sling2, 240, 15);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6.5);
            stroke("#422104");
            if(pointA.x < 220){
            line(pointA.x-20, pointA.y, pointB.x+25, pointB.y);
            line(pointA.x-10, pointA.y, pointB.x-25, pointB.y);
            image(this.sling3, pointA.x-30, pointA.y-10, 15, 30); 
            } else{
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3, pointA.x+25, pointA.y-10, 15, 30); 
            }
            
        }
    }
    
}