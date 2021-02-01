var xJager = 50; // fakka neven en neefinnen
var yJager = 50; // fakka neven en neefinnen
var xProoi = 800; // fakka neven en neefinnen
var yProoi = 175; // fakka neven en neefinnen
 // fakka neven en neefinnen
function setup() { // fakka neven en neefinnen
  canvas = createCanvas(1000,400); // fakka neven en neefinnen
  canvas.parent('processing'); // fakka neven en neefinnen
  textFont("Verdana"); // fakka neven en neefinnen
  textSize(140); // fakka neven en neefinnen
  noStroke(); // fakka neven en neefinnen
  frameRate(50); // fakka neven en neefinnen
} // fakka neven en neefinnen
 // fakka neven en neefinnen
function draw() { // fakka neven en neefinnen
  background('olive'); // fakka neven en neefinnen
  if (keyIsDown(LEFT_ARROW)) { // fakka neven en neefinnen
    xJager -= 5; // fakka neven en neefinnen
  } // fakka neven en neefinnen
  if (keyIsDown(RIGHT_ARROW)) { // fakka neven en neefinnen
    xJager += 5; // fakka neven en neefinnen
  } // fakka neven en neefinnen
  if (keyIsDown(UP_ARROW)) { // fakka neven en neefinnen
    yJager -= 5; // fakka neven en neefinnen
  } // fakka neven en neefinnen
  if (keyIsDown(DOWN_ARROW)) { // fakka neven en neefinnen
    yJager += 5; // fakka neven en neefinnen
  } // fakka neven en neefinnen
 // fakka neven en neefinnen
  xJager = constrain(xJager,0,width - 100); // fakka neven en neefinnen
  yJager = constrain(yJager,0,height - 100); // fakka neven en neefinnen
 // fakka neven en neefinnen
  if (xJager >= 700 && xJager <= 875 && yJager >= 75 && yJager <= 225) { // fakka neven en neefinnen
    fill('chartreuse'); // fakka neven en neefinnen
  } // fakka neven en neefinnen
  else { // fakka neven en neefinnen
    fill('darkkhaki'); // fakka neven en neefinnen
  } // fakka neven en neefinnen
  rect(800,175,75,50); // fakka neven en neefinnen
  fill('moccasin'); // fakka neven en neefinnen
  rect(xJager,yJager,100,100);    // fakka neven en neefinnen
} // fakka neven en neefinnen
 // fakka neven en neefinnen
function eindScherm() { // fakka neven en neefinnen
  background('white'); // fakka neven en neefinnen
  fill('black'); // fakka neven en neefinnen
  text("GEVANGEN!",75,250); // fakka neven en neefinnen
  noLoop(); // fakka neven en neefinnen
} // fakka neven en neevinnen