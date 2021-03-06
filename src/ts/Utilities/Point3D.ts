// Trace.js - Point3D.ts

/// <reference path="Vector3D.ts" />

module Tracejs {
    export class Point3D {

        // class properties
        x : number;
        y : number;
        z : number;

        /**
         * Point3D()
         * @param x
         * @param y
         * @param z
         * @constructor
         */
        constructor(x : number, y : number, z : number) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        // class methods
        get_x() : number {
            return this.x
        }

        get_y() : number {
            return this.y
        }

        get_z() : number {
            return this.z
        }
        setPoint(x: number, y: number, z: number) : Point3D {
            if (x && y && z) {
                    this.x = x;
                    this.y = y;
                    this.z = z;
            }
            return this;
        }
        negate() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
        }

        sub_point(point : Point3D) : Vector3D {
            return new Vector3D(this.x - point.x, 
                                this.y - point.y, 
                                this.z - point.z);
        }

        add_vector(vector : Vector3D) : Point3D {
            return new Point3D(this.x + vector.x, 
                               this.y + vector.y, 
                               this.z + vector.z);
        }

        sub_vector(vector : Vector3D) : Point3D {
            return new Point3D(this.x - vector.x, 
                               this.y - vector.y, 
                               this.z - vector.z);
        }
        
        d_squared(point : Point3D) : number {
            return (this.x - point.x) * (this.x - point.x) +
                   (this.y - point.y) * (this.y - point.y) +
                   (this.z - point.z) * (this.z - point.z)
        }
    }
}