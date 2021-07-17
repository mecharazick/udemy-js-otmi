function fibonacci(max) {
  let fibo = [0, 1];
  calcFibo(max);

  function calcFibo(max) {
    if (max === 1) return fibo[max];
    fibo[max] = calcFibo(max - 1) + fibo[max - 2];
    return fibo[max];
  }
  return fibo;
}

// function fibonacci(max) {
//   let fibonacciSequence = [0, 1];
//   for (let i = 2; i < max; i++) {
//     fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
//   }
//   return fibonacciSequence;
// }
