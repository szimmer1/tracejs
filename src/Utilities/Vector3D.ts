/*
    Shahar Zimmerman 1/22/2015
 */

/// <reference path="Point3D.ts" />
module Tracejs {
    export class Vector3D {

        // Class properties.
        x:number;
        y:number;
        z:number;

        /**
         * Vector3D()
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

        // Class methods.
        get_x() {
            return this.x;
        }
        get_y() {
            return this.y
        }
        get_z() {
            return this.z
        }
        add(v : Vector3D) {
            return new Vector3D(this.x + v.x, 
                                this.y + v.y, 
                                this.z + v.z);
        }
        sub(v : Vector3D) {
            return new Vector3D(this.x - v.x, 
                                this.y - v.y, 
                                this.z - v.z);
        }
        multiply(scalar : number) {
            return new Vector3D(this.x * scalar, 
                                this.y * scalar, 
                                this.z * scalar);
        }
        length() {
            return Math.sqrt((this.x * this.x) + 
                             (this.y * this.y) + 
                             (this.z * this.z));
        }
        length_squared() {
            return (this.length() * this.length());
        }
        dot(v : Vector3D) {
            return ((this.x * v.x) + 
                    (this.y * v.y) +
                    (this.z * v.z));
        }
        cross(v : Vector3D) {
            return new Vector3D(this.y * v.z - this.z * v.y,
                                this.z * v.x - this.x * v.z,
                                this.x * v.y - this.y * v.x);
        }
        angle_between(v : Vector3D) {
            if (this.length() == 0 || v.length() == 0) {
                return 0;
            }
            var radians = Math.acos(this.dot(v) / (this.length() * v.length()));
            
            return radians * (180 / Math.PI);
        }
        normalize() {
            var mag = this.length();
            this.x /= mag;
            this.y /= mag;
            this.z /= mag;
        }
        distance_from(v : Vector3D) {
            return Math.sqrt((this.x - v.x) * (this.x - v.x) +
                             (this.y - v.y) * (this.y - v.y) +
                             (this.z - v.z) * (this.z - v.z));
        }
    }
}