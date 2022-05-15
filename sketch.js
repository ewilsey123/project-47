var bgImg, bg, ground
var spidermanimg, spiderman, spidermanJumpimg
var venomimg, obstaclev, greengimg, obstacleGG

function preload(){
 bgImg = loadAnimation("bg2.gif")
 spidermanimg = loadAnimation("spiderman.gif")
  spidermanJumpimg = loadAnimation("jump.gif")
  venomimg = loadAnimation("venom.gif")
  greengimg = loadAnimation("greengoblin.gif")
}

function setup(){
  createCanvas(700,300)
  bg = createSprite(350,150)
  bg.addAnimation("moving", bgImg)
  bg.scale = 1.4

  spiderman = createSprite(45,220, 10,10)
  spiderman.addAnimation("running", spidermanimg)
  spiderman.scale = .4

  ground = createSprite(350,290, 700, 20)
  ground.visible = false
}

function draw(){
  background("blue")
  console.log(spiderman.y)
  if(keyDown("space")&& spiderman.y>100){
    spiderman.velocityY = -10
  }
  spiderman.velocityY = spiderman.velocityY +.8
  spiderman.collide(ground)
  drawSprites()
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
  spawnObstacles()
}
function spawnObstacles(){
  if(frameCount % 280 === 0){
    obstaclev = createSprite(650,230,20,20)
    obstaclev.addAnimation("crawling", venomimg)
    obstaclev.velocityX = -3
    obstaclev.scale = .4
    
  }
  if(frameCount % 500 === 0){
    obstacleGG = createSprite(670,30,20,20)
    obstacleGG.addAnimation("flying", greengimg)
    obstacleGG.velocityX = -3
    obstacleGG.velocityY = 2
    obstacleGG.scale = .8
  }


}