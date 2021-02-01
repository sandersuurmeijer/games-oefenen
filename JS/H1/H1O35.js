var aantalLagen = 5;
var breedte = 90;
var hoogte;
var laag;
var aantalStenen;

function setup() {
  hoogte = breedte / 2;
  canvas = createCanvas(aantalLagen*breedte + 1,aantalLagen*hoogte + 1);

  canvas.parent('processing');
  noLoop();
  background('silver');
  fill('lightslategray');
  stroke('darkslategray');
}

function draw() {
  tekenRij(laag);
}

function tekenRij(aantalStenen) {
  inspringen = 2*breedte;
  aantalStenen = 1;
  push();
  translate(inspringen,0);
  inspringen = - (0.5*breedte);
  for (laag = aantalLagen; laag > 0; laag--){
    for (var steen = 0;steen < aantalStenen;steen++) {
    rect(breedte*steen,0,breedte,hoogte);
    }
    aantalStenen = aantalStenen + 1;
     
    translate (inspringen,hoogte);
  }
  pop();
}