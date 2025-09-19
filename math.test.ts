import { describe, it, expect } from 'vitest';
import { sum } from './math';

describe('sum()', function() {
    it('suma dos números', function() {
        expect(sum(1, 2)).toBe(3);
    });
});


