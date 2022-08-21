var squareSum = function (val) {
  var sum = 0;
  while (val / 10 > 0) {
    sum += (val % 10) * (val % 10);
    val = parseInt(val / 10);
  }
  return sum;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var ss = squareSum(n);
  var hash = {
    ss: 1,
  };
  while (ss > 1) {
    ss = squareSum(ss);
    if (hash[ss]) {
      return false;
    }
    hash[ss] = ss;
  }
  return true;
};

console.log(isHappy(19));
