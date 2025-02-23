import { Ray } from "../ray";
import { Vector3 } from "../Vector3";

export function color(ray: Ray): Vector3 {
    const unitDirection = Vector3.unit_vector(ray.direction);
    const t = 0.5*(unitDirection.y + 1.0);
    const vector1 = new Vector3(1.0, 1.0, 1.0);
    const vector2 = new Vector3(0.5, 0.7, 1.0);

    return vector1.multiply(1.0 - t).add(vector2.multiply(t));
}