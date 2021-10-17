import { DirectionAsDegrees } from './helpers/DirectionAsDegrees';
import { rotate } from './rotate';
import { Input } from './rover.types';

it('should return a normalized values', () => {
  expect(rotate(Input.Left, DirectionAsDegrees.N)).toBe(DirectionAsDegrees.W);
});

it('should rotate positive 90 degrees when input is right', () => {
  expect(rotate(Input.Right, DirectionAsDegrees.N)).toBe(DirectionAsDegrees.E);
});

it('should rotate negative 90 degrees when input is left', () => {
  expect(rotate(Input.Left, DirectionAsDegrees.S)).toBe(DirectionAsDegrees.E);
});

it('should throw when input is invalid', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(() => rotate('Up', 0)).toThrow();
});
