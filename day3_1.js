const input = `325489`;

const main = () => {
  let hookOfSquare = 1;
  // the end of each new surrounding spiral is the square of an odd number (1, 3, 5, 7,...), so find the correct spiral hook number
  for (hookOfSquare; hookOfSquare * hookOfSquare < input; hookOfSquare += 2) {}
  // Find the end of the spiral and the beginning of the spiral
  const outerHook = hookOfSquare * hookOfSquare;
  const innerHook = (hookOfSquare - 2) * (hookOfSquare - 2);

  // This is the length of the spiral with our number in it
  const surrounding = outerHook - innerHook;
  // One side of the spiral
  const lengthOfSide = surrounding / 4;

  let side = 0;
  let distanceofMiddle = 0;
  for (let i = 1; i <= 4; i++) {
    // Only calculate if we are on the correct side of the spiral
    if (!side && input <= innerHook + i * lengthOfSide) {
      side = i;
      // search the middle of the row
      const middleOfTheRow = innerHook + i * lengthOfSide - lengthOfSide / 2;
      // Calculate how far the input is from the middle of a row
      distanceofMiddle = Math.abs(middleOfTheRow - input);
    }
  }

  // Solution is the distance to the middle of a row and half the length of a side
  const solution = distanceofMiddle + lengthOfSide / 2;
  return solution;
};

console.log(main());
