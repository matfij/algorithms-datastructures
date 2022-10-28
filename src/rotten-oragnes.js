var orangesRotting = function (grid) {
  const sizeX = grid.length;
  const sizeY = grid[0].length;

  // check if simulation can end - at least one rotten, no isolated fruits
  let rottenFound = false;
  let noOranges = true;
  for (let x = 0; x < sizeX; x++) {
    for (let y = 0; y < sizeY; y++) {
      if (grid[x][y] === 2) {
        rottenFound = true;
      }
      if (grid[x][y] !== 0) {
        noOranges = false;
      }
    }
  }
  if (noOranges) return 0;
  if (!rottenFound) return -1;

  let simTime = 0;

  while (true) {
    let allRotten = true;
    let decayed = false;

    var tempGrid = JSON.parse(JSON.stringify(grid));

    for (let x = 0; x < sizeX; x++) {
      for (let y = 0; y < sizeY; y++) {
        if (grid[x][y] === 1) allRotten = false;

        if (grid[x][y] === 2) {
          if (x > 0 && grid[x - 1][y] === 1) {
            tempGrid[x - 1][y] = 2;
            decayed = true;
          }
          if (x + 1 < sizeX && grid[x + 1][y] === 1) {
            tempGrid[x + 1][y] = 2;
            decayed = true;
          }
          if (y > 0 && grid[x][y - 1] === 1) {
            tempGrid[x][y - 1] = 2;
            decayed = true;
          }
          if (y + 1 < sizeY && grid[x][y + 1] === 1) {
            tempGrid[x][y + 1] = 2;
            decayed = true;
          }
        }
      }
    }

    if (allRotten) return simTime;
    if (!decayed) return -1;

    simTime++;
    grid = [...tempGrid];
  }
};

module.exports = orangesRotting;
