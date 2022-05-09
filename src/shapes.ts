// SHAPE GEOMETRIES

function arc(x:number, y:number, width:number, height:number, start:number, end:number, counterclockwise:boolean = false) {
    
    height = height / 2;
    width = width / 2;

    translate(x, y);
    ctx.scale(1, height/width);
    ctx.beginPath();
    ctx.moveTo(0, 0);

    if (angle_mode == RADIANS) {
        ctx.arc(0, 0, width, start, end);
    }
    else if (angle_mode == DEGREES) {
        ctx.arc(0, 0, width, start * (PI/180), end * (PI/180));
    }

    ctx.closePath();

    if (!no_fill && !no_stroke) {
        ctx.fill();
        ctx.stroke();
    }
    else if (no_fill && !no_stroke) {
        ctx.stroke();
    }
    else if (!no_fill && no_stroke) {
        ctx.fill();
    }
    ctx.scale(1, width/height);
    translate(-x, -y);
}

/**
 * Draws a rectangle at position x, y with width w and height h.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @param {number} w - width.
 * @param {number} h - height.
 * @returns {void} nothing
 */
function rect(x:number, y:number, w:number, h:number) {
    ctx.beginPath();

    if (rect_mode == "CORNER") {
        ctx.moveTo(x, y);
        ctx.lineTo(x+w, y);
        ctx.lineTo(x+w, y+h);
        ctx.lineTo(x, y+h);
    }
    else if (rect_mode == "CENTER") {
        ctx.moveTo(x-w/2, y-h/2);
        ctx.lineTo(x+w/2, y-h/2);
        ctx.lineTo(x+w/2, y+h/2);
        ctx.lineTo(x-w/2, y+h/2);
    }
    else if (rect_mode == "CORNERS") {
        ctx.moveTo(x, y);
        ctx.lineTo(w, y); 
        ctx.lineTo(w, h); 
        ctx.lineTo(x, h); 
    }

    ctx.closePath();

    if (!no_fill && !no_stroke) {
        ctx.fill();
        ctx.stroke();
    }
    else if (no_fill && !no_stroke) {
        ctx.stroke();
    }
    else if (!no_fill && no_stroke) {
        ctx.fill();
    }

}

/**
 * Draws a square at position x, y with width w and border radius r.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @param {number} w - width.
 * @param {number} r - border radius.
 * @returns {void} nothing
 */
function square(x:number, y:number, w:number, r:number = 0) {
    if (rect_mode == 'CORNER') {
        ctx.beginPath();
        ctx.moveTo(x+r, y);
        ctx.arcTo(x+w, y,   x+w, y+w, r);
        ctx.arcTo(x+w, y+w, x,   y+w, r);
        ctx.arcTo(x,   y+w, x,   y,   r);
        ctx.arcTo(x,   y,   x+w, y,   r);
        ctx.stroke();
    }
    else if (rect_mode == 'CENTER') {
        ctx.beginPath();
        ctx.moveTo(x-w/2+r, y-w/2);
        ctx.arcTo(x-w/2+w, y-w/2,   x-w/2+w, y-w/2+w, r);
        ctx.arcTo(x-w/2+w, y-w/2+w, x-w/2,   y-w/2+w, r);
        ctx.arcTo(x-w/2,   y-w/2+w, x-w/2,   y-w/2,   r);
        ctx.arcTo(x-w/2,   y-w/2,   x-w/2+w, y-w/2,   r);
        ctx.fill();
        ctx.stroke();
    }
}

function quad(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number, x4:number, y4:number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x1, y1);
    ctx.closePath
    
    if (!no_fill && !no_stroke) {
        ctx.stroke();
        ctx.fill();
    }
    else if (no_fill && !no_stroke) {
        ctx.stroke();
    }
    else if (!no_fill && no_stroke) {
        ctx.fill();
    }
}

/**
 * Draws a circle at position x, y with radius r.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @param {number} r - radius.
 */
function circle(x:number, y:number, r:number) {
    if (!no_fill && !no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.arc(x, y, r/2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
    else if (no_fill && !no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.arc(x, y, r/2, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    else if (!no_fill && no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.arc(x, y, r/2, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

function ellipse(x:number, y:number, w:number, h:number = w) {
    if (!no_fill && !no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.ellipse(x, y, w/2, h/2, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
    else if (no_fill && !no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.ellipse(x, y, w/2, h/2, 0, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    else if (!no_fill && no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.ellipse(x, y, w/2, h/2, 0, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

/**
 * Draws a line between (x1, y1) and (x2, y2).
 * @param {number} x1 - First x coordinate.
 * @param {number} y1 - First y coordinate.
 * @param {number} x2 - Second x coordinate.
 * @param {number} y2 - Second y coordinate.
 * @returns {void} undefined
 */
function line(x1:number, y1:number, x2:number, y2:number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function triangle(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x1, y1);
    
    if (!no_fill && !no_stroke) {
        ctx.fill();
        ctx.stroke();
    }
    else if (no_fill && !no_stroke) {
        ctx.stroke();
    }
    else if (!no_fill && no_stroke) {
        ctx.fill();
    }
}

// SHAPE CONFIGURATIONS

function rectMode(mode:string) {
    if (mode == CORNER || mode == CORNERS || mode == CENTER) {
        rect_mode = mode;
    }
    else {
        console.log(mode + " is not a valid value for rectMode()");
    }
}

function ellipseMode(mode:string) {
    if (mode == 'CENTER' || mode == 'CORNER') {
        rect_mode = mode;
    }
    else {
        console.log(mode + " is not a valid value for ellipseMode()");
    }
}

