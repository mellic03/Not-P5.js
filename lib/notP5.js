const canvas = document.querySelector('.MainCanvas');
const ctx = canvas.getContext('2d');
let width;
let height;

// setup function
setup();

// Default values
let rect_mode = 'CORNER';

function createCanvas(w, h) {
    width = canvas.width = w;
    height = canvas.height = h;
}


// Shapes
function rect(x, y, w, h) {
    if (rect_mode == 'CORNER') {
        ctx.fillRect(x, y, w, h);
    }
    else if (rect_mode == 'CORNERS') {
        ctx.fillRect(x, y, w-x, h-y)
    }
    else if (rect_mode == 'CENTER') {
        ctx.fillRect(x-w/2, y-h/2, w, h);
    }
}

function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}


// Shape settings
function rectMode(mode) {
    if (mode == 'CORNER' || mode == 'CORNERS' || mode == 'CENTER') {
        rect_mode = mode;
    }
}


// fill/color 
function backGround(r, g, b) {
    ctx.clearRect(0, 0, width, height);
    fill(r, g, b);
    ctx.fillRect(0, 0, width, height);
}

function fill(r, g, b) {
    if (r != null && g != null && b != null) {
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    }
    else if (r != null && g == null && b == null) {
        ctx.fillStyle = `rgb(${r}, ${r}, ${r})`;
    }
}

function stroke(r, g, b) {
    if (r != null && g != null && b != null) {
        ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    }
    else if (r != null && g == null && b == null) {
        ctx.strokeStyle = `rgb(${r}, ${r}, ${r})`;
    }
}

// the "draw" function
function gameLoop() {
    draw();
    window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);
