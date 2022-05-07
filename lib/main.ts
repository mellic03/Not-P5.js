let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

function createCanvas(w:number, h:number) {
    // Set global width/height
    width = w;
    height = h;
    
    let container = document.createElement('div');
    container.id = "container";

    canvas = document.createElement('canvas');
    canvas.id = "canvas2";

    canvas.width = w;
    canvas.height = h;
    container.appendChild(canvas);

    document.body.appendChild(container);

    ctx = canvas.getContext("2d");
}

// Setup function
setup();

// Draw function
function gameLoop() {
    draw();
    window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
