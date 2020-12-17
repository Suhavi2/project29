const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a,base1,base2,block1,block2,block3;
var block4,block5,block6,block7,block8,block9,polygonImg,polygon1;
var slingShot;
var circles=[];

function preload(){
polygonImg=loadImage("polygon.png")
}




function setup() {
  createCanvas(900,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;
 base1=new Ground(720,290,210,20)
 base2=new Ground(450,420,210,20)
  block1=new Box(710,180)
  block2= new Box(740,215)
  block3=new Box(712,215)
  block4=new Box(680,215) 
  block5=new Box(660,255)
  block6=new Box(688,255)
  block7=new Box(720,255)
  block8=new Box(750,255)
  block9 =new Box(780,255)

  block10=new Box(450,390)
  block11=new Box(430,390)
  block12=new Box(470,390)
  block13=new Box(420,390)
  block14=new Box(400,390)
  block15=new Box(430,350)
  block16=new Box(400,330)
  block17=new Box(460,330)
  block18=new Box(430,300)

  
  ground1=new Ground(740,790,1990,30)
  polygon1= Bodies.circle(50,200,20)
  World.add(world,polygon1)

  

  slingShot= new SlingShot(this.polygon1,{x:100,y:200})



}

function draw() {
  background("black")
Engine.update(engine);
  
  
  
  
 imageMode (CENTER)
 image (polygonImg,polygon1.position.x,polygon1.position.y,30,30)
 
  
 base1.display();
 slingShot.display();
 base2.display();
 fill ("red")
 block1.display();
 block2.display();
 block3.display();
 fill("skyBlue")
 block4.display();
 block5.display();
 fill("pink")
 block6.display();
 block7.display();
 fill("lightGreen")
 block8.display();
 block9.display();
 fill("purple")
 block10.display();
 block11.display();
fill("skyBlue")
 block12.display();
 block13.display();
 fill("lightGreen")
 block14.display();
 block15.display();
 fill("yellow")
 block16.display();
 fill("pink")
 block17.display();
 block18.display();
ground1.display();
 drawSprites();
}


function mouseDragged(){
Matter.Body.setPosition(this.polygon1,{x:mouseX,y:mouseY})
}


function mouseReleased(){
  slingShot.fly();
}
