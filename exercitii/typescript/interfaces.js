var RoboDog = /** @class */ (function () {
    function RoboDog(name) {
        this.name = name;
        this.isStarted = true;
    }
    RoboDog.prototype.speak = function () {
        console.log('Woof! Woof!');
    };
    RoboDog.prototype.play = function () {
        console.log('Running to catch a stick');
    };
    RoboDog.prototype.start = function () {
        console.log('Robot started');
    };
    RoboDog.prototype.stop = function () {
        console.log('Robot stopped');
    };
    return RoboDog;
}());
var lessie = new RoboDog('Lessie');
lessie.speak();
lessie.play();
lessie.stop();
