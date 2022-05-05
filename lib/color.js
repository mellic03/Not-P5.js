function backGround(r, g, b) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
    ctx.fillRect(0, 0, width, height);
    fill(fill_color[0], fill_color[1], fill_color[2]);
}

function fill(r = 0, g = 0, b = 0, a = 1) {
    // Set global fill color
    fill_color = [r, g, b, a];

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;

}

function noFill() {
    ctx.fillStyle = `rgba(0, 0, 0, 0)`;
}

function stroke(r = 0, g = 0, b = 0, a = 1) {
    // Set global stroke color
    stroke_color = [r, g, b, a];
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
}

function strokeWeight(w) {
    ctx.lineWidth = w;
}

function noStroke() {
    no_stroke = true;
}