const checkInclusion = require('./permutation-in-string');

test('Permutation in string', () => {
  const searchedStrings = ['abba', 'azbxbfa'];
  const wantedStrings = ['ab', 'axb'];
  const expectedResults = [true, false];

  searchedStrings.forEach((_, ind) => {
    const result = checkInclusion(wantedStrings[ind], searchedStrings[ind]);

    expect(result).toBe(expectedResults[ind]);
  });
});
