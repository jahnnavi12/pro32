class Hexagon{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.Hexagon = Constraint.create(options);
        World.add(world, this.Hexagon);
    }
    attach(body){
        this.Hexagon.bodyA=body;
        }
    fly(){
    this.Hexagon.bodyA=null;

    }
    display(){
        if(this.Hexagon.bodyA){
        var pointA = this.Hexagon.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}