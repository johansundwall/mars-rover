import { getBoundaries } from './getBoundaries';

it('should return boundaries', () => {
  expect(getBoundaries('1 1')).toStrictEqual({
    x: 1,
    y: 1,
  });
});
