import { describe, expect, it } from 'vitest';
import { add, multiply } from '../../src/index';

// test add function in index
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
});

// Test multiply function in index
describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it('should multiply two numbers', () => {
    expect(multiply(3, 3)).toBe(9);
  });
});

it('toUpperCase', () => {
  const result = 'foobaR'.toUpperCase();
  expect(result).toMatchSnapshot();
});
