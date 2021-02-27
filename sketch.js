var ball;
//name spacing
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world,ground;

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,10,options);
  World.add(world,ground);

  var ballOptions ={
    restitution:2.0
  }
  ball = Bodies.rectangle(200,200,20,20,ballOptions);
  World.add(world,ball); 
 //console.log(ground);
 //onsole.log(object.position.x);
 //console.log(object.position.y);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);
    
    rect(ball.position.x,ball.position.y,20,20);
}
