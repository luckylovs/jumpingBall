var block1,block2,block3,block4;
var music;
var ball;
var canvas;
var invisibleWall;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(100,590,200,30);
block1.shapeColor = "blue"  

block2 = createSprite(310,590,200,30);
block2.shapeColor = "orange"  

block3 = createSprite(520,590,200,30);
block3.shapeColor = "purple"

block4 = createSprite(730,590,200,30);
block4.shapeColor = " green"  
  
ball = createSprite(random(20,750,40,40));
  ball.velocityY = 4
  ball.velocityX = 4
ball.shapeColor = "white" 
  ball.scale=0.2
  
 
  


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
   // create edgeSprite();
 edges= createEdgeSprites();
   ball.bounceOff(edges);
  
if(ball.isTouching(block1) && ball.bounceOff(block1)){
    ball.shapeColor = "blue"
  music.play();
  }
 
  
  if(ball.isTouching(block3) && ball.bounceOff(block3)){
    ball.shapeColor = "purple"
    music.play();
  }
  
  
  
  if(ball.isTouching(block4)&& ball.bounceOff(block4)){
   ball.shapeColor = "green"
    music.play();
  }
  
  if(ball.isTouching(block2)){
    ball.shapeColor = "orange"
    ball.velocityX = 0
      ball.velocityY = 0
    music.stop();
  }
  
   
  
  
  
  
//ball.y = mouseY
//ball.x = mouseX  

 
  //add condition to check if box touching surface and make it box
  
  
 
  drawSprites();
}