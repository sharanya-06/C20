var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,100,50,30);
  movingRect.shapeColor="pink";
  fixedRect=createSprite(400,200,30,50);
  fixedRect.shapeColor="pink";

}

function draw() {
  background(0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="pink";
    fixedRect.shapeColor="pink";

  }
  drawSprites();
}