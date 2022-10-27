var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  const sizeX = grid.length;
  const sizeY = grid[0].length;

  const searchIsland = (grid, x, y) => {
    if (x < 0 || x >= sizeX || y < 0 || y >=sizeY || grid[x][y] === 0) return 0;
    grid[x][y] = 0;
    return (
      1 +
      searchIsland(grid, x + 1, y) +
      searchIsland(grid, x - 1, y) +
      searchIsland(grid, x, y + 1) +
      searchIsland(grid, x, y - 1)
    );
  };

  for (let x = 0; x < sizeX; x++) {
    for (let y = 0; y < sizeY; y++) {
      maxArea = Math.max(maxArea, searchIsland(grid, x, y));
    }
  }

  return maxArea;
};

console.log(
  6,
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
