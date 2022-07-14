/** Returns a random float between min and max
 * 
 * @param min
 * @param max
 * 
 * @returns float 
 */

function random(min:number, max:number) {
    
    // If no arguments, return float between 0 and 1 exclusive of 1.
    if (min == undefined) {
        return(Math.random());
    }

    // If one argument, return float between 0 and the argument.
    else if (max == undefined) {
        return(Math.random() * min);
    }

    // If two arguments, return float between the first and second.
    else {
        return(Math.random() * (max - min) + min);
    }
}

function sqrt(x:number) {
    return(Math.sqrt(x));
}

function sin(angle:number) {
    return(Math.sin(angle * deg_to_rad));
}

function cos(angle:number) {
    return(Math.cos(angle * deg_to_rad));
}

function tan(angle:number) {
    return(Math.tan(angle * deg_to_rad));
}

function atan2(x:number, y:number) {
    return(Math.atan2(x, y) * rad_to_deg);
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

function frameRate(rate:number) {
    frame_rate = rate;
}
