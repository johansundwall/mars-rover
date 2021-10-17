import { getBoundaries } from './plateau/getBoundaries';
import { createRovers } from './rover/createRovers';
import { executeInstructions } from './rover/executeInstructions';
import { Rover } from './rover/rover.types';
import { generateOutput } from './utils/generateOutput';

export const main = (input) => {
  const rovers = createRovers(input);
  const upperBoundaries = getBoundaries(input);

  const occupiedPositions = [];
  const crashedRovers = [];
  const finishedRovers = [];

  rovers.forEach((rover: Rover, index: number) => {
    try {
      const finishedRover = executeInstructions({
        rover, occupiedPositions, upperBoundaries, roverNumber: index,
      });
      occupiedPositions.push({ x: finishedRover.x, y: finishedRover.y });
      finishedRovers.push(finishedRover);
    } catch (err) {
      crashedRovers.push({ error: err, rover, index });
    }
  });

  if (crashedRovers.length) {
    console.error(crashedRovers); // iterate over and make more ready friendly
  }

  return generateOutput(finishedRovers);
};
