import { describe, it, expect } from 'vitest';
import { compose } from './compose';

describe('compose()', function() {
    it('compose de múltiples funciones', function() {
        const f = compose(
            (x: number) => x % 2 === 0,
            (x: number) => x + 1,
            (x: number) => x * 2
        );
        expect(f(5)).toBe(false);
    });
});


