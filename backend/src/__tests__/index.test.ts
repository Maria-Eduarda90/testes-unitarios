import { double, concat } from '../index';

describe('testing index file', () => {
    test('double function', () => {
        expect(double(5)).toBe(10);
    });

    test('concat function', () => {
        expect(concat('Maria', ' ', 'Eduarda')).toBe('Maria Eduarda');
    });
});