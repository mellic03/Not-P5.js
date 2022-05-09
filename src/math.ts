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
    if (angle_mode == RADIANS) {
        return(Math.sin(angle));
    }
    else if (angle_mode == DEGREES) {
        return(Math.sin(angle * (PI/180)));
    }
}


function cos(angle:number) {
    if (angle_mode == RADIANS) {
        return(Math.cos(angle));
    }
    else if (angle_mode == DEGREES) {
        return(Math.cos(angle * (PI/180)));
    }
}

function tan(angle:number) {
    if (angle_mode == RADIANS) {
        return(Math.tan(angle));
    }
    else if (angle_mode == DEGREES) {
        return(Math.tan(angle * (PI/180)));
    }
}

function atan2(x:number, y:number) {
    if (angle_mode == RADIANS) {
        return(Math.atan2(x, y));
    }
    else if (angle_mode == DEGREES) {
        return(Math.atan2(x, y) * (180/PI));
    }
}

function angleMode(mode) {
    let i:number = angle_modes?.indexOf(mode)
    angle_mode = angle_modes[i];
}

function frameRate(rate:number) {
    frame_rate = rate;
}
