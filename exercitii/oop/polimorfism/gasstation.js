class BaseStation {
    fillCar() { }
}

class ShellStation extends BaseStation {
    fillCar() {
        console.log('Filling car with shell diesel.');
    }
}

class FakeStation extends BaseStation {
    fillCar() {
        console.log('Filling car with water.');
    }
}

class Driver {
    /**
     * 
     * @param {BaseStation} gasStation 
     */
    goToClosestStation(gasStation) {
        gasStation.fillCar();
    }
}

var myStation = new ShellStation();
var fakeStation = new FakeStation();

var radu = new Driver();
radu.goToClosestStation(fakeStation);

