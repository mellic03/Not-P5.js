/**
 *  Accepts these formats:
 *  - grayscale(amount)
 *  - rgb(r, g, b)
 *  - rgba(r, g, b, a)
 * @param {Array} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @returns {void} undefined
*/
function background(r:number, g:number = r, b:number = r, a:number = 1) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = fill_color;
}

function fill(r:number = 0, g:number = r, b:number = r, a = 255) {
    // Set global fill color
    fill_color = `rgba(${r}, ${g}, ${b}, ${a})`;
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
}

function noFill() {
    ctx.fillStyle = `rgba(0, 0, 0, 1)`;
}

function stroke(r:number = 0, g:number = r, b:number = r, a:number = 255) {
    no_stroke = false;
    // Set global stroke color
    stroke_color = `rgba(${r}, ${g}, ${b}, ${a})`;
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
}

function noStroke() {
    no_stroke = true;
}

function strokeWeight(w:number) {
    ctx.lineWidth = w;
}