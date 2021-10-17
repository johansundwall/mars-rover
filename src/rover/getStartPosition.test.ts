import { getStartPositions } from './getStartPositions';

it('should split string and return x, y and direction', () => {
  expect(getStartPositions('1 5 N')).toStrictEqual({
    x: 1,
    y: 5,
    direction: 0,
  });
});
