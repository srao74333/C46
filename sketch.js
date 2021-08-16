const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundimg, pingPongBallimg, waterGlassimg, restartimg;
var watterGlass, pingPongBall, restart, background;
var ball, slingshot;
var engine, world;
var gameState = "onSling";


function preload(){
engine = Engine.create();
world = engine.world;

backgroundimg = loadImage("assets/background.jpg");

pingPongBallimg = loadImage("assets/pingPongBall.png");
waterGlassimg = loadImage("assets/waterGlass.png");
restartimg = loadImage("assets/restart.png");

}
function setup(){
createCanvas(displayWidth,displayHeight);

background = createSprite(0,0,displayWidth,displayHeight);
background.addImage(backgroundimg);
background.scale = 4;

ball = new Ball(200,200,20,20);
// pingPongBall = createSprite(200,200,20,20);
// pingPongBall.addImage(pingPongBallimg);
// pingPongBall.scale = 0.2;

waterGlass = new Glass(1100,400,20,20);
// waterGlass = createSprite(1100,400,20,20);
// waterGlass.addImage(waterGlassimg);
// waterGlass.scale = 0.8;

restart = createSprite(1160,100,20,20);
restart.addImage(restartimg);
restart.scale = 0.5;

slingshot = new Slingshot(ball.body,{x:200, y:50});

}
function draw(){
Engine.update(engine);
ball.display();
slingshot.display();
waterGlass.display();
    drawSprites();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}