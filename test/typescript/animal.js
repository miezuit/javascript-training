var RoboDog = /** @class */ (function () {
    function RoboDog(name) {
        this.name = name;
    }
    RoboDog.prototype.speak = function () {
        return 'Woof! Woof';
    };
    RoboDog.prototype.play = function () {
        console.log('let me play with you');
    };
    RoboDog.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            return true;
        }
        return false;
    };
    RoboDog.prototype.stop = function () {
        throw new Error("Method not implemented.");
    };
    return RoboDog;
}());
var lessie = new RoboDog('Lessie');
lessie.start();
console.log(lessie.speak());
lessie.play();
