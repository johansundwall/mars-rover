import { DirectionAsLetter } from '../rover/helpers/DirectionAsLetter';
import { Rover } from '../rover/rover.types';

export const generateOutput = (rovers: Rover[]) => rovers.map((rover) => `${rover.x} ${rover.y} ${DirectionAsLetter[rover.direction]}\n`).join('');
