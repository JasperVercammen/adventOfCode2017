fs = require('fs');

const getInput = () => {
  return new Promise(resolve => {
    fs.readFile('./day5_input.txt', 'utf8', (err, data) => {
      resolve(data);
    });
  });
};

const main = async () => {
  const input = await getInput();
  const maze = input.split('\n').map(Number);
  let index = 0;
  let count = 0;
  while (maze[index] !== undefined) {
    const tmpIndex = index;
    index = maze[index] + index;
    maze[tmpIndex] = maze[tmpIndex] + 1;
    count++;
  }
  const solution = count;
  return solution;
};

main().then(res => console.log(res));
