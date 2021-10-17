import { RoverStartPosition } from './getStartPositions.types';
import { DirectionAsDegrees } from './helpers/DirectionAsDegrees';

export const getStartPositions = (inputString: string): RoverStartPosition => {
  const inputParts = inputString.split(' ');
  return {
    x: Number(inputParts[0]),
    y: Number(inputParts[1]),
    direction: DirectionAsDegrees[inputParts[2]],
  };
};
