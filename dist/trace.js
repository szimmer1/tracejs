var Tracejs;!function(t){var e=function(){function e(t,e,r){this.x=t?t:0,this.y=e?e:0,this.z=r?r:0}return e.prototype.get_x=function(){return this.x},e.prototype.get_y=function(){return this.y},e.prototype.get_z=function(){return this.z},e.prototype.negate=function(){this.x=-this.x,this.y=-this.y,this.z=-this.z},e.prototype.add_norm=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.add_norm_this=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this},e.prototype.dot_vec=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},e.prototype.mult_right=function(t){return new e(this.x*t,this.y*t,this.z*t)},e.prototype.assign_norm=function(t){return this===t?this:(this.x=t.x,this.y=t.y,this.z=t.z,this)},e.prototype.assign_vec=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},e.prototype.assign_point=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},e.prototype.normalize=function(){var t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);this.x/=t,this.y/=t,this.z/=t},e.mult_left=function(t,r){return new e(t*r.x,t*r.y,t*r.z)},e.add_vec_norm=function(e,r){return new t.Vector3D(e.x+r.x,e.y+r.y,e.z+r.z)},e.sub_vec_norm=function(e,r){return new t.Vector3D(e.x-r.x,e.y-r.y,e.z-r.z)},e.dot_vec_norm=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z},e}();t.Normal=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function t(t,e){this.x=t?t:0,this.y=e?e:0}return t.prototype.get_x=function(){return this.x},t.prototype.get_y=function(){return this.y},t.prototype.set_point=function(t){return this.x=t.x,this.y=t.y,this},t}();t.Point2D=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(t,e,r){this.x=t,this.y=e,this.z=r}return e.prototype.get_x=function(){return this.x},e.prototype.get_y=function(){return this.y},e.prototype.get_z=function(){return this.z},e.prototype.setPoint=function(t,e,r){return t&&e&&r&&(this.x=t,this.y=e,this.z=r),this},e.prototype.negate=function(){this.x=-this.x,this.y=-this.y,this.z=-this.z},e.prototype.sub_point=function(e){return new t.Vector3D(this.x-e.x,this.y-e.y,this.z-e.z)},e.prototype.add_vector=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.sub_vector=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.d_squared=function(t){return(this.x-t.x)*(this.x-t.x)+(this.y-t.y)*(this.y-t.y)+(this.z-t.z)*(this.z-t.z)},e}();t.Point3D=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function t(t,e){this.o=t,this.d=e}return t.prototype.assign=function(t){return this===t?this:(this.o=t.o,this.d=t.d,this)},t.prototype.setRay=function(t,e){return t&&e?(this.o=t,this.d=e,this):this},t}();t.Ray=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function t(t,e,r){this.r=t,this.g=e,this.b=r}return t.prototype.get_r=function(){return this.r},t.prototype.get_g=function(){return this.g},t.prototype.get_b=function(){return this.b},t.prototype.add_color=function(e){return new t(this.r+e.r,this.g+e.g,this.b+e.b)},t.prototype.scale=function(e){return new t(this.r*e,this.g*e,this.b*e)},t.prototype.div_color=function(e){return new t(this.r/e.r,this.g/e.g,this.b/e.b)},t.prototype.div=function(t){return this.r/=t,this.g/=t,this.b/=t,this},t.prototype.mult_color=function(e){return new t(this.r*e.r,this.g*e.g,this.b*e.b)},t.prototype.exp=function(e){return new t(Math.pow(this.r,e),Math.pow(this.g,e),Math.pow(this.b,e))},t}();t.RGBColor=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(e){this.hit_an_object=!1,this.material_ptr=null,this.hit_point=null,this.local_hit_point=null,this.normal=null,this.ray=null,this.depth=0,this.color=new t.RGBColor(0,0,0),this.t=0,this.w=e}return e.prototype.get_hit_an_object=function(){return this.hit_an_object},e.prototype.get_hit_point=function(){return this.hit_point},e.prototype.get_local_hit_point=function(){return this.local_hit_point},e.prototype.get_ray=function(){return this.ray},e.prototype.get_depth=function(){return this.depth},e.prototype.get_normal=function(){return this.normal},e.prototype.get_world=function(){return this.w},e}();t.ShadeRec=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){function e(t,e){return Math.floor(Math.random()*(e-t))+t}function r(t){for(var e,r,o=t.length;o;e=Math.floor(Math.random()*o),r=t[--o],t[o]=t[e],t[e]=r);return t}t.invPI=.3183098861837907,t.kHugeValue=1e10,t.randomInt=e,t.shuffleArray=r}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function t(t,e,r){this.x=t,this.y=e,this.z=r}return t.prototype.get_x=function(){return this.x},t.prototype.get_y=function(){return this.y},t.prototype.get_z=function(){return this.z},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)},t.prototype.sub=function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)},t.prototype.div=function(e){return new t(this.x/e,this.y/e,this.z/e)},t.prototype.mult=function(e){return new t(this.x*e,this.y*e,this.z*e)},t.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},t.prototype.length_squared=function(){return this.length()*this.length()},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},t.prototype.cross=function(e){return new t(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)},t.prototype.angle_between=function(t){if(0==this.length()||0==t.length())return 0;var e=Math.acos(this.dot(t)/(this.length()*t.length()));return e*(180/Math.PI)},t.prototype.normalize=function(){var t=this.length();0!=t&&(this.x/=t,this.y/=t,this.z/=t)},t.prototype.distance_from=function(t){return Math.sqrt((this.x-t.x)*(this.x-t.x)+(this.y-t.y)*(this.y-t.y)+(this.z-t.z)*(this.z-t.z))},t.prototype.exp=function(e){return new t(Math.pow(this.x,e.x),Math.pow(this.y,e.y),Math.pow(this.z,e.z))},t.prototype.negate=function(){return new t(-this.x,-this.y,-this.z)},t}();t.Vector3D=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function t(t){this.world_ptr=t}return t}();t.Tracer=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(t){function e(e){t.call(this,e)}return __extends(e,t),e.prototype.trace=function(t){var e=this.world_ptr.hit_objects(t);return e.hit_an_object?(e.ray=t,e.material_ptr.shade(e)):this.world_ptr.background_color},e}(t.Tracer);t.RayCast=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(t){function e(e){t.call(this,e)}return __extends(e,t),e.prototype.trace=function(t){var e=this.world_ptr.objects[0];return e.hit(t,null)?e.get_color():this.world_ptr.background_color},e}(t.Tracer);t.SingleSphere=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(t){e.call(this,t)}return __extends(r,e),r.prototype.trace=function(e,r){if(r>this.world_ptr.view_plane.max_depth)return new t.RGBColor(0,0,0);var o=this.world_ptr.hit_objects(e);return o.hit_an_object?(o.depth=r,o.ray=e,o.material_ptr.shade(o)):this.world_ptr.background_color},r}(t.Tracer);t.Whitted=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(e,r){this.color=r?r:new t.RGBColor(1,0,0),this.material=e?e:new t.Matte}return e.prototype.set_material=function(t){return this.material=t,this.material},e.prototype.get_material=function(){return this.material},e.prototype.hit=function(){return!1},e.prototype.get_color=function(){return this.color},e.prototype.set_color=function(t){this.color=t},e}();t.GeometricObject=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o,n,i){e.call(this,r,o),this.point=n?n:new t.Point3D(0,0,0),this.normal=i?i:new t.Normal(0,0,0)}return __extends(r,e),r.prototype.hit=function(t,e){var o,n=t.o.sub_point(this.point),i=this.normal.dot_vec(n),s=this.normal.dot_vec(t.d);if(o=i/s,o<=r.kEpsilon)return!1;e.normal=this.normal;var c=t.d.mult(o);return e.local_hit_point=t.o.add_vector(c),!0},r.prototype.get_point=function(){return this.point},r.prototype.set_point=function(t){this.point=t},r.prototype.get_normal=function(){return this.normal},r.prototype.set_normal=function(t){this.normal=t},r.kEpsilon=.001,r}(t.GeometricObject);t.Plane=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o,n,i){e.call(this,r,o),this.center=n?n:new t.Point3D(0,0,0),this.radius=i?i:1}return __extends(r,e),r.prototype.hit=function(e,o){var n,i=e.o.sub_point(this.center),s=e.d.dot(e.d),c=i.mult(2).dot(e.d),a=i.dot(i)-this.radius*this.radius,h=c*c-4*s*a;if(0>h)return!1;var u=Math.sqrt(h),p=2*s;if(n=(-c-u)/p,n>r.kEpsilon){if(o){o.t=n,o.ray=e;var l=e.d.mult(n).add(i).div(this.radius);o.normal=new t.Normal(l.x,l.y,l.z),o.local_hit_point=e.o.add_vector(e.d.mult(n)),o.hit_point=e.o.add_vector(e.d.mult(o.t))}return!0}if(n=(-c+u)/p,n>r.kEpsilon){if(o){o.t=n,o.ray=e;var l=e.d.mult(n).add(i).div(this.radius);o.normal=new t.Normal(l.x,l.y,l.z),o.local_hit_point=e.o.add_vector(e.d.mult(n)),o.hit_point=e.o.add_vector(e.d.mult(o.t))}return!0}return!1},r.prototype.get_center=function(){return this.center},r.prototype.set_center=function(t){this.center=t},r.prototype.get_radius=function(){return this.radius},r.prototype.set_radius=function(t){this.radius=t},r.kEpsilon=.001,r}(t.GeometricObject);t.Sphere=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(t,e){this.num_samples=t?t:1,this.num_sets=e?e:83,this.count=0,this.jump=0,this.shuffled_indices=new Array,this.setup_shuffled_indices()}return e.prototype.generate_samples=function(){},e.prototype.sample_unit_square=function(){return this.count%this.num_samples==0,this.samples[this.jump+this.shuffled_indices[this.jump+this.count++%this.num_samples]]},e.prototype.setup_shuffled_indices=function(){for(var e=[],r=0;r<this.num_samples;++r)e.push(r);for(var r=0;r<this.num_sets;++r){t.shuffleArray(e);for(var o=0;o<this.num_samples;++o)this.shuffled_indices.push(e[o])}},e.prototype.get_num_samples=function(){return this.num_samples},e}();t.Sampler=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(t){t?e.call(this,t):e.call(this,1),this.samples=[],this.generate_samples()}return __extends(r,e),r.prototype.generate_samples=function(){for(var e=Math.floor(Math.sqrt(this.num_samples)),r=1/this.num_samples,o=0;o<this.num_sets;o++)for(var n=0;e>n;n++)for(var i=0;e>i;i++)this.samples[n*e+i+o*this.num_samples]=new t.Point2D,this.samples[n*e+i+o*this.num_samples].x=(n*e+i)*r+Math.random()*r,this.samples[n*e+i+o*this.num_samples].y=(i*e+n)*r+Math.random()*r;for(var o=0;o<this.num_sets;o++)for(var n=0;e>n;n++)for(var i=0;e>i;i++){var s=t.randomInt(i,e-i),c=this.samples[n*e+i+o*this.num_samples].x;this.samples[n*e+i+o*this.num_samples].x=this.samples[n*e+s+o*this.num_samples].x,this.samples[n*e+s+o*this.num_samples].x=c}for(var o=0;o<this.num_sets;o++)for(var n=0;e>n;n++)for(var i=0;e>i;i++){var s=t.randomInt(i,e-i),c=this.samples[i*e+n+o*this.num_samples].y;this.samples[i*e+n+o*this.num_samples].y=this.samples[s*e+n+o*this.num_samples].y,this.samples[s*e+n+o*this.num_samples].y=c}},r}(t.Sampler);t.MultiJittered=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(t){t?e.call(this,t):e.call(this,1),this.samples=new Array,this.generate_samples()}return __extends(r,e),r.prototype.generate_samples=function(){for(var e=Math.floor(Math.sqrt(this.num_samples)),r=0;r<this.num_sets;++r)for(var o=0;e>o;++o)for(var n=0;e>n;++n)this.samples.push(new t.Point2D((n+.5)/e,(o+.5)/e))},r}(t.Sampler);t.Regular=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(){this.eye=new t.Point3D(0,0,500),this.lookat=new t.Point3D(0,0,0),this.up=new t.Vector3D(0,1,0),this.u=new t.Vector3D(1,0,0),this.v=new t.Vector3D(0,1,0),this.w=new t.Vector3D(0,0,1)}return e.prototype.compute_uvw=function(){this.w=this.eye.sub_point(this.lookat),this.w.normalize(),this.u=this.up.cross(this.w),this.u.normalize(),this.v=this.w.cross(this.u)},e.prototype.render_scene=function(){},e}();t.Camera=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(t){e.call(this),this.zw=t?t:100}return __extends(r,e),r.prototype.render_scene=function(e){var r=new t.RGBColor(0,0,0),o=e.view_plane,n=new t.Point3D(0,0,this.zw),i=new t.Vector3D(0,0,-1),s=new t.Ray(n,i),c=0,a=new t.Point2D(0,0),h=new t.Point2D(0,0);e.view_plane_matrix=new Array(o.vres);for(var u=0;u<o.vres;++u){e.view_plane_matrix[u]=new Array;for(var p=0;p<o.hres;p++){r=new t.RGBColor(0,0,0);for(var l=0;l<o.num_samples;l++)a=o.sampler.sample_unit_square(),h.x=o.psize*(p-.5*(o.hres-a.x)),h.y=o.psize*(u-.5*(o.vres-a.y)),n.setPoint(h.x,h.y,this.zw),s.setRay(n,i),r=r.add_color(e.tracer.trace(s,c));r=r.div(o.num_samples).scale(255),e.view_plane_matrix[u].push(r)}}},r}(t.Camera);t.Orthographic=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(t){e.call(this),this.d=t?t:300,this.zoom=1}return __extends(r,e),r.prototype.ray_direction=function(t){var e=this.u.mult(t.x).add(this.v.mult(t.y)).sub(this.w.mult(this.d));return e.normalize(),e},r.prototype.render_scene=function(e){var r=new t.RGBColor(0,0,0),o=e.view_plane,n=new t.Vector3D(0,0,0),i=new t.Ray(this.eye,n),s=0,c=new t.Point2D(0,0),a=new t.Point2D(0,0);e.view_plane_matrix=new Array(o.vres);for(var h=0;h<o.vres;h++){e.view_plane_matrix[h]=new Array;for(var u=0;u<o.hres;u++){r=new t.RGBColor(0,0,0);for(var p=0;p<o.num_samples;p++)c=o.sampler.sample_unit_square(),a.x=o.psize*(u-.5*o.hres+c.x),a.y=o.psize*(h-.5*o.vres+c.y),i.d=this.ray_direction(a),r=r.add_color(e.tracer.trace(i,s));r=r.div(o.num_samples).scale(255),e.view_plane_matrix[h].push(r)}}},r}(t.Camera);t.Pinhole=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(t){this.shadows=t?t:!1}return e.prototype.set_shadows=function(t){this.shadows=t},e.prototype.get_shadows=function(){return this.shadows},e.prototype.get_direction=function(){return new t.Vector3D(0,0,0)},e.prototype.L=function(){return new t.RGBColor(0,0,0)},e}();t.Light=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o,n){r?e.call(this,r):e.call(this,!1),this.ls=o?o:1,this.color=n?n:new t.RGBColor(0,0,0)}return __extends(r,e),r.prototype.set_ls=function(t){this.ls=t},r.prototype.set_color=function(t){this.color=t},r.prototype.get_ls=function(){return this.ls},r.prototype.get_color=function(){return this.color},r.prototype.get_direction=function(){return new t.Vector3D(0,0,0)},r.prototype.L=function(){return this.color.scale(this.ls)},r}(t.Light);t.AmbientLight=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o,n,i){r?e.call(this,r):e.call(this,!1),this.ls=o?o:1,this.color=n?n:new t.RGBColor(0,0,0),i?(this.dir=i,this.dir.normalize()):this.dir=new t.Vector3D(0,0,0)}return __extends(r,e),r.prototype.set_ls=function(t){this.ls=t},r.prototype.set_color=function(t){this.color=t},r.prototype.set_direction=function(t){this.dir=t,this.dir.normalize()},r.prototype.get_ls=function(){return this.ls},r.prototype.get_color=function(){return this.color},r.prototype.get_direction=function(){return this.dir},r.prototype.L=function(){return this.color.scale(this.ls)},r}(t.Light);t.DirectionalLight=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o,n,i){r?e.call(this,r):e.call(this,!1),this.ls=o?o:1,this.color=n?n:new t.RGBColor(0,0,0),this.location=i?i:new t.Vector3D(0,0,0)}return __extends(r,e),r.prototype.set_ls=function(t){this.ls=t},r.prototype.set_color=function(t){this.color=t},r.prototype.set_location=function(t){this.location=t},r.prototype.get_ls=function(){return this.ls},r.prototype.get_color=function(){return this.color},r.prototype.get_location=function(){return this.location},r.prototype.get_direction=function(e){var r=e.get_hit_point(),o=new t.Vector3D(r.x,r.y,r.z),n=o.sub(this.location);return n.normalize(),n},r.prototype.L=function(){return this.color.scale(this.ls)},r}(t.Light);t.PointLight=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(){}return e.prototype.f=function(){return new t.RGBColor(0,0,0)},e.prototype.fSample=function(){return new t.RGBColor(0,0,0)},e.prototype.rho=function(){return new t.RGBColor(0,0,0)},e}();t.BRDF=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o,n){e.call(this),this.ks=r?r:0,this.exp=o?o:0,this.cs=n?n:new t.RGBColor(0,0,0)}return __extends(r,e),r.prototype.f=function(e,r,o){var n=new t.RGBColor(0,0,0),i=e.normal.dot_vec(r),s=e.normal.mult_right(i);s=t.Normal.mult_left(2,s);var c=t.Normal.add_vec_norm(r.negate(),s),a=c.dot(o);if(a>0){var h=Math.pow(a,this.exp);n=this.cs.scale(this.ks).scale(h)}return n},r.prototype.fSample=function(t,e,r){return this.f(t,e,r)},r.prototype.rho=function(){return new t.RGBColor(0,0,0)},r.prototype.set_ks=function(t){this.ks=t},r.prototype.set_exp=function(t){this.exp=t},r.prototype.set_cs=function(t){this.cs=t},r.prototype.get_ks=function(){return this.ks},r.prototype.get_exp=function(){return this.exp},r.prototype.get_cs=function(){return this.cs},r}(t.BRDF);t.GlossySpecular=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o){e.call(this),this.kd=r?r:1,this.cd=o?o:new t.RGBColor(0,0,0)}return __extends(r,e),r.prototype.f=function(){return this.cd.scale(this.kd)},r.prototype.rho=function(){return this.cd.scale(this.kd)},r.prototype.set_kd=function(t){this.kd=t},r.prototype.set_cd=function(t){this.cd=t},r}(t.BRDF);t.Lambertian=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o){e.call(this),this.kr=r?r:0,this.cr=o?o:new t.RGBColor(1,1,1)}return __extends(r,e),r.prototype.f=function(){return new t.RGBColor(0,0,0)},r.prototype.sample_f=function(e,r,o){var n=e.normal.dot_vec(r);n=2*n;var i=e.normal.mult_right(n),s=t.Normal.add_vec_norm(r.negate(),i);return o.x=s.x,o.y=s.y,o.z=s.z,this.cr.scale(this.kr).div(e.normal.dot_vec(o))},r.prototype.rho=function(){return new t.RGBColor(0,0,0)},r.prototype.set_kr=function(t){this.kr=t},r.prototype.set_cr=function(t){this.cr=t},r.prototype.get_kr=function(){return this.kr},r.prototype.get_cr=function(){return this.cr},r}(t.BRDF);t.PerfectSpecular=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(){}return e.prototype.shade=function(){var e=new t.RGBColor(0,0,0);return e},e.prototype.area_light_shade=function(){var e=new t.RGBColor(0,0,0);return e},e.prototype.path_shade=function(){var e=new t.RGBColor(0,0,0);return e},e}();t.Material=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o){e.call(this),this.ambient_brdf=r?r:new t.Lambertian,this.diffuse_brdf=o?o:new t.Lambertian}return __extends(r,e),r.prototype.shade=function(t){for(var e=t.ray.d.negate(),r=this.ambient_brdf.rho(t,e).mult_color(t.w.ambient_ptr.L(t)),o=t.w.lights.length,n=0;o>n;++n){var i=t.w.lights[n].get_direction(t),s=t.normal.dot_vec(i);s>0&&(r=r.add_color(this.diffuse_brdf.f(t,e,i).mult_color(t.w.lights[n].L(t)).scale(s)))}return r},r}(t.Material);t.Matte=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o,n){e.call(this),this.ambient_brdf=r?r:new t.Lambertian,this.diffuse_brdf=o?o:new t.Lambertian,this.specular_brdf=n?n:new t.GlossySpecular}return __extends(r,e),r.prototype.shade=function(t){for(var e=t.ray.d.negate(),r=this.ambient_brdf.rho(t,e).mult_color(t.w.ambient_ptr.L(t)),o=t.w.lights.length,n=0;o>n;++n){var i=t.w.lights[n].get_direction(t),s=t.normal.dot_vec(i);s>0&&(r=r.add_color(this.diffuse_brdf.f(t,e,i).add_color(this.specular_brdf.f(t,e,i)).mult_color(t.w.lights[n].L(t)).scale(s)))}return r},r}(t.Material);t.Phong=e}(Tracejs||(Tracejs={}));var __extends=this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},Tracejs;!function(t){var e=function(e){function r(r,o,n,i){e.call(this,r,o,n),i?this.reflective_brdf=i:i=new t.PerfectSpecular}return __extends(r,e),r.prototype.shade=function(r){var o=e.prototype.shade.call(this,r),n=r.ray.d.negate(),i=new t.Vector3D(0,0,0),s=this.reflective_brdf.sample_f(r,n,i),c=new t.Ray(r.hit_point,i);return o=o.add_color(s).mult_color(r.w.tracer.trace(c,r.depth+1)).scale(r.normal.dot_vec(i))},r}(t.Phong);t.Reflective=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(t,e,r,o){this.hres=t?t:512,this.vres=e?e:512,this.psize=r?r:1,this.max_depth=o?o:5}return e.prototype.set_sampler=function(t){this.num_samples=t.get_num_samples(),this.sampler=t},e.prototype.set_samples=function(e){return e&&e>1?this.sampler=new t.MultiJittered(e):e&&1===e&&(this.sampler=new t.Regular(e)),this.num_samples},e.prototype.getHres=function(){return this.hres},e.prototype.setHres=function(t){return this.hres=t,this},e.prototype.getVres=function(){return this.vres},e.prototype.setVres=function(t){return this.vres=t,this},e.prototype.getPsize=function(){return this.psize},e.prototype.setPsize=function(t){return this.psize=t,this},e}();t.ViewPlane=e}(Tracejs||(Tracejs={}));var Tracejs;!function(t){var e=function(){function e(e){this.view_plane=new t.ViewPlane,this.view_plane.set_sampler(new t.Regular(10)),this.view_plane_zw=100,this.ambient_brdf=[new t.Lambertian(1,new t.RGBColor(.2,.2,.2))],this.diffuse_brdf=[new t.Lambertian(1,new t.RGBColor(.9,.9,0))],this.specular_brdf=[new t.GlossySpecular(1,100,new t.RGBColor(.8,.8,.8))],this.reflective_brdf=[new t.PerfectSpecular(.75,new t.RGBColor(.1,.1,.1))],this.material=new t.Phong(this.ambient_brdf[0],this.diffuse_brdf[0],this.specular_brdf[0]),this.objects=[],this.objects[0]=new t.Sphere(this.material,null,new t.Point3D(-50,0,0),100),this.tracer=new t.Whitted(this),this.lights=[],this.lights[0]=new t.PointLight(!1,1,new t.RGBColor(1,1,1),new t.Vector3D(300,300,0)),this.ambient_ptr=new t.AmbientLight(!1,1,new t.RGBColor(1,1,1)),this.world_camera=new t.Pinhole,this.background_color=e?e:new t.RGBColor(0,0,0)}return e.prototype.renderScene=function(){return this.world_camera.render_scene(this),JSON.stringify(this.view_plane_matrix)},e.prototype.hit_objects=function(e){for(var r,o,n=new t.ShadeRec(this),i=t.kHugeValue,s=this.objects.length,c=0;s>c;++c)this.objects[c].hit(e,n)&&n.t<i&&(n.hit_an_object=!0,i=n.t,n.material_ptr=this.objects[c].material,n.hit_point=e.o.add_vector(e.d.mult(n.t)),r=n.normal,o=n.local_hit_point);return n.hit_an_object&&(n.t=i,n.normal=r,n.local_hit_point=o),n},e.prototype.vp=function(t,e,r){return t>0||e>0||r>0?(t&&this.view_plane.setHres(t),e&&this.view_plane.setVres(e),r&&this.view_plane.setPsize(r),this.view_plane):this.view_plane},e.prototype.vpzw=function(t){return t>0?(this.view_plane_zw=t,this.view_plane_zw):this.view_plane_zw},e.prototype.bgColor=function(e,r,o){return e>=0&&255>=e&&r>=0&&255>=r&&o>=0&&255>=o?(this.background_color=new t.RGBColor(e,r,o),this.background_color):this.background_color},e.prototype.object=function(e){if(e)for(var r=0;r<e.length;r++)if(e[r])if(this.objects[r])e[r].center&&this.objects[r].set_center(new t.Point3D(e[r].center.x,e[r].center.y,e[r].center.z)),e[r].radius>0&&this.objects[r].set_radius(e[r].radius),e[r].color&&(this.diffuse_brdf[r]&&this.specular_brdf[r]&&this.ambient_brdf[r]&&this.reflective_brdf[r]||(this.diffuse_brdf[r]=new t.Lambertian(1),this.specular_brdf[r]=new t.GlossySpecular(1,100),this.ambient_brdf[r]=new t.Lambertian(1),this.reflective_brdf[r]=new t.PerfectSpecular(.75)),this.diffuse_brdf[r].set_cd(new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b)),this.specular_brdf[r].set_cs(new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b)),this.ambient_brdf[r].set_cd(new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b)),this.reflective_brdf[r].set_cr(new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b))),e[r].material&&("matte"===e[r].material.type?this.objects[r].set_material(new t.Matte(this.ambient_brdf[r],this.diffuse_brdf[r])):"phong"===e[r].material.type?this.objects[r].set_material(new t.Phong(this.ambient_brdf[r],this.diffuse_brdf[r],this.specular_brdf[r])):"reflective"===e[r].material.type&&this.objects[r].set_material(new t.Reflective(this.ambient_brdf[r],this.diffuse_brdf[r],this.specular_brdf[r],this.reflective_brdf[r])));else{var o=this.material,n=(new t.RGBColor(1,1,1),new t.Point3D(0,0,0)),i=50;e[r].center&&(n=new t.Point3D(e[r].center.x,e[r].center.y,e[r].center.z)),e[r].radius>0&&(i=e[r].radius),e[r].color&&(this.diffuse_brdf[r]&&this.specular_brdf[r]&&this.ambient_brdf[r]&&this.reflective_brdf[r]||(this.diffuse_brdf[r]=new t.Lambertian(1),this.specular_brdf[r]=new t.GlossySpecular(1,100),this.ambient_brdf[r]=new t.Lambertian(1),this.reflective_brdf[r]=new t.PerfectSpecular(.75)),this.diffuse_brdf[r].set_cd(new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b)),this.specular_brdf[r].set_cs(new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b)),this.ambient_brdf[r].set_cd(new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b)),this.reflective_brdf[r].set_cr(new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b))),e[r].material&&("matte"===e[r].material.type?o=new t.Matte(this.ambient_brdf[r],this.diffuse_brdf[r]):"phong"===e[r].material.type?o=new t.Phong(this.ambient_brdf[r],this.diffuse_brdf[r],this.specular_brdf[r]):"reflective"===e[r].material.type&&(o=new t.Reflective(this.ambient_brdf[r],this.diffuse_brdf[r],this.specular_brdf[r],this.reflective_brdf[r]))),this.objects[r]=new t.Sphere(o,null,n,i)}else console.log("World object(): object array is empty");return this.objects},e.prototype.sampler=function(e,r){if(e&&r>0){var o;switch(e=e.toLowerCase()){case"regular":o=new t.Regular(r);break;case"multijittered":o=new t.MultiJittered(r);break;default:o=new t.Regular(r)}this.view_plane.set_sampler(o)}else 0>r&&console.log("World sampler: called with num_samples < 0! Sampler not set");return this.view_plane.sampler},e.prototype.light=function(e){if(e)for(var r=0;r<e.length;r++)if(this.lights[r]&&this.lights[r].set_direction?"directional":"point"===e[r].type){var o=this.lights[r].set_direction?"directional":"point";e[r]&&(e[r].color&&this.lights[r].set_color(new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b)),e[r].location&&("point"===o?this.lights[r].set_location(new t.Vector3D(e[r].location.x,e[r].location.y,e[r].location.z)):"directional"===o&&this.lights[r].set_direction(new t.Vector3D(e[r].location.x,e[r].location.y,e[r].location.z))))}else{var n=new t.RGBColor(1,1,1),i=new t.Vector3D(300,300,0);e[r].color&&(n=new t.RGBColor(e[r].color.r,e[r].color.g,e[r].color.b)),e[r].location&&(i=new t.Vector3D(e[r].location.x,e[r].location.y,e[r].location.z)),"point"===e[r].type?this.lights[r]=new t.PointLight(null,1,n,i):"directional"===e[r].type&&(this.lights[r]=new t.DirectionalLight(null,1,n,i))}return this.lights},e.prototype.camera=function(e){return e&&("pinhole"===e.type?this.world_camera=new t.Pinhole:"orthographic"===e.type&&(this.world_camera=new t.Orthographic)),this.world_camera},e}();t.World=e}(Tracejs||(Tracejs={}));