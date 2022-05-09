function setup()
{
  createCanvas(1000, 1000);
  frameRate(60);
}


let t = 1;

function draw()
{
  background(0, 0, 0);
  rectMode(CENTER);
  cx = width / 2;
  cy = height / 2;

  fill(200, 200, 200);
  rect(cx, cy, 0.9*width, 0.9*height, 20);
  
  noStroke();
  fill(88, 146, 184);
  rect(cx, cy, 0.8*width, 0.8*height);

  let lineStartX = 0.15 * width;
  let lineEndX = 0.85 * width;
  let lineStartY = 0.15 * height;
  let lineEndY = 0.85 * height;

  stroke(0);
  for (let y = lineStartY; y <= lineEndY; y+=70)
  {
    line(lineStartX, y, lineEndX, y);
  }

  for (let x = lineStartX; x <= lineEndX; x+=70)
  {
    line(x, lineStartY, x, lineEndY);
  }
  
  translate(width/2, height/2);
  noStroke();
  fill(255);
  
  let x = 345 * cos(t/3);
  let y = 345 * sin(t);

  ellipse(x, y, 10);
  
  t+=0.02;
}

