class Hero {
    constructor(name, life, mana) {
        this.name = name;
        this.life = life;
        this.mana = mana;
    }
    firePrimary(anotherHero) {}
    fireSecondary(anotherHero) {}
    receiveHit(energy) {}
    isAlive() {
        return this.life > 0;
    }
}

export { Hero }