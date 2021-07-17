function fibonacci(max) {
  let fibonacciSequence = [0, 1];
  for (let i = 2; i < max; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
  }
  return fibonacciSequence;
}
console.log(fibonacci(15));