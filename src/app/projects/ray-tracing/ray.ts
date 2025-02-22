import { Vector3 } from "./Vector3";
import { Point3 } from "./point3";

export class Ray {
    private _origin: Point3;
    private _direction: Vector3;
    
    constructor(origin: Point3, direction: Vector3) {
        this._origin = origin;
        this._direction = direction;
    }

    get origin(): Point3 {
        return this._origin;
    }

    get direction(): Vector3 {
        return this._direction;
    }

    pointAtParameter(t: number): Vector3 {
        return this.origin.add(this.direction.multiply(t));
    }
}