
var movingRect, fixedRect ;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 100, 50, 50);
  movingRect.shapeColor="yellow";
  movingRect.debug=true;

  fixedRect=createSprite(300,200,100,50);
  fixedRect.shapeColor="pink";
  fixedRect.debug=true;



}

function draw() {
  background(255,255,255);
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){

    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
else{
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="pink";
}




  drawSprites();

  
  
}

