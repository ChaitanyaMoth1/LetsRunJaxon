var path,boy;
var leftboundary,rightboundary;
var pathImg,boyAnm;

function preload()
{
  //pre-load images
  pathImg = loadImage("path.png");
  boyAnm = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  

  boy = createSprite(200,300,20,20);
  boy.addAnimation("running", boyAnm);
  boy.scale = 0.09;
  
  leftboundary = createSprite(30,200,80,400);
  rightboundary = createSprite(370,200,80,00);
  leftboundary.visible = false;
  rightboundary.visible = false;
}

function draw() {
  background(0);
  drawSprites();
  createEdgeSprites();


  if(path.y > 400 )
  {
    path.y = height/2;
  }

  boy.x=mouseX;
  boy.collide(leftboundary);
  boy.collide(rightboundary);
  
}
