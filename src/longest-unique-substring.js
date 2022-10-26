var lengthOfLongestSubstring = function (s) {
  let chars = {};
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    while (chars[s[i]]) {
      delete chars[s[start]];
      start++;
    }

    chars[s[i]] = s[i];
    maxLength = Math.max(maxLength, i+1 - start);
  }

  return maxLength;
};

console.log(3, lengthOfLongestSubstring('abcabcbb'));
console.log(4, lengthOfLongestSubstring('pwawkew'));
console.log(1, lengthOfLongestSubstring('rrrrrrr'));
