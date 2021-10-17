export const collided = (x, y, occupiedPositions) => occupiedPositions.some(
  (occupiedPosition) => occupiedPosition.x === x && occupiedPosition.y === y,
);
