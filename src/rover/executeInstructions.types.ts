import { Boundaries } from '../plateau/getBoundaries.types';
import { Rover } from './rover.types';

interface occupiedPosition {
  x: number;
  y: number;
}
export interface ExecuteInstructionsInput {
  rover: Rover;
  occupiedPositions: occupiedPosition[];
  upperBoundaries: Boundaries;
  roverNumber: number;
}
