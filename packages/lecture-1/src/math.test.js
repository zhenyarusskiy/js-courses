import { sum, powerWithClosure } from './math';

describe('sum', () => {
  test('1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  // TODO: test edgecases of `sum` function (and modify function)
});

describe('powerWithClosure', () => {
  test('2 in 2 exponent to equal 4', () => {
    const pow2 = powerWithClosure(2);
    expect(pow2(2)).toBe(4);
  });

  // TODO: test edgecases of `powerWithClosure` function (and modify function)
});
