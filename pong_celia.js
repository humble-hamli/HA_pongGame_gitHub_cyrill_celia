let x;
let y;
let speedX = -2;
let speedY = 5;
let d = 100;
let gameState = 0;
let gameStartTime = 0;
let gameDuration = 5;
let fontSize = 40;
let hasGameStarted = false;
let b /* Seitenabstand "boarder"*/
let lengthBar


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    x = random(0, width);
    y = random(0, height)
    x = random(50 + d, windowWidth - 50 - d)
    y = random(d / 2, windowHeight - d / 2)
    b = 60 /* Seitenabstand "boarder"*/
    lengthBar = 80
}

function draw() {
    background(0)

    /*bars reacting on mouse, left and right window)*/
    if (mouseX < windowWidth / 2) {
        stroke(255, 0, 255)
        strokeWeight(10)
        line(b, mouseY-lengthBar, b, mouseY) /*40 = halbe Länge des Balkens. Balken = 80 lang*/
    } else if (mouseX > windowWidth / 2) {
        stroke(0, 255, 0)
        strokeWeight(10)
        line(windowWidth - b, mouseY - lengthBar, windowWidth - b, mouseY)
    }

    /* bouncing ball*/
    fill(random(100, 200), random(0, 100), random(100, 200))
    circle(x, y, d);
    x = x + speedX;
    y = y + speedY;
/* bouncing from top/bottom)*/ 
    if(y > windowHeight -d/2 || y < 0){
        speedY = -speedY
    }
/*bouncing from bar left/right*/
    if (x == b - d/2 && y == mouseY || x == windowWidth - b - d/2 && y == mouxeY ) {
        speedX = -speedX
    } 
  
       /*let ball bounce frome side bare left or right*/ /*funktioniert noch nicht. any idea?*/
  

}


