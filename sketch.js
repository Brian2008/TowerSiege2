const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine
var a;
var circles=[];
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var Stand1
var hexagon
function setup() {
  createCanvas(1000,1000);
  engine = Engine.create(); 
  world = engine.world;
  stroke(255)

  //lv 1
  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  //lv 2
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  //top
  box9 = new Box(390,155,30,40);
  //stand
  Stand1 = new Ground(390,150,150,5)
  //hexagon
  hexagon = new Hexagon(50,200,20)
  slingShot = new Slingshot(this.hexagon,{x:100,y:200});
}

function draw() {

background(0);  
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
Stand1.display();
hexagon.display();
}
function mouseDragged()
{ Matter.Body.setPosition(this.hexagon,{x:mouseX,y:mouseY}); 
} 
function mouseReleased(){ slingShot.fly(); 
}