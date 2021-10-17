import { Boundaries } from '../plateau/getBoundaries.types';

export const outOfBounds = (
  x: number,
  y: number,
  upperBoundaries: Boundaries,
) => x < 0 || x > upperBoundaries.x || y < 0 || y > upperBoundaries.y;
