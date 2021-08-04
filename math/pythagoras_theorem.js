var pythagorasC = function (a, b){
  return (Math.sqrt(a ** 2 + b ** 2));
};
var pythagorasAB = function (c, ab){
  return (Math.sqrt((c ** 2) - (ab ** 2)));
};

module.exports = {pythagorasC, pythagorasAB};