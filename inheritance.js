/**
 * Created by mzimmerman on 1/20/15.
 */

var Tracejs = Tracejs || {};

(function() {
    Tracejs.GeometricObject = function() {
        this.type = 'GeometricObject';
        this.color = 'black'
    };

    Tracejs.GeometricObject.prototype.getType = function() {
        return this.type
    };

    Tracejs.GeometricObject.prototype.getColor = function() {
        return this.color
    }
})();
