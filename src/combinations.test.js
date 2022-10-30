const combine = require("./combinations");

test('Combinations', () => {
  const combinationRange = 5;
  const combinationSize = 3;
  const expectedCombinations = [
    [1, 2, 3],
    [1, 2, 4],
    [1, 2, 5],
    [1, 3, 4],
    [1, 3, 5],
    [1, 4, 5],
    [2, 3, 4],
    [2, 3, 5],
    [2, 4, 5],
    [3, 4, 5],
  ];

  const combinations = combine(combinationRange, combinationSize);

  expect(combinations).toEqual(expectedCombinations);
});
