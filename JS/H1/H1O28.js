var aantal = 5;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background('lavender');
  fill('black');
  text("aantal = " + aantal,10,20);    
  translate(225,225);
  
  // tekenen rode bladeren
  
  fill(0,0,0);

   for (var s = 0;s < aantal;s++) {
    ellipse(0,0,400,50);
    rotate(360 / aantal);
  }
  
  // gele vulkleur

  fill(255, 255, 255);
  for (var s = 0;s < aantal;s++) {
  rect(0,0,75,75);
  rotate(360 / aantal);
  }

  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }   
}