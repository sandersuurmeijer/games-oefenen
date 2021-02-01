var xJOS = 350;
var yJOS = 350;
var bewegingx = 1;
var bewegingy = 1;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
}

function draw() {
  background('lavender');
  fill('black');
  text("mouseX:" + round(mouseX) + " mouseY:" + round(mouseY),10,20);
  text("xJOS:" + xJOS + " yJOS:" + yJOS,300,20);
  translate(xJOS,yJOS);
  
  // in de volgende regels wordt JOS getekend

  push();
  noStroke();
  fill('indianred');
  ellipse(0,0,150);
  fill('slategray');
  ellipse(-20,-30,50);
  ellipse(20,-30,50);
  fill('white');
  ellipse(-20,-25,20,40);
  ellipse(20,-25,20,40);
  fill('orange');
  ellipse(0,10,50);
  stroke('slategray');
  strokeWeight(10);
  fill('white');
  arc(0, 40, 80, 40, 0, PI, CHORD);
  pop();
  // einde tekenen JOS

  if(xJOS <= 0){
  bewegingy = random(0,10)
  }

    if(yJOS <= 0){
  bewegingx = random(0,10);
  }

  if(xJOS <= 0 || xJOS >= 450){
    bewegingx = bewegingx*-1;
  }
  xJOS -= bewegingx;
  
  if(yJOS <= 0 || yJOS >= 450){
    bewegingy = bewegingy*-1;
  }
  yJOS -= bewegingy;
}