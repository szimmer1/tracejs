/**
 * Created by mzimmerman on 1/16/15.
 */

reqAnimateFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(c) {window.setTimeout(c,15)};

window.addEventListener('load', onWindowLoad, false);

function onWindowLoad() {
    // get document canvas
    var canvas = document.getElementById('canvas');

    // create new scene
    var scene = new Phoria.Scene();
    scene.camera.position = {
        x : 0.0,
        y : 5.0,
        z : 10.0
    };
    scene.perspective.aspect = canvas.width / canvas.height;
    scene.viewport.height = canvas.height;
    scene.viewport.width = canvas.width;

    // create a renderer
    var renderer = new Phoria.CanvasRenderer(canvas);

    // create an plane Entity
    var plane = Phoria.Util.generateTesselatedPlane(8,8,0,20);
    scene.graph.push(new Phoria.Entity.create({
        points : plane.points,
        edges : plane.edges,
        polygons : plane.polygons,
        style : {
            drawmode : 'wireframe'
        }
    }));

    // create a cube entity
    var cube = Phoria.Util.generateUnitCube();
    scene.graph.push(Phoria.Entity.create({
        points : cube.points,
        edges : cube.edges,
        polygons : cube.polygons
    }));

    // give a light
    scene.graph.push(new Phoria.DistantLight());

    // animate function
    var pause = false;
    var fnAnimate = function() {
        if (!pause) {
            // load scene to canvas
            scene.modelView();
            renderer.render(scene);
        }
        reqAnimateFrame(fnAnimate);
    }

    // bind master control buttons
    document.getElementById('reset-scene').addEventListener('click', function() {
        scene = new Phoria.Scene();
    });

    reqAnimateFrame(fnAnimate);
}