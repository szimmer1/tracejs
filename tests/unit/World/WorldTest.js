describe("World class", function() {
    it("constructor", function() {

        var defaultWorld = new Tracejs.World();
        var customWorld = new Tracejs.World(new Tracejs.RGBColor(50,100,50));

        expect(defaultWorld).toBeDefined();
        expect(customWorld).toBeDefined();
        expect(defaultWorld.background_color).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(customWorld.background_color).toEqual(new Tracejs.RGBColor(50,100,50));
    })

    it("View Plane API", function() {

        var world = new Tracejs.World();
        expect(world.vp()).toEqual(new Tracejs.ViewPlane(300,150,1));

        var newVp = world.vp(100,50,5);
        expect(world.vp()).toEqual(new Tracejs.ViewPlane(100,50,5));

    })

    it("bgColor and z-distance API", function() {

        var world = new Tracejs.World();
        expect(world.bgColor()).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(world.vpzw()).toEqual(100);

        world.bgColor(new Tracejs.RGBColor(1,2,3));
        world.vpzw(200);
        expect(world.bgColor()).toEqual(new Tracejs.RGBColor(1,2,3));
        expect(world.vpzw()).toEqual(200);
    })
});