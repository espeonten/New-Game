var p, pI;
var circle, circleI;
var obstacle;
var x, xI;
var score = 0;
var lives = 10;
var cGroup;
var oGroup;

function preload() {
  pI = loadImage("p.png");

  circleI = loadImage("circle.png")
  xI = loadImage("x.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black")

  p = createSprite(width / 3, height - 100);
  p.addImage(pI)

  cGroup = new Group()
  oGroup = new Group()
}

function draw() {
  console.log(p.x)
  background("black");
  move()
  if(p.isTouching(cGroup)) {
    cGroup[0].destroy()
    score +=1
  }
  if(p.isTouching(oGroup)) {
    oGroup[0].destroy()
    lives -=1
  }
  spawnCircles()
  spawnXs()
  if(lives <= 0) {
    p.destroy()
    cGroup.destroyEach()
    oGroup.destroyEach()
    fill("white")
    textSize(50)
    text("You died! You collected: " + score + " circles!", width / 2 - 300, height / 2)
  }
  drawSprites()
  fill("cyan")
  textSize(25)
  text("Circles collected: "+ score, 20, 30)
  fill("orange")
  text("Lives: " + lives, 250, 30)
}

function spawnCircles() {
  randomX = Math.round(random(1,2))
  x = 0
  if(randomX == 1) {
    x = width / 3
  }
  if(randomX == 2) {
    x = width / 3 + width / 3
  }
  if(frameCount % 60 == 0) {
    circle = createSprite(x, -30, 50, 50)
    circle.addImage(circleI)
    circle.scale = 0.1
    circle.velocityY = 5 + (frameCount / 700)
    p.depth = circle.depth + 1
    cGroup.add(circle)
  }
}

function spawnXs() {
  randomX = Math.round(random(1,2))
  x = 0
  if(randomX == 1) {
    x = width / 3
  }
  if(randomX == 2) {
    x = width / 3 + width / 3
  }
  if(frameCount % 60 == 0) {
    obstacle = createSprite(x, -200, 50, 50)
    obstacle.addImage(xI)
    obstacle.scale = 0.5
    obstacle.velocityY = 5 + (frameCount / 700)
    p.depth = obstacle.depth + 1
    oGroup.add(obstacle)
  }
}

///Users/syden/Downloads/New_Game_2024_08_20_17_26_50/sketch.js
