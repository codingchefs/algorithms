/**
 * Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns. The robot can
 * only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on
 * them. Design an algorithm to find a path for the robot from the top left to the bottom right.
 * Solution:
 */
const RobotInAGrid = (maze) => {
  if (!maze || !maze.length) return null;

  const path = [];
  const failedPoints = new Set();
  if (getPath(maze, maze.length - 1, maze[0].length - 1, path, failedPoints)) {
    return path;
  }

  return null;
};

// 0 - space, 1 obstacle
const getPath = (maze, row, col, path, failedPoints) => {
  // check if row or column is less than zero or a obstacle is hit
  if (row < 0 || col < 0 || maze[row][col]) {
    return false;
  }

  // check if point has no path from cache
  const point = `${row}x${col}`;
  if (failedPoints.has(point)) {
    return false;
  }

  // check if it is at origin
  const isAtOrigin = (row === 0 && col === 0);

  if (isAtOrigin ||
    getPath(maze, row, col - 1, path, failedPoints) ||
    getPath(maze, row - 1, col, path, failedPoints)) {
    path.push(point);
    return true;
  }

  failedPoints.add(point);
  return false;
};

module.exports = RobotInAGrid;