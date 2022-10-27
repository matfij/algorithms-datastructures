const floodFill = require('./flood-fill');

test('Flood fill', () => {
  const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ];
  const startX = 1;
  const startY = 1;
  const newColor = 2;
  const expectedFilledImage = [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ];

  const filledImage = floodFill(image, startX, startY, newColor);

  expect(filledImage).toEqual(expectedFilledImage);
});
