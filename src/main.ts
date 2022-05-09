function createCanvas(w:number, h:number) {
    canvas = document.getElementById("canvas")
    ctx =  canvas.getContext('2d');

    width = canvas.width = w;
    height = canvas.height = h;

    // Set default values.

    ctx.fillStyle = fill_color;
    ctx.strokeStyle = stroke_color;
    ctx.lineWidth = stroke_weight;
}

let draw:Function;
let setup:Function;

// Execute setup function
setup();

function renderLoop() {

    // Draw
    draw();

    // Reset rotation.
    rotate(-rotated);

    // Reset translation.
    translate(-translated_x, -translated_y);

    setTimeout( function() {
        window.requestAnimationFrame( renderLoop );
    }, 1000 / frame_rate );
}

window.requestAnimationFrame(renderLoop);