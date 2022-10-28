const orangesRotting = require("./rotten-oragnes");

test('Rotten oranges', () => {
  const testGrids = [
    [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ],
    [
      [0, 2],
      [2, 0],
    ],
  ];
  const expectedRotTime = [4, -1, 0];

  testGrids.forEach((_, ind) => {
    const rotTime = orangesRotting(testGrids[ind]);

    expect(rotTime).toEqual(expectedRotTime[ind]);
  });
});
