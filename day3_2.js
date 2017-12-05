const input = 325489;

const getNextXY = (x, y, direction) => {
  switch (direction) {
    case 'right':
      return { newX: x + 1, newY: y };
    case 'left':
      return { newX: x - 1, newY: y };
    case 'up':
      return { newX: x, newY: y + 1 };
    case 'down':
      return { newX: x, newY: y - 1 };
  }
};

const getNextDirection = (spiral, x, y, direction) => {
  switch (direction) {
    case 'right':
      if (spiral[`${x},${y + 1}`] !== undefined) return direction;
      return 'up';
    case 'left':
      if (spiral[`${x},${y - 1}`] !== undefined) return direction;
      return 'down';
    case 'up':
      if (spiral[`${x - 1},${y}`] !== undefined) return direction;
      return 'left';
    case 'down':
      if (spiral[`${x + 1},${y}`] !== undefined) return direction;
      return 'right';
  }
};

const getValue = (spiral, x, y) => {
  return (
    (spiral[`${x - 1},${y}`] || 0) +
    (spiral[`${x + 1},${y}`] || 0) +
    (spiral[`${x},${y - 1}`] || 0) +
    (spiral[`${x},${y + 1}`] || 0) +
    (spiral[`${x - 1},${y - 1}`] || 0) +
    (spiral[`${x + 1},${y - 1}`] || 0) +
    (spiral[`${x + 1},${y + 1}`] || 0) +
    (spiral[`${x - 1},${y + 1}`] || 0)
  );
};

const main = () => {
  const spiral = { '0,0': 1 };
  let direction = 'right';
  let x = 0;
  let y = 0;
  let spirals = 0;
  let latestSum = 1;

  while (latestSum < input) {
    const { newX, newY } = getNextXY(x, y, direction);
    direction = getNextDirection(spiral, newX, newY, direction);
    latestSum = getValue(spiral, newX, newY);
    spiral[`${newX},${newY}`] = latestSum;
    x = newX;
    y = newY;
  }

  const solution = latestSum;
  return solution;
};

console.log(main());
