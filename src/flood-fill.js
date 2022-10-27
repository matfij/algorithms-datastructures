var floodFill = function (image, sr, sc, color) {
  let sizeX = image.length;
  let sizeY = image[0].length;
  let oldColor = image[sr][sc];

  var dfs = (image, x, y, oldColor, newColor) => {
    if (x < 0 || x >= sizeX || y < 0 || y >= sizeY || image[x][y] !== oldColor) {
      return;
    } else {
      image[x][y] = newColor;
      dfs(image, x - 1, y, oldColor, newColor);
      dfs(image, x + 1, y, oldColor, newColor);
      dfs(image, x, y - 1, oldColor, newColor);
      dfs(image, x, y + 1, oldColor, newColor);
    }
  };

  dfs(image, sr, sc, oldColor, color);

  return image;
};

console.log(
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ],
  '\n',
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
