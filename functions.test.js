import { capitalize } from './functions';
import { reverseString } from './functions';
import { calculator } from './functions';
import { caesarCipher } from './functions';
import { analyzeArray } from './functions';

test('capitalize', () => {
  expect(capitalize('tEsTiNg a string')).toMatch(/Testing a string/);
});

test('reverseString', () => {
  expect(reverseString('testing')).toMatch(/gnitset/);
});

test('reverseString', () => {
  expect(reverseString('function that works')).toMatch(/skrow taht noitcnuf/);
});

test('calculator', () => {
  expect(calculator.add(13, 7)).toBe(20);
  expect(calculator.subtract(13, 7)).toBe(6);
  expect(calculator.divide(14, 7)).toBeCloseTo(2);
  expect(calculator.multiply(10, 7)).toBe(70);
});

test('caesarCipher', () => {
  expect(caesarCipher('hello', 3)).toMatch(/khoor/);
  expect(caesarCipher('working', 5)).toMatch(/btwpnsl/);
  expect(caesarCipher('xyz', 2)).toMatch(/zab/);
});

test('analyzeArray', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
