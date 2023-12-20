function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= num; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return prev;
}

module.exports = fibonacci;


const fibonacci = require('./path-to-fibonacci');

test('Example test case', () => {
  const result = fibonacci(1);

  // Update the expected value to 0 if that is the correct Fibonacci number for input 1
  expect(result).toBe(0);
});

