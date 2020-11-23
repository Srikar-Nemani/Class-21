var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(0,400,50,80);
  object1.shapeColor = "red";
  object2 = createSprite(1200,400,50,80);
  object2.shapeColor = "red";
  

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  object1.velocityX = 5;
  object2.velocityX = -5;
}

function draw() {
  background(0,0,0);  


  bounceOff(movingRect,fixedRect);
  bounceOff(object1,object2);


  drawSprites();
}

