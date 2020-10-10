const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

/*//var angryBird=[31,7,27,9];
//console.log(angryBird);
//var hitesh="hitesh";
console.log(hitesh);
var boolian=[200,210,true,310,777,null,"hey",angryBird];

boolian.push(200);
boolian.pop();
console.log(boolian);
*/
var Gamestate=0;
var engine, world;
var box1, pig1;
var backgroundimg;
var platform;
var  slingshot;

function preload() {
    GetTime(); 
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    platform= new Ground(150,305,300,170);


    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    //newlog= new Log(230,180,120,PI/2);

    bird = new Bird(200,50);
   slingshot=new Slingshot(bird.body,{x: 200 , y: 50});
}

function draw(){
    if(backgroundimg){
     background(backgroundimg);
    }
    
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    platform.display();

    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
   // newlog.display();
    bird.display();
    slingshot.display();
    
}

function mouseDragged(){
    if(Gamestate==0){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
}
function mouseReleased(){
    Gamestate=1;
    slingshot.fly();
}
function keyPressed(){
    if(keyCode==32){
        Gamestate=0;
        slingshot.attach(bird.body);
       // pig1.attach();
       // pig3.attach();
    }
}
async function GetTime(){
 var response=await fetch("http://worldtimeapi.org/api/timezone/Australia/Melbourne");   
 var responseJson=await response.json();
 var datetime=responseJson.datetime;
 var hour=datetime.slice(11,13);
 console.log(responseJson.datetime);
 if(hour>06 && hour<19){
   bg="sprites/bg.png";
 }
 else{
     bg="sprites/bg2.jpg";
 }
 backgroundimg=loadImage(bg);
}
