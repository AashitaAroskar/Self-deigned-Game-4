var bg, backgroundImg;
var steve, steveImg;
var steve_ground;
var creeper, creeperIMG;
var enderman, endermanIMG;
var obstaclesGroup;
function preload(){
  backgroundImg = loadImage("images/Background.jpg");
  steveImg = loadImage("images/Steve 2.png");
  creeperIMG = loadImage("images/Creeper.png");
  endermanIMG = loadImage("images/Enderman.png");
}
function setup() {
  createCanvas(1250,600);
  bg= createSprite(600,250,1200,800);
  bg.addImage(backgroundImg);
  bg.scale=1;
  bg.velocityX= -4;

  steve= createSprite(100,520);
  steve.addImage(steveImg);
  steve.scale= 0.2;

  steve_ground=createSprite(620,590,1250,20);
  steve_ground.shapeColor= "green";

obstaclesGroup= new Group()
}

function draw() {
 background(0);
  if(bg.x < 0){
    bg.x = 600;
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 150 === 0){
  obstacle= createSprite(1240,520);
  obstacle.velocityX= -5;
  var rand= Math.round(random(1,2));

  switch(rand){
    case 1:obstacle.addImage(creeperIMG);
    break;
    case 2:obstacle.addImage(endermanIMG);
    break;
    default:break;
  }
  obstacle.scale= 0.2;
  obstacle.lifetime= 250;
  obstaclesGroup.add(obstacle);
  }
}