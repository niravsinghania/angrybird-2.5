class Chain{
    constructor(bodya , bodyb) {
        var options = {
          bodyA : bodya,
          bodyB : bodyb,
          stiffnes : 0.04,
          length :10
        }
        this.chain = Constraint.create (options)
        World.add(world, this.chain);
      }
      display(){

      var pointa = this.chain.bodyA.position;
      var pointb = this.chain.bodyB.position;
      strokeWeight(4);
      line (pointa.x,pointa.y,pointb.x,pointb.y)
      }
}