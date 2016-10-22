// for red, green, and blue color values
var r, g, b;
// var star

function setup() {
  createCanvas(720, 400);
  background(127);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);

  translate(width/2, height/2);
  createStar()
}

function draw() {
  // background(127);
  // // Draw a circle
  // strokeWeight(2);
  // stroke(r, g, b);
  // fill(r, g, b, 127);
  // ellipse(360, 200, 200, 200);
}

function createStar() {
  //overlap 2 triangles

  push();
    // translate(-100, -100);
    makeTriangle();
  pop();

  // debugger

  // push();
  //   rotate(PI);
  //   translate(0, -50);
  //   makeTriangle();
  // pop();
}

function makeTriangle() {
  triangle(100, 100, 0, 0, 200, 0);
}
