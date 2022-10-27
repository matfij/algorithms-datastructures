const lengthOfLongestSubstring = require('./longest-unique-substring');

test('Longest unique substring', () => {
  const testString = 'okfqoekfoqfqfpefmqe formgomfqpmffwf';
  const expectedLength = 8;

  const longestSubstring = lengthOfLongestSubstring(testString);

  expect(longestSubstring).toBe(expectedLength);
});
