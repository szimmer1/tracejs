/// <reference path="Vector3D.ts" />
/// <reference path="Point3D.ts" />

module Tracejs {
    export class Ray {
        o : Point3D; // Origin.
        d : Vector3D; // Direction.

        constructor(origin : Point3D, dir : Vector3D) {
            this.o = origin;
            this.d = dir;
        }

        assign(ray : Ray) : Ray {
            if (this === ray) {
                return this;
            }

            this.o = ray.o;
            this.d = ray.d;

            return this;
        }
    }
}