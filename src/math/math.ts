
const abs = (n:number) => Math.abs(n);
const sqrt = (n:number) => Math.sqrt(n);

const sin = (a:number) => Math.sin(a * deg_to_rad);
const cos = (a:number) => Math.cos(a * deg_to_rad);
const tan = (a:number) => Math.tan(a * deg_to_rad);
const atan = (a:number) => Math.atan(a * deg_to_rad);
const atan2 = (x:number, y:number ) => Math.atan2(x, y) * deg_to_rad;


/** Returns a random float between min and max
 * 
 * @param min
 * @param max
 * 
 * @returns float 
 */
function random(min:number, max:number) {
  // If no arguments, return float between 0 and 1 exclusive of 1.
  if (min == undefined) return(Math.random());

  // If one argument, return float between 0 and the argument.
  else if (max == undefined) return(Math.random() * min);

  // If two arguments, return float between the first and second.
  else return(Math.random() * (max - min) + min);
}

function angleMode(mode) {
  angle_mode = mode;
  if (mode == DEGREES) {
    deg_to_rad = (PI/180);
    rad_to_deg = (180/PI);
  }
  else if (mode == RADIANS) {
    deg_to_rad = 1;
    rad_to_deg = 1;
  }
}

const frameRate = (rate:number) => frame_rate = rate;