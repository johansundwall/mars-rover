import { createRovers } from './createRovers';

it('should create rovers matching interface', () => {
  const instructions = 'LMLMLMLMM';
  const input = `5 5
  1 2 N
  ${instructions}
  `;
  expect(createRovers(input)).toStrictEqual([{
    x: 1,
    y: 2,
    direction: 0,
    instructions,
  },
  ]);
});

it('should create multiple rovers', () => {
  const instructions = 'LMLMLMLMM';
  const input = `5 5
  1 2 N
  ${instructions}
  2 1 S
  ${instructions}
  `;
  expect(createRovers(input)).toStrictEqual([{
    x: 1,
    y: 2,
    direction: 0,
    instructions,
  },
  {
    x: 2,
    y: 1,
    direction: 180,
    instructions,
  },
  ]);
});
