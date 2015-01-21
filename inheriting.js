/**
 * Created by mzimmerman on 1/20/15.
 */

var Tracejs = Tracejs || {};

(function() {
    Tracejs.Sphere = function(r) {
        // will overwrite GeometricObject type
        this.type = 'Sphere';
        this.radius = r
    };

    Tracejs.Sphere.prototype = new Tracejs.GeometricObject('black');
})();
