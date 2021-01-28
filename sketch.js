//new variables for being called in the program
var starImg, fairyImg, backG;
var fairy , sound;
var star, starBody;


//using const so that the value can't change
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//to load the images
function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairy1.png","fairy2.png");
	bgImg = loadImage("starnight.png");
	sound = loadSound("JoyMusic.mp3");

}


function setup(){
  //creating the canvas
   createCanvas(800, 750);
   
   //making the engine the same as Engine
   engine= Engine.create();
   //adding the world to the engine
   world= engine.world;
   
   //to play the sound in the background
   sound.play();

   //creating some sprites
  fairy= createSprite(180, 520);
  fairy.addAnimation("fairyI", fairyImg);
  fairy.scale= 0.25;

  star= createSprite(650, 30);
  star.addImage(starImg);
  star.scale= 0.2;
  
  //creating the star from its nearest shape(circle)
  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
  //adding starBody inside the worl to World
	World.add(world, starBody);
  
  //the make the Engine run engine
  Engine.run(engine);

}

function draw(){
  //setting the background
background(backG)

//making the star and starBody the same
star.x= starBody.position.x 
star.y= starBody.position.y 

console.log(star.y);
//to make the star not move
if(star.y > 470 && starBody.position.y > 470 ){
  Matter.Body.setStatic(starBody,true);
}
//for display
drawSprites();

}

function keyPressed() {
//to add control with keys
if(keyCode === RIGHT_ARROW){
         fairy.x = fairy.x + 20;
}

      if(keyCode === LEFT_ARROW){
         fairy.x = fairy.x - 20;
}

//to make the star false
if (keyCode === DOWN_ARROW) {
  //to not hold the star and let it fall
  Matter.Body.setStatic(starBody,false); 
}
}
