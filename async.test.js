import { asyncAdd, asyncProduct } from './async';
import { describe, it, expect } from 'vitest';

describe('asyncAdd', () => {
    it('should add two numbers asynchronously', (done) => {
        asyncAdd(2, 3, (result) => {
            console.log('Result of asyncAdd:', result);
            expect(result).toBe(8);
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
