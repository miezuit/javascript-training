class Hero {
    name: string;
    life: number;
    mana: number;
    firePrimary(anotherHero: Hero): void { }
    fireSecondary(anotherHero: Hero): void { }
    receiveHit(energy: number) { }
    isAlive() {
        return this.life > 0;
    }
}
