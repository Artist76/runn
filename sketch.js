var runner, runnerIm;
var path, pathimage;
var boundaries, boundaries2;
function preload(){
  runnerIm = loadAnimation ("Runner-2.png", "Runner-1.png");
  pathimage = loadImage ("path.png");
}

function setup(){
  createCanvas(400,400);
  
  path = createSprite(200, 200, 30, 30);
  path.addImage(pathimage);
   runner = createSprite(200, 200, 30, 30)
  runner.addAnimation("animation" , runnerIm);
  runner.scale=0.08;
  boundaries = createSprite(200, 405, 500, 15)
  boundaries2 = createSprite(200, -5, 500, 15)
  
}

function draw() {
  
  background(0);
  path.velocityY=5;
  if(path.y>400){
  path.y=height/2;
  }
  runner.x=mouseX;
  runner.y=mouseY;
  runner.collide(boundaries);
  runner.collide(boundaries2);
  boundaries.visible=false;
  boundaries2.visible=false;
drawSprites();


}
