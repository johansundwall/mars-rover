import { Boundaries } from './getBoundaries.types';

export const getBoundaries = (input: string): Boundaries => {
  const inputParts = input.split('\n');
  const boundaryParts = inputParts[0].split(' ');

  return {
    x: Number(boundaryParts[0]),
    y: Number(boundaryParts[1]),
  };
};
