var rob = function (nums) {
  let robPrev = 0;
  let robCurr = 0;
  let robMax = 0;

  for (let i = 0; i < nums.length; i++) {
    robMax = Math.max(robCurr, robPrev + nums[i]);
    robPrev = robCurr;
    robCurr = robMax;
  }

  return robMax;
};

module.exports = rob;
