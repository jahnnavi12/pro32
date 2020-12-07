const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var box1,ground,box2,box3,box4,box5,box5,box6,box7,box8
var box9,box10,box11,box12,box13,box14,box15,box16,box17,backgroundImg,hexagon,g,polygon;
var score=0;
var engine, world;
var gameState = "onSling";


function preload(){
    getBackgroundImg();  
}

function setup(){
createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,380,20,20);
    box2 = new Box(620,380,20,20);
    box3 = new Box(640,380,20,20);
    box4 = new Box(660,380,20,20);
    box5 = new Box(680,380,20,20);
    box6 = new Box(700,380,20,20);
    box7 = new Box(720,380,20,20);
    box8 = new Box(660,340,20,20);
    box10 = new Box(660,320,20,20);
    box11 = new Box(620,360,20,20);
    box12 = new Box(640,360,20,20);
    box13 = new Box(660,360,20,20);
    box14 = new Box(680,360,20,20);
    box15 = new Box(640,340,20,20);
    box16 = new Box(680,360,20,20);
    box17 = new Box(700,360,20,20);
    polygon = new Polygon(200,200,30,30);

    g = new Hexagon(polygon.body,{x:200, y:200});
    ground = new Ground(500,390,1000,15); 


}

function draw(){

if(backgroundImg) 

    background(backgroundImg);

    textSize(35);
    fill("white");
    text("SCORE:"+score,630,40);
    Engine.update(engine); 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box10.display();
    box15.display();
    box16.display();
    box17.display();
    g.display();
    polygon.display();
    ground.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box10.score();
    box15.score();
    box16.score();
    box17.score();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    g.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
async function getBackgroundImg(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    console.log(responseJSON.datetime);
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=18){
    bg="bg.png";    
    } 
    else{
    bg="bg2.jpg";    
    }
    backgroundImg=loadImage(bg);
    console.log(backgroundImg);
}