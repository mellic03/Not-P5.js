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
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
    else if (no_fill && !no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    else if (!no_fill && no_stroke) {
        if (ellipse_mode == "CENTER") {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
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
// SHAPE CONFIGURATIONS
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
function backGround(r, g, b, a) {
    if (g === void 0) { g = r; }
    if (b === void 0) { b = r; }
    if (a === void 0) { a = 1; }
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    ctx.fillRect(0, 0, width, height);
    fill(fill_color[0], fill_color[1], fill_color[2]);
}
function fill(r, g, b, a) {
    if (r === void 0) { r = 0; }
    if (g === void 0) { g = r; }
    if (b === void 0) { b = r; }
    if (a === void 0) { a = 1; }
    // Set global fill color
    fill_color = [r, g, b, a];
    ctx.fillStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
}
function noFill() {
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
}
function stroke(r, g, b, a) {
    if (r === void 0) { r = 0; }
    if (g === void 0) { g = r; }
    if (b === void 0) { b = r; }
    if (a === void 0) { a = 1; }
    no_stroke = false;
    // Set global stroke color
    stroke_color = [r, g, b, a];
    ctx.strokeStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
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
var width;
var height;
var canvas;
var ctx;
// Shapes
var rect_mode = 'CORNER';
var ellipse_mode = 'CENTER';
// Color
var stroke_color = [0, 0, 0, 1];
var stroke_weight = 1;
var no_stroke = false;
var fill_color = [0, 0, 0, 1];
var no_fill = false;
function createCanvas(w, h) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    width = canvas.width = w;
    height = canvas.height = h;
}
var draw;
var setup;
// Execute setup function
setup();
// Draw function
function gameLoop() {
    draw();
    window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);
