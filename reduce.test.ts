import { describe, it, expect } from 'vitest';
import { reduce } from './reduce';

function sum(a: number, b: number): number {
    return a + b;
}

function increment(x: number): number {
    return x + 1;
}


function numberOfEvens(acc: number, x: number): number {
    return x % 2 === 0 ? acc + 1 : acc;
}

function acronym(acc: string, x: string): string {
    return acc + x[0].toUpperCase();
}

function longerString(acc: string, x: string): string {
    return x.length > acc.length ? x : acc;
}


function map<X, Y>(f: (x: X) => Y, xs: X[]): Y[] {
    let init: Y[] = [];
    function g(acc: Y[], x:X): Y[] {        
        return [...acc, f(x)];
    }

    return reduce(g, init, xs);
}


function filter<X>(f: (x: X) => boolean, xs: X[]): X[] {
    let init: X[] = [];
    function g(acc: X[], x: X): X[] {     
        return f(x) ? acc.concat(x) : acc;
    }
    return reduce(g, init, xs);
}

describe('reduce', function() {
    it('suma de los elementos de un array', function() {
        expect(reduce(sum, 0, [1, 2, 3])).toBe(6);
    });
 
    it('número de elementos pares en un array', function() {
        expect(reduce(numberOfEvens, 0, [1, 2, 3, 4])).toBe(2);
    });

    it('acrónimo de un array de strings', function() {
        expect(reduce(acronym, '', ['as', 'soon', 'as', 'possible'])).toBe('ASAP');
    });

    it('string más largo en un array de strings', function() {
        expect(reduce(longerString, '', ['Java', 'JavaScript', 'TypeScript'])).toBe('JavaScript');
    });

    it('map usando reduce', function() {
        expect(map(increment, [1, 2, 3])).toEqual([2, 3, 4]);
    });

    it('filter usando reduce', function() {
        expect(filter((x) => x % 2 === 0, [1, 2, 3, 4])).toEqual([2, 4]);
    });

});


