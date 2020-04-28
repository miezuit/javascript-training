import { Hero } from './hero.js';

class Superman extends Hero {
    firePrimary(anotherHero) {
        this.mana -= 5;
        anotherHero.receiveHit(30);
    }
    fireSecondary(anotherHero) {
        this.mana -= 1;
        anotherHero.receiveHit(5);
    }
    receiveHit(energy) {
        if (energy > 10) {
            this.life -= 0.1 * energy;
        }
    }
}

export { Superman }