import { DirectionAsDegrees } from './helpers/DirectionAsDegrees';

export const move = ({ direction, y, x }) => {
  switch (direction) {
    case DirectionAsDegrees.N:
      return { direction, y: y + 1, x };

    case DirectionAsDegrees.S:
      return { direction, y: y - 1, x };

    case DirectionAsDegrees.E:
      return { direction, y, x: x + 1 };

    case DirectionAsDegrees.W:
      return { direction, y, x: x - 1 };

    default:
      throw new Error(`[rover][move] > Invalid direction ${direction}`);
  }
};
