function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }
    createCharacter(140,100);
}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0);
    createBorders(5);
    exit();
    drawCharacter();
    characterMovement();
    obstacle();
    win();
    secondobstacle(); 
    
}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}

function obstacle()
{
 // first obstacle
 fill(130,15,14);
 square(shapeX, shapeY, 55, 20)

  // setting random speed
  shapeXSpeed = Math.floor(Math.random(50) * (Math.floor(Math.random(22) * 5)) - 1);
  shapeYSpeed = Math.floor(Math.random(25) * (Math.floor(Math.random(22) * 5)) + 0);
  shapeYSpeed = Math.floor(Math.random(25) * (Math.floor(Math.random(22) * 5)) + 3);
  shapeXSpeed = Math.floor(Math.random(50) * (Math.floor(Math.random(22) * 5)) - 2);

 // move the shape
 shapeX += shapeXSpeed;
 shapeY += shapeYSpeed;
 // out of bounds check
 if(shapeX > width)
 {
     shapeX = 0;
 }
 if(shapeX < 0)
 {
     shapeX = width;
 }
 if(shapeY > height)
 {
     shapeY = 0;
 }
 if(shapeY < 0)
 {
     shapeY = height;
 }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}


function drawCharacter()
{
    fill(37,94,53);
    square(characterX, characterY, 50);
}

function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-80);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function win()
{
// Player leaving through exit
if(characterX > width && characterY > width-700)
 {
    fill(150,54,34);
    stroke(10);
    textSize(26);
    text("Winner!", width/2-29, height/2-29);
}
}

function exit()
{
// exit message
textSize(20);
text("EXIT", width-58,height-80)
}

function secondobstacle()
{
 // mouse click shape
 fill(50,25,4);
 square(mouseShapeX, mouseShapeY,33);
      
     // Second obstacle
     drawCharacter();
     characterMovement();
 
     fill(13,15,14);
     circle(shapeX, shapeY, 45)
 
      // setting random speed
      shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random(2) * 45)) - 9);
      shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random(2) * 45)) + 5);
    
}

// mouse click
var mouseShapeX;
var mouseShapeY;

// character
var characterX = 22;
var characterY = 25;

// wasd controls
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// shape
var shapeX = 25;
var shapeY = 45;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}