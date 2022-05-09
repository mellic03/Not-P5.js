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
var ellipse_mode = 'CENTER';
// Color
var stroke_color = "rgba(0, 0, 0, 1)";
var stroke_weight = 1;
var no_stroke = false;
var fill_color = "rgba(0, 0, 0, 1)";
var no_fill = false;
// Math
var DEGREES = 'DEGREES';
var RADIANS = 'RADIANS';
var angle_modes = [DEGREES, RADIANS];
var angle_mode = RADIANS; // Defualt angleMode is RADIANS.
var PI = Math.PI;
// SHAPE GEOMETRIES
/**
 * Draws a rectangle at position x, y with width w and height h.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @param {number} w - width.
 * @param {number} h - height.
 * @returns {void} undefined
 */
function rect(x, y, w, h) {
    if (!no_fill && !no_stroke) {
        if (rect_mode == 'CORNER') {
            ctx.fillRect(x, y, w, h);
            ctx.strokeRect(x, y, w, h);
        }
        else if (rect_mode == 'CORNERS') {
            ctx.fillRect(x, y, w - x, h - y);
            ctx.strokeRect(x, y, w - x, h - y);
        }
        else if (rect_mode == 'CENTER') {
            ctx.fillRect(x - w / 2, y - h / 2, w, h);
            ctx.strokeRect(x - w / 2, y - h / 2, w, h);
        }
    }
    else if (no_fill && !no_stroke) {
        if (rect_mode == 'CORNER') {
            ctx.strokeRect(x, y, w, h);
        }
        else if (rect_mode == 'CORNERS') {
            ctx.strokeRect(x, y, w - x, h - y);
        }
        else if (rect_mode == 'CENTER') {
            ctx.strokeRect(x - w / 2, y - h / 2, w, h);
        }
    }
    else if (!no_fill && no_stroke) {
        if (rect_mode == 'CORNER') {
            ctx.fillRect(x, y, w, h);
        }
        else if (rect_mode == 'CORNERS') {
            ctx.fillRect(x, y, w - x, h - y);
        }
        else if (rect_mode == 'CENTER') {
            ctx.fillRect(x - w / 2, y - h / 2, w, h);
        }
    }
}
function square(x, y, w, r) {
    if (r === void 0) { r = 0; }
    if (rect_mode == 'CORNER') {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + w, r);
        ctx.arcTo(x + w, y + w, x, y + w, r);
        ctx.arcTo(x, y + w, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.stroke();
    }
    else if (rect_mode == 'CENTER') {
        ctx.beginPath();
        ctx.moveTo(x - w / 2 + r, y - w / 2);
        ctx.arcTo(x - w / 2 + w, y - w / 2, x - w / 2 + w, y - w / 2 + w, r);
        ctx.arcTo(x - w / 2 + w, y - w / 2 + w, x - w / 2, y - w / 2 + w, r);
        ctx.arcTo(x - w / 2, y - w / 2 + w, x - w / 2, y - w / 2, r);
        ctx.arcTo(x - w / 2, y - w / 2, x - w / 2 + w, y - w / 2, r);
        ctx.fill();
        ctx.stroke();
    }
}
/**
 * Draws a circle at position x, y with radius r.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @param {number} r - radius.
 */
function circle(x, y, r) {
    if (!no_fill && !no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.arc(x, y, r / 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
    else if (no_fill && !no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.arc(x, y, r / 2, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    else if (!no_fill && no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.arc(x, y, r / 2, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}
function ellipse(x, y, w, h) {
    if (h === void 0) { h = w; }
    if (!no_fill && !no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
    else if (no_fill && !no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    else if (!no_fill && no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
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
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function triangle(x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x1, y1);
    ctx.stroke();
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
    if (mode == 'CENTER' || mode == 'CORNER') {
        rect_mode = mode;
    }
    else {
        console.log(mode + " is not a valid value for ellipseMode()");
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
    if (r === void 0) { r = 0; }
    if (g === void 0) { g = r; }
    if (b === void 0) { b = r; }
    if (a === void 0) { a = 255; }
    // Set global fill color
    fill_color = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    ctx.fillStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a / 255, ")");
}
function noFill() {
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
}
function stroke(r, g, b, a) {
    if (r === void 0) { r = 0; }
    if (g === void 0) { g = r; }
    if (b === void 0) { b = r; }
    if (a === void 0) { a = 255; }
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
 * ```ts
 * console.log(isInlineTag('{@link}'));
 * console.log(isInlineTag('@internal'));
 * ```
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
    if (angle_mode == DEGREES) {
        return (Math.sin(angle * (PI / 180)));
    }
    else if (angle_mode == RADIANS) {
        return (Math.sin(angle));
    }
}
function cos(angle) {
    if (angle_mode == DEGREES) {
        return (Math.cos(angle * (PI / 180)));
    }
    else if (angle_mode == RADIANS) {
        return (Math.cos(angle));
    }
}
function tan(angle) {
    if (angle_mode == DEGREES) {
        return (Math.tan(angle * (PI / 180)));
    }
    else if (angle_mode == RADIANS) {
        return (Math.tan(angle));
    }
}
function atan2(x, y) {
    if (angle_mode == DEGREES) {
        return (Math.atan2(x, y) * (180 / PI));
    }
    else if (angle_mode == RADIANS) {
        return (Math.atan2(x, y));
    }
}
function angleMode(mode) {
    var i = angle_modes === null || angle_modes === void 0 ? void 0 : angle_modes.indexOf(mode);
    angle_mode = angle_modes[i];
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
function createCanvas(w, h) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    width = canvas.width = w;
    height = canvas.height = h;
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
    // Reset translation.
    translate(-translated_x, -translated_y);
    setTimeout(function () {
        window.requestAnimationFrame(renderLoop);
    }, 1000 / frame_rate);
}
window.requestAnimationFrame(renderLoop);