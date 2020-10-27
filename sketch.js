var PLAY = 1
var END = 0
var gameState = 1;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstaclesGroup,cloudsGroup;
var score
var ground,groundimg,invisground;
var cloud,cloudImg
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  groundimg = loadImage("ground.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  cloudImg = loadImage("cloud.jpg");
  bananaImage = loadImage("banana.png");
}



function setup() {
  createCanvas(400,400);
  
  ground = createSprite(200,400,400,10);
  ground.addImage(groundimg);
  ground.scale = 1
  ground.velocityX = -4
  
  monkey = createSprite(30,300,10,10);
  monkey.addAnimation("run",monkey_running);
  monkey.scale = 0.08
  monkey.velocityY = 4
  
  invisground = createSprite(200,380,400,10);
  invisground.visible = false
  
  cloudsGroup = createGroup();
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  score = 0;

  
}


function draw() {
  background("white");
  
  monkey.collide(invisground);
  survivalTime = Math.round(frameCount/frameRate());
  
  
  if (gameState === 1){
    if (ground.x < 0){
        ground.x = ground.width/2;
      }
    if(keyDown("space")&& monkey.isTouching(ground)) {
        monkey.velocityY = -15;
    }
    monkey.velocityY = monkey.velocityY + 0.8
    spawnClouds();
    spawnFood();
    spawnObstacles();
  }
  text("Survival Time: " + survivalTime,300,320);
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 70 === 0) {
    cloud = createSprite(400,75,40,10);
    cloud.y = Math.round(random(20,80));
    cloud.addImage(cloudImg);
    cloud.scale = 0.08;
    cloud.velocityX = -4;
    cloud.lifetime = 110
    cloudsGroup.add(cloud);
  }
}

function spawnFood(){
  if (frameCount % 80 === 0) {
    banana = createSprite(400,350,10,10);
    banana.y = Math.round(random(150,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 110
    bananaGroup.add(banana);
  }
}
function spawnObstacles(){
  if (frameCount % 100 === 0){
    obstacle = createSprite(400,165,10,40);
    obstacle.y = Math.round(random(200,300));
    obstacle.scale = 0.1;
    obstacle.velocityX = -4
    obstacle.lifetime = 110;
    obstacle.addImage(obstacleImage);
    obstaclesGroup.add(obstacle);
  }
}


  






