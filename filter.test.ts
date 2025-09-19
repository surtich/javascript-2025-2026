import { filter } from './filter';
import { describe, it, expect } from 'vitest';


function isLongerThan2(x: string) : boolean {
    return x.length > 2;
}

function isEven(x: number) : boolean {
    return x % 2 == 0;
}

function isLessThan4(x: number) : boolean {
    return x < 4;
}

describe('filter', function() {
    it('should filter numbers less than 4', function() {
        expect(filter(isLessThan4, [1, 2, 3, 4, 5] )).toEqual([1, 2, 3]);
    });

    it('should filter even numbers', function() {
        expect(filter(isEven, [1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it('should filter strings longer than 2', function() {
        expect(filter(isLongerThan2, ['a', 'ab', 'abc', 'abcd'])).toEqual(['abc', 'abcd']);
    });

    it('should return empty array if no match', function() {
        expect(filter(function(x) { return false; }, [1, 2, 3])).toEqual([]);
    });

    it('should work with empty array', function() {
        expect(filter(isEven, [])).toEqual([]);
    });

    it('should not mutate the original array', function() {
        const arr = [1, 2, 3];
        filter(isEven, arr);
        expect(arr).toEqual([1, 2, 3]);
    });
});
