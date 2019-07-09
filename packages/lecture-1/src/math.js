export function sum(a, b) {
  // TODO: write function to pass tests
  return (a + b);
}

export function powerWithClosure(exponent) {
  // TODO: write function to pass tests
  return function pow2(value) {
    return Math.pow(value, exponent);
  }
}
