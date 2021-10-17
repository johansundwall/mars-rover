import { executeInstructions } from './executeInstructions';

const defaultState = {
  rover: {
    x: 1,
    y: 1,
    direction: 0,
    instructions: 'LMLMRMMLM',
  },
  occupiedPositions: [],
  upperBoundaries: { x: 5, y: 5 },
  roverNumber: 0,
};
it('should mutate the direction if instruction is rotate left', () => {
  const result = executeInstructions({
    ...defaultState,
    rover: {
      ...defaultState.rover,
      instructions: 'L',
    },
  });
  expect(result.direction).toBe(270);
});

it('should mutate the direction if instruction is rotate right', () => {
  const result = executeInstructions({
    ...defaultState,
    rover: {
      ...defaultState.rover,
      instructions: 'R',
    },
  });
  expect(result.direction).toBe(90);
});

it('should mutate the Y position if instruction is move and direction is 0 DEG', () => {
  const result = executeInstructions({
    ...defaultState,
    rover: {
      ...defaultState.rover,
      instructions: 'M',
    },
  });

  expect(result.y).toBe(defaultState.rover.y + 1);
});

it('should mutate the Y position multiple times if instructions are move and direction is 0 DEG', () => {
  const result = executeInstructions({
    ...defaultState,
    rover: {
      ...defaultState.rover,
      instructions: 'MMM',
    },
  });

  expect(result.y).toBe(defaultState.rover.y + 3);
});

it('should mutate the X position if instruction is move and direction is 90 DEG', () => {
  const result = executeInstructions({
    ...defaultState,
    rover: {
      ...defaultState.rover,
      instructions: 'M',
      direction: 90,
    },
  });

  expect(result.x).toBe(defaultState.rover.x + 1);
});

it('should mutate the Y position multiple times if instructions are move and direction is 90 DEG', () => {
  const result = executeInstructions({
    ...defaultState,
    rover: {
      ...defaultState.rover,
      instructions: 'MMM',
      direction: 90,
    },
  });

  expect(result.x).toBe(defaultState.rover.x + 3);
});

it('should throw if position will be out of bounds', () => {
  expect(() => executeInstructions({
    ...defaultState,
    rover: {
      ...defaultState.rover,
      instructions: 'M',
      y: 5,
    },
  })).toThrow();
});

it('should throw if position will collide with parked rover', () => {
  expect(() => executeInstructions({
    ...defaultState,
    rover: {
      ...defaultState.rover,
      instructions: 'M',
    },
    occupiedPositions: [{ x: 1, y: 2 }],
  })).toThrow();
});
