var combine = function (n, k) {
  if (n === 1) return [[1]];

  let combinations = [];

  const explore = (part, ind) => {
    if (part.length >= k) {
      combinations.push([...part]);
      return;
    }

    for (let i = ind; i <= n; i++) {
      part.push(i);

      explore(part, i + 1);

      part.pop();
    }
  };

  explore([], 1);

  return combinations;
};

module.exports = combine;

console.log(combine(5, 3));
// [[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]]
