//create sprites
var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg

//upload images
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

  zombieImg=loadImage("assets/zombie.png")
}

function setup() {

 //canvas size 
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}
//background color
function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spawnZombies()
//draw the sprites
drawSprites();

}
function spawnZombies(){
if (frameCount % 50 === 0){
  zombies=createSprite(random(500,1100),random(100,500), 10, 10)
  zombies.velocityX=-3
  //zombies.y=Math.round(random(10,100))
  zombies.addImage(zombieImg)
  zombies.scale=0.15
  zombies.debug=true
  zombies.setCollider("rectangle",0,0,400,400)
}
}