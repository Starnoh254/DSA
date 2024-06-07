function fibonacci(n, memo = {}) {
  const sequence = [0, 1, 1];
  if (n <= 3) {
    return sequence[n - 1];
  } else {
    if (memo[n]) {
      return memo[n];
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
}

function fibonacciSequence(n, memo = { 1: [0], 2: [0, 1] }) {
    if(n == 0){
        return []
    }
    if (memo[n]) {
      return memo[n];
    }
    let seqMinusOne = fibonacciSequence(n - 1 , memo)
    let nextValue = seqMinusOne[seqMinusOne.length - 1] + seqMinusOne[seqMinusOne.length - 2]

    memo[n] = [ ...seqMinusOne , nextValue]
    return memo[n]
  }


console.log(fibonacci(30));
console.log(fibonacciSequence(30));
