function fibonacci(num) {
  const fibonacciSequence = [0, 1];

  for (let i = 2; i < num; i++) {
    const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextFibonacci);
  }

  return fibonacciSequence.slice(0, num);
}

module.exports = fibonacci;
