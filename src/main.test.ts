import { main } from './main';

describe('main function', () => {
  it('should match snapshot', () => {
    const input = `5 5
    1 2 N
    LMLMLMLMM
    3 3 E
    MMRMMRMRRM
    `;

    expect(main(input)).toMatchSnapshot();
  });

  it('should match snapshot when there has been colissions and call console.error', () => {
    global.console = {
      ...global.console,
      error: jest.fn(),
    };

    const input = `5 5
    1 2 N
    LMLMLMLMM
    1 2 N
    LMLMLMLMM
    `;

    expect(main(input)).toMatchSnapshot();
    expect(console.error).toHaveBeenCalled();
  });
});
