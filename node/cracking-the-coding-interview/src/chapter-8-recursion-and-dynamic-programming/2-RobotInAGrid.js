/**
 * Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns. The robot can
 * only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on
 * them. Design an algorithm to find a path for the robot from the top left to the bottom right.
 * Solution:
 */
const RobotInAGrid = (maze) => {
  if (!maze || !maze.length) return null;

  let path = [];

  let failedPoints = new Set();

  if (getPath(maze, maze.length - 1, maze[0].length - 1, path, failedPoints)) {
    return path;
  }

  return null;
};
// 0 - space, 1 obstacle
const getPath = (maze, row, col, path, failedPoints) => {
  // check if col or row is exhausted, or if it is blocker
  if (col < 0 || row < 0 || maze[row][col]) {
    return false;
  }

  // build row col index
  const p = `${row}x${col}`;

  // check if failedPoints has p
  if (failedPoints.has(p)) {
    return false;
  }

  // check if it is at origin
  const isAtOrigin = (row === 0 && col === 0);

  // if it is origin or if path for  col or row traverse returns true, add point to path
  if (isAtOrigin
    || getPath(maze, row, col - 1, path, failedPoints)
    || getPath(maze, row - 1, col, path, failedPoints)
  ) {
    path.push(p);
    return true;
  }

  failedPoints.add(p);
  return false;
};

module.exports = RobotInAGrid;