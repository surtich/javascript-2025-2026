import { describe, it, expect } from 'vitest';
import { compose } from './compose';
import { map } from './map';
import { filter } from './filter';
import { curry } from './curry';

const isEven = (x: number) => x % 2 === 0;
const inc = (x: number) => x + 1;
const double = (x: number) => x * 2;

const curryMap = curry(map); 
const curryFilter = curry(filter);

describe('compose()', function() {
    it('compose de múltiples funciones', function() {
        const f = compose(
            isEven,
            inc,
            double
        );
        expect(f(5)).toBe(false);
    });

    it('compose con map y filter', function() {
        const xs = [1, 2, 5, 8, 3];

        const f = compose(
                curryFilter(isEven),
                curryMap(inc)
               );
        expect(f(xs)).toEqual([2, 6, 4]);
    });

    it('compose map con map', function() {
        const xs = [1, 2, 5, 8, 3];
        const f = compose(
                curryMap(double),
                curryMap(inc)
               );
        expect(f(xs)).toEqual([4, 6, 12, 18, 8]);
    });

    it('compose map con map', function() {
        const xs = [1, 2, 5, 8, 3];
        const f = compose(double, inc);
        expect(map(f, xs)).toEqual([4, 6, 12, 18, 8]);
    });


    // añadir un test que use composición de map, filter y reduce
});


