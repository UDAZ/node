function fibonacci(position, memo = []) {
  if (position < 3) return 1;
  if (memo[position]) return memo[position];
  memo[position] =
    fibonacci(position - 1, memo) + fibonacci(position - 2, memo);
  return memo[position];
 }

 module.exports = fibonacci;