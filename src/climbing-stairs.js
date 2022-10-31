var climbStairs = function (n) {

  let prevWaysCount = 1;
  let waysCount = 1;

  for (let s = n-2; s >= 0; s--) {
    let ways = waysCount + prevWaysCount;

    prevWaysCount = waysCount;
    waysCount = ways;
  }

  return waysCount;
};

module.exports = climbStairs;
