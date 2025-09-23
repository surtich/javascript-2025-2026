// sumArray([1,2,3]) -> 6

// numberOfEvens([1,2,3,4]) -> 2

// acronym(['As', 'Soon', 'As', 'Possible']) -> 'ASAP'

// function reduce()


export function reduce<T,U>(f: (acc: U, x: T) => U, initial: U, xs: T[]): U {
    let acc = initial;
    for (const x of xs) {
        acc = f(acc, x);
    }
    return acc;
}