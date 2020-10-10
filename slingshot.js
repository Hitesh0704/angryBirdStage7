class Slingshot {
 constructor(bodyA,pointB) {
    var options={
        bodyA:bodyA, 
        pointB:pointB,
        stiffness: 0.1,
        length: 10   
      } 
      this.pointB=pointB;
      this.sling=Constraint.create(options);
      World.add(world,this.sling);
      this.sling1=loadImage("sprites/sling1.png");
      this.sling2=loadImage("sprites/sling2.png");
      this.sling3=loadImage("sprites/sling3.png");
 }
display(){
    stroke(48,22,8);
    if(this.sling.bodyA){
if(this.sling.bodyA.position.x<220){
    strokeWeight(7); 
     
  line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y);
  line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y);
  image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30);
}
     else {
        strokeWeight(3); 
     
     line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y);
     line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y);
     image(this.sling3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30);
     }
}
    image(this.sling1,200,20);
    image(this.sling2,170,20);
    
}
 fly() {
    this.sling.bodyA= null;
}
attach(body){
    this.sling.bodyA=body;
}
} 