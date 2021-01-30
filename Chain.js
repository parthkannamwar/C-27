class Chain
{
    constructor(body1,body2)
    {
        var options=
        {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10
        }
        this.chainbody= Constraint.create(options);
        World.add(world,this.chainbody);
    }

    display()
    { 
        var A=this.chainbody.bodyA.position
        var B=this.chainbody.bodyB.position
        line(A.x,A.y,B.x,B.y)
    }
}