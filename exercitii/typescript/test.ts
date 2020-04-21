
function sum(a: number, b: number): number {
    return a + b;
}

function hello(firstName: string, lastName?: string): void {
    console.log(`Hello ${firstName} ${lastName}!`);
}

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

function move(direction: Direction) {

}

hello('Radu');

let res = sum(10, 20);

console.log(res);