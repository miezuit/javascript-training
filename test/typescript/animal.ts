interface Animal {
    name: string;
    speak(): string;
}

interface Pet {
    play(): void;
}

interface Robot {
    start(): boolean;
    stop(): boolean;
}

class RoboDog implements Animal, Pet, Robot {
    name: string;    
    started: boolean;
    constructor(name) {
        this.name = name;
    }
    speak(): string {
        return 'Woof! Woof';
    }
    play(): void {
        console.log('let me play with you');
    }
    start(): boolean {
        if(!this.started) {
            this.started = true;
            return true;
        }
        return false;
    }
    stop(): boolean {
        throw new Error("Method not implemented.");
    }
}

let lessie = new RoboDog('Lessie');

lessie.start();
console.log(lessie.speak());
lessie.play();