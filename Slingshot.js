class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.006,
            length: 10
        }
        this.pointB = pointB
        this.SlingShot= constraint.create(options);
        World.add(world, this.SlingShot);
    }
       attach(body){
		this.SlingShot.bodyA=body;
	   }

      
       fly(){
        this.SlingShot.bodyA=null;
       }

      display(){
            if(this.SlingShot.bodyA){
        
            var pointA = this.SlingShot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }}
    
}
