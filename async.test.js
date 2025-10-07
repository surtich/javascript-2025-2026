import { describe, it, expect } from 'vitest';
import { asyncAdd, asyncProduct } from './async';

describe('asyncAdd', () => {
    it('should add two numbers asynchronously', (done) => {
        asyncAdd(2, 3, function (result) {
            expect(result).toBe(6);
            done();
        });
    });
});

describe('asyncProduct', () => {
    it('should multiply two numbers asynchronously', (done) => {
        asyncProduct(2, 3, (result) => {
            expect(result).toBe(6);
            done();
        });
    });
});
