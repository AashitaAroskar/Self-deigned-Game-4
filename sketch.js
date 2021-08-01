var bg, backgroundImg;
var steve, steveImg;
var steve_ground;
var steveAttackIMG;
var creeper, creeperIMG, creeperGroup;
var enderman, endermanIMG, endermanGroup;
var obstaclesGroup;
var gameState;
function preload(){
  backgroundImg = loadImage("images/Background.jpg");
  steveImg = loadImage("images/Steve 2.png");
  creeperIMG = loadImage("images/Creeper.png");
  endermanIMG = loadImage("images/Enderman.png");
  steveAttackIMG = loadImage("images/Steve attacking.png");
}
function setup() {
  createCanvas(1250,600);
  bg= createSprite(600,250,1200,800);
  bg.addImage(backgroundImg);
  bg.x = bg.width/2;
  bg.scale=1;
  bg.velocityX= -4;

  steve= createSprite(100,480);
  steve.addImage(steveImg);
  steve.scale= 0.2;
  steve.setCollider("circle", 0, 0,250);
  steve_ground=createSprite(620,590,1250,20);
  steve_ground.shapeColor= "green";

//obstaclesGroup= new Group()
endermanGroup= new Group()
creeperGroup= new Group()
}

function draw() {
 background(0);
  if(bg.x < 0){
    bg.x = bg.width/2;
  }
  if(keyDown("space")){
    steve.velocityY= -12;
  }
  steve.velocityY= steve.velocityY+0.5;

  if(keyDown("S")|| endermanGroup.isTouching(steve)){
    steve.addImage(steveAttackIMG);
    steve.y=580
    steve.scale= 0.3;
    enderman.destroy();
  }
  steve.collide(steve_ground);
  spawnObstacles();
  
  if(creeperGroup.isTouching(steve)){
    gameState= "end";
  }
  if(gameState=="end"){
    steve.destroy();
    //obstaclesGroup.destroyEach();
    creeperGroup.setVelocityXEach(0);
    endermanGroup.setVelocityXEach(0);
    bg.destroy();
    textSize(30);
    fill("yellow");
    text("Game Over!",500,300)

  }
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 150 === 0){
  obstacle= createSprite(1240,520);
  obstacle.velocityX= -5;
  creeper= createSprite(1260,520)
  creeper.velocityX= -5;
  enderman=createSprite(1260,520)
  enderman.velocityX= -5;
  creeper.scale= 0.2;
  creeper.lifetime= 250;
  creeperGroup.add(creeper)

  enderman.scale= 0.2;
  enderman.lifetime= 250;
 endermanGroup.add(enderman);
  var rand= Math.round(random(1,2));

  switch(rand){
    case 1:obstacle.addImage(creeperIMG);
    break;
    case 2:obstacle.addImage(endermanIMG);
    break;
    default:break;
  }
  //obstacle.scale= 0.2;
  //obstacle.lifetime= 250;
  //obstaclesGroup.add(obstacle);

  }
}