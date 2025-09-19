function incrementArray(xs: number[]): number[] {
    let ys: number[] = [];
    for (let i = 0; i < xs.length; i++) {
        ys[i] = xs[i] + 1;
    }
    return ys;
}

function doubleArray(xs: number[]): number[] {
    let ys: number[] = [];
    for (let i = 0; i < xs.length; i++) {
        ys[i] = xs[i] * 2;
    }
    return ys;
}

function isPairArray(xs: number[]): boolean[] {
    let ys: boolean[] = [];
    for (let i = 0; i < xs.length; i++) {
        ys[i] = xs[i] % 2 == 0;
    }
    return ys;
}


function map<X,Y>(f: (x: X) => Y, xs: X[]): Y[] {
    let ys: Y[] = [];
    for (let i = 0; i < xs.length; i++) {
        ys[i] = f(xs[i]);
    }
    return ys;
}

function increment(x: number): number {
    return x + 1;
}

function double(x: number): number {
    return x * 2;
}

function isPair(x: number): boolean {
    return x % 2 == 0;
}


function initial(string: string): string {
    return string[0].toUpperCase();
}


let xs = [4, 6, 5, 1, 2, 3];
console.log(map(double, xs));
console.log(map(isPair, xs));
console.log(map(increment, xs));
console.log(map(initial, ["ana", "juan", "pepe"]));

console.log(xs.map(increment));
console.log(xs.map(double));
console.log(xs.map(isPair));
console.log(["ana", "juan", "pepe"].map(initial));

// ["ana", "juan", "pepe"] -> ["A", "J", "P"]
// [4, 6, 5, 1, 2, 3] -> [5, 7, 6, 2, 3, 4]
// [4, 6, 5, 1, 2, 3] -> [8, 12, 10, 2, 4, 6]
// [4, 6, 5, 1, 2, 3] -> [true, true, false, false, true, false]