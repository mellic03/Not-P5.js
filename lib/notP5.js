const canvas = document.querySelector('.MainCanvas');
const ctx = canvas.getContext('2d');
let width;
let height;

// setup function
setup();

function createCanvas(w, h) {
    width = canvas.width = w;
    height = canvas.height = h;
}

// the "draw" function
function gameLoop() {
    draw();
    window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);
