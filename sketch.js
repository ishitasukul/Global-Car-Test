var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed= random(55,90);
  weight= random(400,1500);

  car= createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor= color(80,80,80);
}

function draw() {
  background(0);

  car.velocityX=speed;
  
  
  if(wall.x - car.x < (car.width+ wall.width)/1.8)
  {
  car.velocityX=0;
  var deformationRate= 0.5 * weight * speed * speed/22500;

  if (deformationRate <100){
    car.shapeColor=color(0,255,0);
  }

  if (deformationRate <180 && deformationRate>100) {
    car.shapeColor=color(230,230,0);
  }

  if (deformationRate>180){
    car.shapeColor=color(255,0,0);
  }
 }

 drawSprites();
}



