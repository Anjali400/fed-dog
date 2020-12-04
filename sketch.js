const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse; 
const Constraint = Matter.Constraint;
 const MouseConstraint = Matter.MouseConstraint;

var world,engine,canvas;
var mConstraint;
var roof1,rope1,rope2,rope3,rope4,rope5;
var pendulam1,pendulam2,pendulam3,pendulam4,pendulam5;
function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
let canvasmouse = Mouse.create(canvas.elt); 
canvasmouse.pixelRatio = pixelDensity();
 let options = { mouse: canvasmouse };
  mConstraint = MouseConstraint.create(engine, options); 
  World.add(world, mConstraint); 
 //pendulam=new Pendulam(700,300)
    pendulam1=new Pendulam(340,450);
    pendulam2=new Pendulam(400,450);
    pendulam3=new Pendulam(460,450);
    pendulam4=new Pendulam(520,450);
    pendulam5=new Pendulam(580,450);

   

    rope1=new Pendulam(pendulam1.body,{x:340,y:200});
    rope2=new rope(pendulam2.body,{x:400,y:200});
    rope3=new rope(pendulam3.body,{x:460,y:200});
    rope4=new rope(pendulam4.body,{x:520,y:200});
    rope5=new rope(pendulam5.body,{x:580,y:200});

    Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();



rope2.display();
rope3.display();
rope4.display();
rope5.display();
rope1.display();
}

 
      function mouseDragged(){
         Matter.Body.setPosition(pendulam1.body,{x:mouseX,y:mouseY});
      }