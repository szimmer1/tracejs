/**
 * Created by mzimmerman on 1/17/15.
 */

var Tracejs = Tracejs || {};

// error check for no jQuery
window.addEventListener('load', function() {
    if (!('jQuery' in window)) {
        console.log("tracejs requires jQuery");
    }
}, false);

(function() {
    /**
     * COnstructor for tracejs GUI
     * @returns {Tracejs.GUI}
     * @constructor
     */
    Tracejs.GUI = function() {
        this.elements = [];
        return this;
    };

    // prototype methods
    Tracejs.GUI.prototype = {
        renderGUI : function(scene) {
            /*
             TODO should take scene data and add/delete controllers
            */
            // if there is a #GUI div delete it
            // add a #GUI div
            $('#gui').after('<div class="container"></div>');
        },
        addController : function(entity) {
            /*
             TODO should add GUI element
             */
        }
    }



})();