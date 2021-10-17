import { RoverStartPosition } from './getStartPositions.types';

export interface Rover extends RoverStartPosition {
  instructions: string;
}

export enum Direction {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}

/**
 * Letter inputs.
 * The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90
 * degrees left or right respectively, without moving from its current spot.
 * 'M' means move forward one grid point, and maintain the same heading.
 */
export enum Input {
  Left = 'L',
  Right = 'R',
  Move = 'M',
}
