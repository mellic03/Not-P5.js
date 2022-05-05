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

function strokeWeight(w) {
    ctx.lineWidth = w;
}
