// Save Score
var score = 0

// Ball position and speed
let ball = { x: 1, y: 1, s: {x: 2 , y: 5} } //Ball Object s for Speed
let d = 100;

// Bar Definition
let bar = {x: 20}
let lengthBar;

function playPong() {
  // Background
  background(0);
  fill(255);

  // Score
  textSize(24);
  text("Score: " + score, 10, 25);

  drawBar(bar.x)
  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen.

  ball.x += ball.s.x;
  ellipse(ball.x, windowHeight / 2, 20, 20);
  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?

  if (ball.x > windowWidth - 10) {
    ball.s.x *= -1;
  }
  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren
}

function drawBar(xPos) {
  rect(xPos, windowHeight - 15, 90, 15);
}