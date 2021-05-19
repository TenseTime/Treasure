var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  b2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();

  if(score === 3){
    background(b2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED", 250,200);
  }
  drawSprites();
  textSize(30);
  text("Score: " + score, 760,50);
}