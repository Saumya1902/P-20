var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.shapeColor="blue";
  car.velocityX=speed;

  wall=createSprite(800,200,60,height/2);
  wall.shapeColor="black";
}

function draw() {
background("lightBlue");
  
  if(wall.x-car.x<wall.width/2+car.width/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    
    if(deformation>180)
       {
    car.shapeColor="Green";
    text("Deformation="+deformation,200,150);
    text("Weight="+weight,200,100);
    text("speed="+speed,200,50);
     }
    if(deformation<180 && deformation>100)
       {
      car.shapeColor="Yellow";
      text("Deformation="+deformation,200,150);
      text("Weight="+weight,200,100);
      text("speed="+speed,200,50);
       }
    if(deformation<100)
    {
      car.shapeColor="Red";
      text("Deformation="+deformation,200,150);
      text("Weight="+weight,200,100);
      text("speed="+speed,200,50);
    }


  }
    
  drawSprites();
}