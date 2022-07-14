// Canvas
var width;
var height;
var canvas;
var ctx;
var frame_rate = 60;
// Translation
// Keep track of how much the user has translated the canvas.
// Translate by negative this amount at the end of the loop.
var translated_x = 0;
var translated_y = 0;
// Rotation
// Keep track of how much the user has rotated the canvas.
// Rotate by negative this amount at the end of the loop.
var rotated = 0;
// Mouse position
var mouseX = 0;
var mouseY = 0;
// Text
var current_font_size = 20;
var current_font = "Arial";
// Shapes
// rect_mode
var CENTER = 'CENTER';
var CORNER = 'CORNER';
var CORNERS = 'CORNERS';
var rect_modes = [CENTER, CORNER, CORNERS];
var rect_mode = CORNER;
// ellipse_mode
var ellipse_modes = [CENTER, CORNER, CORNERS];
var ellipse_mode = CENTER;
// Color
var stroke_color = "rgba(0, 0, 0, 1)";
var stroke_weight = 1;
var no_stroke = false;
var fill_color = "rgba(255, 255, 255, 1)";
var no_fill = false;
// Math
var DEGREES = 'DEGREES';
var RADIANS = 'RADIANS';
var angle_modes = [DEGREES, RADIANS];
var angle_mode = RADIANS; // Defualt angleMode is RADIANS.
// Number changed by angleMode().
// In RADIANS mode it will be = 1.
// Angles are multiplied by this when doing trig functions.
var deg_to_rad = 1;
var rad_to_deg = 1;
var PI = Math.PI;
// SHAPE GEOMETRIES
function arc(x, y, width, height, start, end, counterclockwise) {
    if (counterclockwise === void 0) { counterclockwise = false; }
    if (no_fill && no_stroke) {
        return (0);
    }
    beginShape();
    height = height / 2;
    width = width / 2;
    translate(x, y);
    ctx.scale(1, height / width);
    ctx.moveTo(0, 0);
    if (angle_mode == RADIANS) {
        ctx.arc(0, 0, width, start, end);
    }
    else if (angle_mode == DEGREES) {
        ctx.arc(0, 0, width, start * (PI / 180), end * (PI / 180));
    }
    ctx.scale(1, width / height);
    translate(-x, -y);
    endShape();
}
/**
 * Draws a rectangle at position x, y with width w and height h.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @param {number} w - width.
 * @param {number} h - height.
 * @returns {void} nothing
 */
function rect(x, y, w, h) {
    if (no_fill && no_stroke) {
        return (0);
    }
    beginShape();
    if (rect_mode == "CORNER") {
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
    }
    else if (rect_mode == "CENTER") {
        ctx.moveTo(x - w / 2, y - h / 2);
        ctx.lineTo(x + w / 2, y - h / 2);
        ctx.lineTo(x + w / 2, y + h / 2);
        ctx.lineTo(x - w / 2, y + h / 2);
    }
    else if (rect_mode == "CORNERS") {
        ctx.moveTo(x, y);
        ctx.lineTo(w, y);
        ctx.lineTo(w, h);
        ctx.lineTo(x, h);
    }
    endShape();
}
/**
 * Draws a square at position x, y with width w and border radius r.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @param {number} w - width.
 * @param {number} r - border radius.
 * @returns {void} nothing
 */
function square(x, y, w, r) {
    if (r === void 0) { r = 0; }
    // If both no_fill and no_stroke, shape is invisible so don't draw.
    if (no_fill && no_stroke) {
        return (0);
    }
    beginShape();
    if (rect_mode == 'CORNER') {
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + w, r);
        ctx.arcTo(x + w, y + w, x, y + w, r);
        ctx.arcTo(x, y + w, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
    }
    else if (rect_mode == 'CENTER') {
        ctx.moveTo(x - w / 2 + r, y - w / 2);
        ctx.arcTo(x - w / 2 + w, y - w / 2, x - w / 2 + w, y - w / 2 + w, r);
        ctx.arcTo(x - w / 2 + w, y - w / 2 + w, x - w / 2, y - w / 2 + w, r);
        ctx.arcTo(x - w / 2, y - w / 2 + w, x - w / 2, y - w / 2, r);
        ctx.arcTo(x - w / 2, y - w / 2, x - w / 2 + w, y - w / 2, r);
    }
    endShape();
}
function quad(x1, y1, x2, y2, x3, y3, x4, y4) {
    // If both no_fill and no_stroke, shape is invisible so don't draw.
    if (no_fill && no_stroke) {
        return (0);
    }
    beginShape();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x1, y1);
    endShape();
}
/**
 * Draws a circle at position x, y with radius r.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @param {number} r - radius.
 */
function circle(x, y, r) {
    // If both no_fill and no_stroke, shape is invisible so don't draw.
    if (no_fill && no_stroke) {
        return (0);
    }
    beginShape();
    if (ellipse_mode == "CENTER") {
        ctx.arc(x, y, r / 2, 0, 2 * Math.PI);
    }
    else if (ellipse_mode == "CENTER") {
        ctx.arc(x, y, r / 2, 0, 2 * Math.PI);
    }
    else if (ellipse_mode == "CENTER") {
        ctx.arc(x, y, r / 2, 0, 2 * Math.PI);
    }
    endShape();
}
function ellipse(x, y, w, h) {
    if (h === void 0) { h = w; }
    beginShape();
    if (ellipse_mode == "CENTER") {
        ctx.beginPath();
        ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
    }
    else if (ellipse_mode == "CENTER") {
        ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
    }
    else if (ellipse_mode == "CENTER") {
        ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
    }
    endShape();
}
/**
 * Draws a line between (x1, y1) and (x2, y2).
 * @param {number} x1 - First x coordinate.
 * @param {number} y1 - First y coordinate.
 * @param {number} x2 - Second x coordinate.
 * @param {number} y2 - Second y coordinate.
 * @returns {void} undefined
 */
function line(x1, y1, x2, y2) {
    beginShape();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    endShape();
}
function triangle(x1, y1, x2, y2, x3, y3) {
    beginShape();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x1, y1);
    endShape();
}
// SHAPE CONFIGURATIONS
function rectMode(mode) {
    if (mode == CORNER || mode == CORNERS || mode == CENTER) {
        rect_mode = mode;
    }
    else {
        console.log(mode + " is not a valid value for rectMode()");
    }
}
function ellipseMode(mode) {
    if (mode == CENTER || mode == CORNER || mode == CORNERS) {
        ellipse_mode = mode;
    }
    else {
        console.log(mode + " is not a valid value for ellipseMode()");
    }
}
function beginShape() {
    ctx.beginPath();
}
function endShape() {
    ctx.closePath();
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
function background(r, g, b, a) {
    if (g === void 0) { g = r; }
    if (b === void 0) { b = r; }
    if (a === void 0) { a = 1; }
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = fill_color;
}
function fill(r, g, b, a) {
    if (g === void 0) { g = r; }
    if (b === void 0) { b = r; }
    if (a === void 0) { a = 255; }
    if (typeof r === "string") {
        ctx.fillStyle = r;
    }
    else {
        // Set global fill color
        fill_color = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
        ctx.fillStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a / 255, ")");
    }
}
function noFill() {
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
}
function stroke(r, g, b, a) {
    if (r === void 0) { r = 0; }
    if (g === void 0) { g = r; }
    if (b === void 0) { b = r; }
    if (a === void 0) { a = 255; }
    if (typeof r === "string") {
        ctx.strokeStyle = r;
    }
    no_stroke = false;
    // Set global stroke color
    stroke_color = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    ctx.strokeStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a / 255, ")");
}
function noStroke() {
    no_stroke = true;
}
function strokeWeight(w) {
    ctx.lineWidth = w;
}
var Vector = /** @class */ (function () {
    function Vector(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
        x = x;
        y = y;
        z = z;
    }
    Vector.prototype.toString = function () {
        return ("[" + this.x.toString() + ", " + this.y.toString() + ", " + this.z.toString() + "]");
    };
    /** Set a vectors x, y and z coordinates
     *
     * @returns nothing
     */
    Vector.prototype.set = function (x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    };
    /** Returns a copy of a vector
     *
     *
     * @returns Vector
     */
    Vector.prototype.copy = function (vect) {
        return (vect);
    };
    /** Addition of vectors
     *
     * @returns nothing
     */
    Vector.prototype.add = function (vect) {
        this.x += vect.x;
        this.y += vect.y;
        this.z += vect.z;
    };
    /** Subtraction of vectors
     * - v1.sub(x, y, z)
     * - v1.sub(v2);
     * @returns nothing
     */
    Vector.prototype.sub = function (vect, y, z) {
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (typeof vect === 'number') {
            this.x -= vect;
            this.y -= y;
            this.z -= z;
        }
        else {
            this.x -= vect.x;
            this.y -= vect.y;
            this.z -= vect.z;
        }
    };
    /** Multiplication of vector by a scalar
     *
     * @returns nothing
     */
    Vector.prototype.mult = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    };
    /** Division of vector by a scalar
     *
     * @returns nothing
     */
    Vector.prototype.div = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
    };
    /** Return magnitude of a vector
     *
     * @returns number
     */
    Vector.prototype.mag = function () {
        return (Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2))));
    };
    /** Return squared magnitude of a vector
     *
     * @returns number
     */
    Vector.prototype.magSq = function () {
        return (Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };
    /** Return dot product of two vectors
     *
     * v1.dot(v2);
     * @returns vector
     */
    Vector.prototype.dot = function (vect) {
    };
    Vector.prototype.cross = function () {
    };
    Vector.prototype.dist = function () {
    };
    return Vector;
}());
function createVector(x, y, z) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (z === void 0) { z = 0; }
    return (new Vector(x, y, z));
}
/** Returns a random float between min and max
 *
 * @param min
 * @param max
 *
 * @returns float
 */
function random(min, max) {
    // If no arguments, return float between 0 and 1 exclusive of 1.
    if (min == undefined) {
        return (Math.random());
    }
    // If one argument, return float between 0 and the argument.
    else if (max == undefined) {
        return (Math.random() * min);
    }
    // If two arguments, return float between the first and second.
    else {
        return (Math.random() * (max - min) + min);
    }
}
function sqrt(x) {
    return (Math.sqrt(x));
}
function sin(angle) {
    return (Math.sin(angle * deg_to_rad));
}
function cos(angle) {
    return (Math.cos(angle * deg_to_rad));
}
function tan(angle) {
    return (Math.tan(angle * deg_to_rad));
}
function atan2(x, y) {
    return (Math.atan2(x, y) * rad_to_deg);
}
function angleMode(mode) {
    angle_mode = mode;
    if (mode == DEGREES) {
        deg_to_rad = (PI / 180);
        rad_to_deg = (180 / PI);
    }
    else if (mode == RADIANS) {
        deg_to_rad = 1;
        rad_to_deg = 1;
    }
}
function frameRate(rate) {
    frame_rate = rate;
}
/***
 *
 * @param txt string
 * @param x x coordinate
 * @param y y coordinate
 */
function text(txt, x, y) {
    if (txt === void 0) { txt = ""; }
    ctx.fillText(txt, x, y);
}
/**
 *
 * @param size font size (px)
 */
function textSize(size) {
    current_font_size = size;
    ctx.font = "".concat(size, "px ").concat(current_font);
}
/** Shift the canvas
 *
 * @param x amount to shift the canvas in the x direction
 * @param y amount to shift the canvas in the y direction
 *
 */
function translate(x, y) {
    translated_x += x;
    translated_y += y;
    ctx.translate(x, y);
}
/** Rotate the canvas
 *
 * @param r amount (degrees for DEGREES mode, radians for RADIANS mode)
 *
 */
function rotate(r) {
    rotated += r;
    if (angle_mode == DEGREES) {
        ctx.rotate(r * (PI / 180));
    }
    else if (angle_mode == RADIANS) {
        ctx.rotate(r);
    }
}
function createCanvas(w, h) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    width = canvas.width = w;
    height = canvas.height = h;
    // Track mouse position.
    document.addEventListener('mousemove', function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
    // Set default values.
    ctx.fillStyle = fill_color;
    ctx.strokeStyle = stroke_color;
    ctx.lineWidth = stroke_weight;
}
var draw;
var setup;
// Execute setup function
setup();
function renderLoop() {
    // Draw
    draw();
    // Reset rotation.
    rotate(-rotated);
    // Reset translation.
    translate(-translated_x, -translated_y);
    setTimeout(function () {
        window.requestAnimationFrame(renderLoop);
    }, 1000 / frame_rate);
}
window.requestAnimationFrame(renderLoop);
