var backgroundImg;
var bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,bg16,bg17,bg18,bg19,bg20;

let timer = 0;

var bgAnimation

var gameState = 1;

function preload(){
  bgAnimation = loadAnimation("Screenshot (273).png","Screenshot (274).png","Screenshot (275).png","Screenshot (276).png","Screenshot (277).png","Screenshot (278).png","Screenshot (279).png","Screenshot (280).png","Screenshot (281).png","Screenshot (282).png","Screenshot (283).png","Screenshot (284).png","Screenshot (285).png","Screenshot (286).png","Screenshot (287).png","Screenshot (288).png","Screenshot (289).png","Screenshot (290).png","Screenshot (291).png","Screenshot (292).png","Screenshot (293).png","Screenshot (294).png","AnimationEnd1.png","AnimationEnd2.png"); 
}

function setup(){
  createCanvas(1600,800);
  backgroundImg = createSprite(700,400,800,800);
  backgroundImg.addAnimation("backgroundImg",bgAnimation);
  backgroundImg.scale = 1;
}

function draw(){
  background("black");
  frameRate(0.2);
  drawSprites();

  fill("WHITE");
  stroke("BLACK");
  strokeWeight("10");
  textSize(40);
  textFont("Segoe Script");
  text("Made by", 1300,650);
  text("Vedant Jain", 1300,700);
}