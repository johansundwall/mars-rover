import { cloneDeep } from "lodash";
import { collided } from "./collided";
import { ExecuteInstructionsInput } from "./executeInstructions.types";
import { mod } from "./helpers/mod";
import { move } from "./move";
import { outOfBounds } from "./outOfBounds";
import { Input, Rover } from "./rover.types";

export const executeInstructions = ({
  rover,
  occupiedPositions,
  upperBoundaries,
  roverNumber,
}: ExecuteInstructionsInput): Rover => {
  const newRover = cloneDeep(rover);
  newRover.instructions
    .split("")
    .forEach((instruction: string, index: number) => {
      if (instruction === Input.Left) {
        newRover.direction = mod(newRover.direction - 90, 360);
      }

      if (instruction === Input.Right) {
        newRover.direction = mod(newRover.direction + 90, 360);
      }

      if (instruction === Input.Move) {
        const { direction, x, y } = move({
          direction: newRover.direction,
          x: newRover.x,
          y: newRover.y,
        });

        if (outOfBounds(x, y, upperBoundaries)) {
          throw new Error(
            `Instruction ${instruction} (#${index + 1}) caused rover #${
              roverNumber + 1
            } to go out of bounds`
          );
        }

        if (collided(x, y, occupiedPositions)) {
          throw new Error(
            `Instruction ${instruction} (#${index}) caused rover ${roverNumber} to collide`
          );
        }

        newRover.direction = direction;
        newRover.x = x;
        newRover.y = y;
      }
    });

  return newRover;
};
