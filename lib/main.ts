
let width:number;
let height:number;

let canvas:HTMLCanvasElement;
let ctx:CanvasRenderingContext2D;


// Shapes
let rect_mode:string = 'CORNER';
let ellipse_mode:string = 'CENTER';


// Color
let stroke_color:Array<number> = [0, 0, 0, 1];
let stroke_weight:number = 1;

let no_stroke:boolean = false;

let fill_color:Array<number> = [0, 0, 0, 1];

let no_fill:boolean = false;


function createCanvas(w:number, h:number) {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    width = canvas.width = w;
    height = canvas.height = h;
}

let draw:Function;
let setup:Function;

// Execute setup function
setup();

// Draw function
function gameLoop() {
    draw();
    window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);