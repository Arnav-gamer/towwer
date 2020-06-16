const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(600,200,200,20);
    box1 = new Box(600,195,30,30);
    box2 = new Box(600,165,30,30);
    box3 = new Box(600,145,30,30);
    box4 = new Box(600,115,30,30);
    box5 = new Box(635,115,30,30);
    box6 = new Box(565,115,30,30);
    box7 = new Box(565,115,30,30);
    box8 = new Box(565,115,30,30);
    box9 = new Box(635,115,30,30);
    box10 = new Box(635,115,30,30);
    box11 = new Box(670,115,30,30);
    box12 = new Box(670,115,30,30);
    box13 = new Box(530,100,30,30);
    box14 = new Box(530,100,30,30);
    
    platform = new Ground(150, 305, 300, 170);

   

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display(); 
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}