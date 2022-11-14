const containsDuplicate = require("./contains-duplicate");

test('Contains duplicate', () => {
  const testCases = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 2],
  ];
  const expectedResults = [false, true];

  testCases.forEach((_, i) => {
    result = containsDuplicate(testCases[i]);

    expect(result).toEqual(expectedResults[i]);
  });
});
