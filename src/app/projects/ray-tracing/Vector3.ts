export class Vector3 {
    // Private variables
    private _x;
    private _y;
    private _z;

    constructor(x: number, y: number, z: number) {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    // Getters
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get z() {
        return this._z;
    }

    // Setters
    set x(x: number) {
        this._x = x;
    }
    set y(y: number) {
        this._y = y;
    }
    set z(z: number) {
        this._z = z;
    }

    // Class functions
    addTo(vector: Vector3) {
        this._x += vector.x;
        this._y += vector.y;
        this._z += vector.z;
    }

    add(vector: Vector3): Vector3 {
        return new Vector3(this._x + vector.x, this._y + vector.y, this._z + vector.z);
    }

    addNumber(n: number): Vector3 {
        return new Vector3(this._x + n, this._y + n, this._z + n);
    }
    
    subtractFrom(vector: Vector3) {
        this._x -= vector.x;
        this._y -= vector.y;
        this._z -= vector.z;
    }

    subtract(vector: Vector3): Vector3 {
        return new Vector3(this._x - vector.x, this._y - vector.y, this._z - vector.z);
    }
    subtractBy(vector: Vector3) {
        this._x *= vector.x;
        this._y *= vector.y;
        this._z *= vector.z;
    }

    multiplyByVector(vector: Vector3): Vector3 {
        return new Vector3(this._x * vector.x, this._y * vector.y, this._z *= vector.z);
    }

    multiply(n: number): Vector3 {
        return new Vector3(this._x * n, this._y * n, this._z * n);
    }

    multiplyBy(vector: Vector3) {
        this._x *= vector.x;
        this._y *= vector.y;
        this._z *= vector.z;
    }

    divideBy(vector: Vector3) {
        this._x /= vector.x;
        this._y /= vector.y;
        this._z /= vector.z;
    }

    divide(n: number): Vector3 {
        return new Vector3(this._x / n, this._y / n, this._z / n);
    }

    lengthSquared(): number {
        return this._x * this._x + this._y * this._y + this._z * this._z;
    }

    length(): number {
        return Math.sqrt(this.lengthSquared());
    }

    dot(vector3: Vector3): number {
        return (this._x * vector3.x) + (this._y * vector3.y) + (this._z * vector3.z);
    }

    cross(vector: Vector3) {
        var x = this._y * vector.z - this._z * vector.y;
        var y = this._z * vector.x - this._x * vector.z;
        var z = this._x * vector.y - this._y * vector.x;
        return new Vector3(x, y, z);
    }

    static unit_vector(vector: Vector3): Vector3 {
        return vector.divide(vector.length());
    }

}