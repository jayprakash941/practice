/**
 * Find islands not touching external border
 */
const assert = require('assert');

let grid = [
  [1, 1, 0, 0, 1, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
];

const islands = (grid) => {
  let visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (c > 0 && c < grid[0].length - 1 && r > 0 && r < grid.length - 1) {
        c = grid[0].length - 1;
      }
      getLandOnBorder(grid, r, c, visited);
    }
  }
  return grid;
};

const getLandOnBorder = (grid, r, c, visited) => {
  const rowInBound = 0 <= r && r < grid.length;
  const colInBound = 0 <= c && c < grid[0].length;
  if (!rowInBound || !colInBound) return;

  let pos = r + ',' + c;

  if (visited.has(pos)) return;

  visited.add(pos);

  if (grid[r][c] === 0) return;

  grid[r][c] = 0;

  getLandOnBorder(grid, r - 1, c, visited);
  getLandOnBorder(grid, r + 1, c, visited);
  getLandOnBorder(grid, r, c - 1, visited);
  getLandOnBorder(grid, r, c + 1, visited);
};

assert.deepEqual(islands(grid), [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]);
