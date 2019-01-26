function LevelScene() {
    Scene.call(this);
    this.x = 300;
    this.y = 128;
}

LevelScene.prototype = Object.create(Scene.prototype);

LevelScene.prototype.update = function() {
    Scene.prototype.update.call(this);
    // TODO put in input logic
};

LevelScene.prototype.draw = function() {
    Scene.prototype.draw.call(this);
    drawRect(this.x, this.y, 200, 200, '#0f0');
};

function configureScenario() {
    scene = new LevelScene();
}
