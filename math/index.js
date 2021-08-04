var  {pythagorasC, pythagorasAB} = require("./pythagoras_theorem");
var  fibonacci = require("./fibonacci.js");
var  tribonacci = require("./tribonacci.js");
//console.log(pythagorasC(4,3)); ピタゴラスの斜め
//console.log(pythagorasAB(5,4)); ピタゴラスの一辺
//console.log(fibonacci(4)); 0は0、フィボナッチ数列
//console.log(tribonacci(2));トリボナッチ数列
//console.log(tribonacci(50));
//for(i=r=0;i<64;r+=(++i)**4);
//console.log(r)
/*function divisorSum(n, limit) {
  let c, r = n;
  if(n <= 0) return;
  c = Math.floor(n/2)+1;
  while(c--) {
    if(n%c === 0) r += c;
  }
  return r;
}

console.log(divisorSum(1234567890, 30000000)); // => 28
*/
/*var sum = 0;
for (var i = 1; i <= 30000; i++) {
  var ii = String(i);
if (i % 3 === 0 || ii.indexOf("3") >= 0) {
sum += i;
}
}
*/
console.log(sum);

var sum = 0;
for (var i = 1; i <= 700; i++) {
sum += i;
}
console.log(sum / 5000);