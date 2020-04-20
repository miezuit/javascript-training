
function add(a: number, b: number): number {
    return a + b;
}

function addMulti(a: number, b: number, c?: number) {
    return a + b + c;
}

console.log(addMulti(1, 2, 3));