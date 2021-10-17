import { mod } from './helpers/mod';
import { Input } from './rover.types';

export const rotate = (input: Input.Left | Input.Right, direction: number) => {
  if (input === Input.Left) {
    return mod(direction - 90, 360);
  }

  if (input === Input.Right) {
    return mod(direction + 90, 360);
  }

  throw new Error(`[Rover][rotate] > Invalid input ${input}`);
};
