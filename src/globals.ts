// Canvas
let width:number;
let height:number;

let canvas;
let ctx:CanvasRenderingContext2D;

let frame_rate:number = 60;

// Translation
// Keep track of how much the user has translated the canvas.
// Translate by negative this amount at the end of the loop.
let translated_x:number = 0;
let translated_y:number = 0;

// Rotation
// Keep track of how much the user has rotated the canvas.
// Rotate by negative this amount at the end of the loop.
let rotated:number = 0;

// Mouse position
let mouseX:number = 0;
let mouseY:number = 0;


// Text
let current_font_size:number = 20;
let current_font:string = "Arial";


// Shapes

// rect_mode
const CENTER = 'CENTER';
const CORNER = 'CORNER';
const CORNERS = 'CORNERS';

const rect_modes = [CENTER, CORNER, CORNERS];
let rect_mode:string = CORNER;

// ellipse_mode
const ellipse_modes = [CENTER, CORNER, CORNERS];
let ellipse_mode:string = CENTER;

// Color
let stroke_color:string = `rgba(0, 0, 0, 1)`;
let stroke_weight:number = 1;

let no_stroke:boolean = false;

let fill_color:string = `rgba(255, 255, 255, 1)`;

let no_fill:boolean = false;

// Math
const DEGREES = 'DEGREES';
const RADIANS = 'RADIANS';
const angle_modes = [DEGREES, RADIANS];
let angle_mode:string = RADIANS; // Defualt angleMode is RADIANS.

// Number changed by angleMode().
// In RADIANS mode it will be = 1.
// Angles are multiplied by this when doing trig functions.
let deg_to_rad:number = 1;
let rad_to_deg:number = 1;

const PI = Math.PI;
