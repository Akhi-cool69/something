var fixedrectangle, movingrectangle; 

function setup() {
  createCanvas(1200,800);
  fixedrectangle=createSprite(600,600,100,50);
  fixedrectangle.shapeColor = "blue";
  movingrectangle=createSprite(400,600,50,100);
  movingrectangle.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;
  if(movingrectangle.y - fixedrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2 
    && fixedrectangle.y - movingrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2
    && fixedrectangle.x - movingrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2 
    && movingrectangle.x - fixedrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2){
    movingrectangle.shapeColor = "orange";
    fixedrectangle.shapeColor = "green";
  }
  else{
    movingrectangle.shapeColor = "yellow";
    fixedrectangle.shapeColor = "brown";
  }
  drawSprites();
}