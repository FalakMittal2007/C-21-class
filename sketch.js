
var fixedRect, movingRect;
var gameObject1, gameObject2;
var gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1=createSprite(200,100,30,30);
  gameObject2=createSprite(100,200,30,30);
  gameObject3=createSprite(500,200,30,30);
  gameObject4=createSprite(300,200,30,30);
 
  gameObject4.velocityX=(1);
  gameObject3.velocityX=(-1);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
  }
  else if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor="grey";
    gameObject2.shapeColor="grey";
    gameObject3.shapeColor="grey";
    gameObject4.shapeColor="grey";
    fixedRect.shapeColor = "green"
  }
 

  bounceOff(gameObject3,gameObject4)
  drawSprites();
}



