
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14;
var ground,shelf1,shelf2; 
var polygon,sling;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box1=new Box(500,350,50,50);
	box2=new Box(550,350,50,50);
	box3=new Box(600,350,50,50);
	box4=new Box(650,350,50,50);
	

	//2nd layer
	box5=new Box(550,300,50,50);
	box6=new Box(600,300,50,50);
	box7=new Box(580,250,50,50);
	
	ground=new Ground(500,670,1000,30);
	shelf1=new Ground(600,400,300,20);
	
	polygon=new Polygon(200,200,90,90);
	//polygon.shapeColor=color("yellow");
	sling=new Slingshot(polygon.body,{x:100,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  ground.display();
  shelf1.display();
  polygon.display();
  sling.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}


