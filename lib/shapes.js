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

function circle(x, y, r) {
    if (ellipse_mode == "CENTER") {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
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
    else {
        console.log(mode + " is not a valid value for rectMode()");
    }
}

function ellipseMode(mode) {
    if (mode == 'CENTER' || mode == 'CORNER') {
        rect_mode = mode;
    }
    else {
        console.log(mode + " is not a valid value for ellipseMode()");
    }
}