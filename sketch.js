
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

var boy;
var stone,tree;
var ground,slingshot;
var mango1,mango1,mango1,mango1,mango1,mango1;

function preload()
{ boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy= new Boy(100,260,150,300);
	stone=new Stone(142,450,20);
	tree = new Tree(300,190,400,500);
    
	mango1=new Mango(275,110,40);
	mango2=new Mango(300,150,40);
	mango3=new Mango(350,150,40);
	mango4=new Mango(325,100,40);
	mango5=new Mango(250,170,40);
	mango6=new Mango(380,170,40);

	slingshot=new SlingShot(stone.body,{x:150,y:450});

	 
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  boy.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
  tree.depth = stone.depth;
  stone.depth = stone.depth+1;
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
	 slingshot.fly();
	 
 }
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }
   function keyPressed()
   {
	   if(keyCode == 32)
	   {
		 Matter.Body.setPosition(stone.body,{x:150,y:400});
		 slingshot.attach(stone.body);
	   }
   }