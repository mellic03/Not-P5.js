
/***
 * 
 * @param txt string
 * @param x x coordinate
 * @param y y coordinate
 */
function text(txt:string = "", x:number, y:number) {
    ctx.fillText(txt, x, y);
}

/**
 * 
 * @param size font size (px)
 */
function textSize(size:number) {
    current_font_size = size;
    ctx.font = `${size}px ${current_font}`
}


/** Shift the canvas
 * 
 * @param x amount to shift the canvas in the x direction
 * @param y amount to shift the canvas in the y direction
 * 
 */
function translate(x:number, y:number) {
    translated_x += x;
    translated_y += y;
    ctx.translate(x, y);
}


/** Rotate the canvas
 * 
 * @param r amount (degrees for DEGREES mode, radians for RADIANS mode)
 * 
 */
function rotate(r:number) {
    rotated += r;
    if (angle_mode == DEGREES) {
        ctx.rotate(r * (PI/180));
    }
    else if (angle_mode == RADIANS) {
        ctx.rotate(r);
    }
}