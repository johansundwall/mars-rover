# Introduction
## Mars Rover technical Challenge

The problem below requires some kind of input. You are free to implement any mechanism for feeding input into your solution (for example, using hard coded data within a unit test). You should provide sufficient evidence that your solution is complete by, as a minimum, indicating that it works correctly against the supplied test data

## Get started
First, install dependencies by running 
```
npm install
```
Then build the project by running
```
npm run build
```

For a quick test, run 
```
npm start
``` 
this will produce output based on the input.md file. The output will be visible in the console.

The input.md file is expected to be structured with a minimum of 3 lines.
The first line denoting the plateau size, the second line denoting the start position and direction of the rover and the third line denoting the instructions as a sequence of letters. The instructions can either be L, R or M.
L and R will rotate the rover left or right without moving it. M will move the rover foward 1 in the direction it is facing.

Multiple rovers can be added by adding more lines of start positions and instructions.
Rovers can collide with the boundaries and it will cause and error.
Rovers can also collide with each other and will also cause and error.

Rovers will complete all of their moves one by one.

To run tests run: `npm run test`

