class Hero {
    name: string;
    life: number;
    mana: number;
    constructor(name: string, life: number, mana: number) {
        this.name = name;
        this.life = life;
        this.mana = mana;
    }
    firePrimary(anotherHero: Hero): void {}
    fireSecondary(anotherHero: Hero): void {}
    receiveHit(energy: number): void {}
    isAlive(): boolean {
        return this.life > 0;
    }
}