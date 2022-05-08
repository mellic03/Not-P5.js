let v1;
let v2;

function setup() {
    createCanvas(500, 500);
    v1 = createVector(100, 100);
    console.log(v1)
    v1.div(2);
    console.log(v1)
}

function draw() {
    backGround(200);
    fill(0, 255, 0);
    noStroke();
    rect(100, 100, 100, 100);
}