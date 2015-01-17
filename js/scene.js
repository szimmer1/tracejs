/**
 * Created by mzimmerman on 1/16/15.
 */

window.addEventListener('load', onWindowLoad, false);

function onWindowLoad() {

    // get document canvas
    var canvas = document.getElementById('canvas');

    // create new scene
    var scene = Phoria.Scene();
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

    // create a sphere entity
    var sphere = Phoria.Util.generateSphere(5,60,240);
    scene.graph.push(new Phoria.Entity.create({
        points: sphere.points,
        edges: sphere.edges,
        polygons: sphere.polygons
    }));

    // render views
    scene.modelView();
    <!-- TODO renderlist is not being instantiated -->
    renderer.render(scene);
}