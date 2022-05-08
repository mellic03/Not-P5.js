class Vector {
    constructor(public x:number = 0, public y:number = 0, public z:number = 0) {
        x = x;
        y = y;
        z = z;
    }

    /** Set a vectors x, y and z coordinates
     * 
     * @returns nothing
     */
    set(x:number = 0, y:number = 0, z:number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /** Returns a copy of a vector
     * 
     * 
     * @returns Vector
     */
     copy(vect:Vector) {
        return (vect);
    }

    /** Addition of vectors
     * - let v3 = v1.add(v2);
     * 
     * @returns nothing
     */
    add(vect:Vector) {
        return ( new Vector(this.x + vect.x, this.y + vect.y, this.z + vect.z) );
    }

    /** Subtraction of vectors
     * - v1.sub(x, y, z)
     * - v1.sub(v2);
     * @returns nothing
     */
    sub(vect:Vector | number, y:number = 0, z:number = 0) {
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
    }

    /** Multiplication of vector by a scalar
     * 
     * @returns nothing
     */
    mult(scalar:number) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    }

    /** Division of vector by a scalar
     * 
     * @returns nothing
     */
    div(scalar:number) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
    }

    /** Return magnitude of a vector
     * 
     * @returns number
     */
    mag() {
        return(Math.sqrt((this.x**2 + this.y**2 + this.z**2)));
    }

    /** Return squared magnitude of a vector
     * 
     * @returns number
     */
    magSq() {
        return(this.x**2 + this.y**2 + this.z**2);
    }

}


function createVector(x:number = 0, y:number = 0, z:number = 0) {
    return( new Vector(x, y, z) );
}
