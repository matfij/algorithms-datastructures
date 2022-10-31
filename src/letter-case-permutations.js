var letterCasePermutation = function (s) {
  let perms = [];

  const explore = (part, ind) => {
    console.log(part);
    if (part.length === s.length) {
      perms.push(part);
      return;
    }

    for (let i = ind; i < s.length; i++) {
      if (isNaN(s[i])) {
        part += s[i].toUpperCase();
        explore(part, i + 1);
        part = part.substr(0, part.length - 1);

        part += s[i].toLowerCase();
        explore(part, i + 1);
        part = part.substr(0, part.length - 1);
      } else {
        part += s[i];
        explore(part, i + 1);
        part = part.substr(0, part.length - 1);
      }
    }
  };
  explore('', 0);

  return perms;
};

console.log(letterCasePermutation('a1b2'));
