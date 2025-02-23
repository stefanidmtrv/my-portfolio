import { Point3 } from "../point3";
import { Ray } from "../ray";
import { Vector3 } from "../Vector3";

export function color(ray: Ray): Vector3 {
    if (hitSphere(new Point3(0, 0, -1), 0.5, ray)) {
        return new Vector3(1, 0, 0); // Red color for the sphere
    }

    const unitDirection = Vector3.unit_vector(ray.direction);
    const t = 0.5 * (unitDirection.y + 1.0);
    const vector1 = new Vector3(1.0, 1.0, 1.0);
    const vector2 = new Vector3(0.5, 0.7, 1.0);

    return vector1.multiply(1.0 - t).add(vector2.multiply(t));
}

export function hitSphere(center: Point3, radius: number, ray: Ray): boolean {
    const oc = ray.origin.subtract(center); // Fix vector direction

    const a = ray.direction.dot(ray.direction); // a = direction ⋅ direction
    const b = 2.0 * oc.dot(ray.direction); // Corrected b-term
    const c = oc.dot(oc) - radius * radius; // c = (oc ⋅ oc) - r²

    const discriminant = b * b - 4 * a * c;
    return discriminant > 0; // Intersection exists if discriminant > 0
}
