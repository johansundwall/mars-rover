import { getStartPositions } from './getStartPositions';
import { Rover } from './rover.types';

export const createRovers = (inputString): Rover[] => {
  const input = inputString.split('\n');

  const rovers = [];
  for (let i = 1; i < input.length - 1; i += 2) {
    rovers.push({
      ...getStartPositions(input[i].trim()),
      instructions: input[i + 1].trim(),
    });
  }

  return rovers;
};
