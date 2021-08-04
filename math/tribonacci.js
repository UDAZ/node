function memorize(fn) {
  const cache = [];
  return function (args) {
    if (cache[args]) return cache[args];
    const result = fn.call(this, args);
    cache[args] = result;
    return result;
  };
}

function slowTri(n) {
  if (n < 3) return n === 2 ? 1 : 0;
  return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
}

const tribonacci = memorize(slowTri);

module.exports = tribonacci;