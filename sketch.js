var p, pI;
var circle, circleI;
var obstacle;
var x, xI;
var cGroup;
var oGroup;

function preload() {
  pI = loadImage("p.png");

  circleI = loadImage("circle.png")
  xI = loadImage("x.png")
}

function setup() {
  createCanvas(600, 700);
  background("black")

  p = createSprite(400, 600);
  p.addImage(pI)

  cGroup = new Group()
  oGroup = new Group()
}

function draw() {
  background("black");
  move()
  spawnCircles()
  spawnXs()
  if(p.isTouching(cGroup)) {
    cGroup[0].destroy()
  }
  drawSprites()
}

function spawnCircles() {
  randomX = Math.round(random(1,2))
  x = 0
  if(randomX == 1) {
    x = 200
  }
  if(randomX == 2) {
    x = 400
  }
  if(frameCount % 60 == 0) {
    circle = createSprite(x, -30, 50, 50)
    circle.addImage(circleI)
    circle.scale = 0.1
    circle.velocityY = 7
    p.depth = circle.depth + 1
    cGroup.add(circle)
  }
}

function spawnXs() {
  randomX = Math.round(random(1,2))
  x = 0
  if(randomX == 1) {
    x = 200
  }
  if(randomX == 2) {
    x = 400
  }
  if(frameCount % 60 == 0) {
    obstacle = createSprite(x, -200, 50, 50)
    obstacle.addImage(xI)
    obstacle.scale = 0.5
    obstacle.velocityY = 7
    p.depth = obstacle.depth + 1
    oGroup.add(obstacle)
  }
}

///Users/syden/Downloads/New_Game_2024_08_20_17_26_50/sketch.js