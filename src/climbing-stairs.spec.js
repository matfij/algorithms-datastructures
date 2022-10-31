const climbStairs = require('./climbing-stairs');

test('Climbing stairs', () => {
  const stairNumber = 20;
  const expectedCombinations = 10946;

  const combinations = climbStairs(stairNumber);

  expect(combinations).toEqual(expectedCombinations);
});
