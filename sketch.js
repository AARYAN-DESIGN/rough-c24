var b1,b2,b3,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill('yellow');
	b1=createSprite(width/2, 650, 200,20 );
	b2=createSprite(300, 610, 20,100);
	b3=createSprite(500, 610, 20,100);
	ball=new paper(50,645,20);
	 
	 
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color('yellow')
	b1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	World.add(world, b1);
	
	b2 = Bodies.rectangle(350, 600, 20, 100 , {isStatic:true} );
	World.add(world, b2);
	
	b3 = Bodies.rectangle(450, 600, 20, 100 , {isStatic:true} );
	World.add(world, b3);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	   
	 }
   }


