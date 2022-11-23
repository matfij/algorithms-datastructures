const merge = require('./merge-sort');

test('Merge sort', () => {
  const arr1 = [1, 2, 3, 0, 0, 0];
  const len1 = 3;
  const arr2 = [2, 5, 6];
  const len2 = 3;
  const expectedMergedArr = [1, 2, 2, 3, 5, 6];

  const mergedArr = merge(arr1, len1, arr2, len2);

  expect(mergedArr).toEqual(expectedMergedArr);
});
