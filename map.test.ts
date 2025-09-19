import { map } from './map';
import { describe, it, expect } from 'vitest';

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

describe('map', function() {
    it('should apply increment to each element', function() {
        expect(map(increment, [1, 2, 3])).toEqual([2, 3, 4]);
    });

    it('should apply double to each element', function() {
        expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
    });

    it('should work with empty array', function() {
        expect(map(double,  [])).toEqual([]);
    });

    it('should work with strings', function() {
        expect(map(initial, ['ana', 'bea', 'carlos'])).toEqual(['A', 'B', 'C']);
    });

    it('should work with booleans', function() {
        expect(map(isPair, [2, 3, 4])).toEqual([true, false, true]);
    });

    it('should not mutate the original array', function() {
        const arr = [1, 2, 3];
        map(double, arr);
        expect(arr).toEqual([1, 2, 3]);
    });
});
