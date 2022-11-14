var containsDuplicate = function (nums) {
  let numDict = {};
  let hasDup = false;

  nums.forEach((num) => {
    if (numDict[`${num}`]) {
      hasDup = true;
      nums.length = 0;
    } else {
      numDict[`${num}`] = 1;
    }
  });

  return hasDup;
};

module.exports = containsDuplicate;
