/* istanbul ignore */
import { readFileSync } from 'fs';
import { main } from './main';

const input = readFileSync('./input.md', 'utf8');
console.log(main(input));
