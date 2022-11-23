var merge = function (nums1, m, nums2, n) {
  let curr1 = 0;
  let curr2 = 0;

  while (nums1[nums1.length - 1] === 0 && nums1.length > m) {
    nums1.pop();
  }

  while (curr1 < m + n) {
    if (nums1[curr1] > nums2[curr2]) {
      const toAppend = [nums2[curr2], ...nums1.filter((_, ind) => ind >= curr1)];
      nums1.splice(curr1, toAppend.length, ...toAppend);
      curr2++;
    } else if (curr1 >= nums1.length && curr2 < n) {
      nums1.push(nums2[curr2]);
      curr2++;
    }
    curr1++;
  }

  return nums1;
};

module.exports = merge;
