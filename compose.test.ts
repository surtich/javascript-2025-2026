import { describe, it, expect } from 'vitest';
import { compose } from './compose';
import { map } from './map';
import { filter } from './filter';

const isEven = (x: number) => x % 2 === 0;
const inc = (x: number) => x + 1;
const double = (x: number) => x * 2;

const curryMap = (xs: number[]) => map(inc, xs); 
const curryFilter = (xs: number[]) => filter(isEven, xs);

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
                curryFilter,
                curryMap
               )
;
        expect(f(xs)).toEqual([2, 6, 4]);
    });
});


