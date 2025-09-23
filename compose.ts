function inc(x: number): number {
    return x + 1;
}

function double(x: number): number {
    return x * 2;
}

function isEven(x: number): boolean {
    return x % 2 == 0
}

function compose<X, Y, Z>(g: (y: Y) => Z, f: (x: X) => Y): (x:X)  => Z {
    return function(x: X) {
        return g(f(x))
    }
}

function pipe<X, Y, Z>(f: (x: X) => Y, g: (y: Y) => Z): (x:X)  => Z {
    return function(x: X) {
        return g(f(x))
    }
}

// crear un compose de múltiples funciones


console.log(inc(double(4)));
console.log(compose(inc, double)(4));
console.log(pipe(double, inc)(4));
console.log(isEven(inc(4)));