function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('wheat');
  rect(0,400,450,100);
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,300,100,125);

  fill('gray');
  triangle(100,300,200,300,150,225)
  
  noStroke();
  rect(110,375,30,50);

  fill('khaki');
  ellipse (350,100,150);

  fill('sienna');
  rect(300,275,40,150);
  fill('olive');
 
  ellipse (320,250,100,175);

}
