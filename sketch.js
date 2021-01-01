
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5
var ro1,ro2,ro3,ro4,ro5
var roof1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40
	sbpX=width/2
	sbpY=675

	roof1= new Roof(width/2,175,229,20)
	 
	bob1= new Bob(sbpX-bobDiameter*2,sbpY,bobDiameter)
	bob2= new Bob(sbpX-bobDiameter,sbpY,bobDiameter)
	
	bob3= new Bob(sbpX,sbpY,bobDiameter)
	bob4= new Bob(sbpX+bobDiameter,sbpY,bobDiameter)
	bob5= new Bob(sbpX+bobDiameter*2,sbpY,bobDiameter) 
 
	rope1= new Rope(bob1.body,roof1.body,-bobDiameter*2,0)
	rope2 = new Rope(bob2.body,roof1.body,-bobDiameter,0)
	rope3= new Rope(bob3.body,roof1.body,0,0)
	rope4= new Rope(bob4.body,roof1.body,bobDiameter,0)
	rope5= new Rope(bob5.body,roof1.body,bobDiameter*2,0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
  roof1.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}



function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:100,y:-150})
	}
}