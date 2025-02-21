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

    addTo(vector: Vector3) {
        this._x += vector.x;
        this._y += vector.y;
        this._z += vector.z;
    }
    subtractFrom(vector: Vector3) {
        this._x -= vector.x;
        this._y -= vector.y;
        this._z -= vector.z;
    }

    multiplyBy(n: number) {
        this._x *= n;
        this._y *= n;
        this._z *= n;
    }

    divideBy(n: number) {
        this._x /= n;
        this._y /= n;
        this._z /= n;
    }

    lengthSquared(): number {
        return this._x * this._x + this._y * this._y + this._z * this._z;
    }

}