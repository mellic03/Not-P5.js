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
function backGround(r:number, g:number = r, b:number = r, a:number = 1) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
    ctx.fillRect(0, 0, width, height);
    fill(fill_color[0], fill_color[1], fill_color[2]);
}

function fill(r:number = 0, g:number = undefined, b:number = undefined, a = 1) {
    // Set global fill color
    fill_color = [r, g, b, a];

    if (b != undefined) {
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    else {
        ctx.fillStyle = `rgba(${r}, 0, 0, 1)`;
    }
}

function noFill() {
    ctx.fillStyle = `rgba(0, 0, 0, 1)`;
}

function stroke(r:number = 0, g:number = r, b:number = r, a:number = 1) {
    no_stroke = false;
    // Set global stroke color
    stroke_color = [r, g, b, a];
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
}

function noStroke() {
    no_stroke = true;
}

function strokeWeight(w:number) {
    ctx.lineWidth = w;
}