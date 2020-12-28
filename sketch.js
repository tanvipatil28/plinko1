const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;



function setup() {
  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
  ground = new Ground(480,height,800,20);

  plinko1=new Plinko(200,600,10);
  plinko2=new Plinko(300,600,10);
  plinko3=new Plinko(400,600,10);
  plinko4=new Plinko(500,600,10);
  plinko5=new Plinko(600,600,10);
  plinko6=new Plinko(10);
  plinko7=new Plinko(10);
  plinko8=new Plinko(10);
  plinko9=new Plinko(10);
  plinko10=new Plinko(10);
  plinko11=new Plinko(10);
  plinko12=new Plinko(10);
  plinko13=new Plinko(10);
  plinko14=new Plinko(10);
  plinko15=new Plinko(10);
  plinko16=new Plinko(10);

  division1=new Divisions();
  
  division2=new Divisions();
  
  division3=new Divisions();
  
  division4=new Divisions();

  division5=new Divisions();

  division6=new Divisions();

}

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
}
for (var k= 0;k<=innerWidth;k=k=80){
  divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));
}
for (var j=40; j<=innerWidth; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}
for(var j=15;j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

for(var j=25;j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

for(var j=15;j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

for(var j=0; j<particles.length; j++){
  particles[j].display;

}
for(var k=0;k< divisions.length; k++){
  divisions[k].display()
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}