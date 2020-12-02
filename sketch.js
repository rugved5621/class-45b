var hero
var gameState=1
var bullet


function preload(){
  heroImage=loadImage("hero img.jpg")
  bombImage=loadImage("bomb1.png")
  villianImage=loadImage("villian 1 img.png")

}
function setup(){
  createCanvas(800,400)
  hero=createSprite(50,300)
  hero.addImage(heroImage)
  hero.scale=0.3
  ground=createSprite(400,390,1600,10)
  ground.velocityX=-2
  bombGroup=createGroup()

  villiangroup=createGroup()
  bulletgroup=createGroup()
}
function draw(){
  background("white")
  hero.collide(ground)
  if(gameState===1){
  if(keyDown ("space")&&hero.y>300){
      hero.velocityY=-15
    }
    hero.velocityY=hero.velocityY+0.8
  if(hero.isTouching(bombGroup)){
      gameState=2
    }
  
  if(ground.x<0){
    ground.x=400
  }
  createBomb()
  createvillian()
  console.log(hero.y)
  if(keyDown(RIGHT_ARROW)){
    createBullet()
  }
}
 if(gameState===2){
  textSize(40)
   text("gameOver",300,200)
   bombGroup.setVelocityXEach(0)
   bombGroup.setLifetimeEach(-1)
   ground.velocityX=0
   hero.velocityX=0

 }

  
  drawSprites()
}
function createBomb(){
if(frameCount%150===0){
  bomb=createSprite(800,350,5,786)
  bomb.addImage(bombImage)
  bomb.velocityX=-8
  bomb.lifetime=400
  bomb.scale=0.1

bombGroup.add(bomb)

}
}
function createvillian(){
  if(frameCount%1000===0){
    villian=createSprite(800,300,5,786)
    villian.addImage(villianImage)
    villian.velocityX=-5
    villian.lifetime=400
    villian.scale=0.1
    villiangroup.add(villian)
  
  }
}
function createBullet(){
  bullet=createSprite(hero.x,hero.y,15,15)
  bullet.velocityX=+1
  bullet.lifetime=400
  bulletgroup.add(bullet)
}