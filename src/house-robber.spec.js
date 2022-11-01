const rob = require("./house-robber");

test('House robber', () => {
  const moneyStoredInHouses = [2, 9, 10, 2, 15, 25, 1, 3, 4];
  const exepectedRobbedMoney = 41;

  const robbedMoney = rob(moneyStoredInHouses);

  expect(robbedMoney).toEqual(exepectedRobbedMoney);
});
