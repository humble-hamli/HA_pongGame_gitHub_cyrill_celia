// Save Score
var score = 0

// Save Lives
var lives = 3

// Ball position and speed
let ball = { x: 3, y: 3, s: {x: 2 , y: 5} } //Ball Object s for Speed
ball.size = 20

// Center Ball
ball.x = 100
ball.y = 100

// Bar Definition
let bar = {x: 20, w: 100, h: 15}
let barBorder = 10

function playPong() {
  // Background
  background(0);
  fill(255);

  // Score
  textSize(24);
  text("Score: " + score, 60, 25);

  bar.x = map(mouseX, bar.w/2, width - bar.w/2, 0, width - bar.w )
  rect(bar.x, windowHeight - bar.h - barBorder , bar.w, bar.h);
  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen.
  
  
  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?
  ball.x += ball.s.x;
  ball.y += ball.s.y;
  ellipse(ball.x, ball.y, ball.size, ball.size);

  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)
  if (ball.x > width - 10 || ball.x <= 0) {
    ball.s.x *= -1
  }

  if (ball.y < 0) { //ball.y > height || 
    ball.s.y *= -1
  }
  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren

  if (ball.y > height - bar.h - ball.size/2 && ball.x > bar.x && ball.x < bar.x + bar.w){
    ball.s.y *= -1
    ball.s.x *= -1
  }

  

}
