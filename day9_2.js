fs = require('fs');

const getInput = () => {
  return new Promise(resolve => {
    fs.readFile('./day9_input.txt', 'utf8', (err, data) => {
      resolve(data);
    });
  });
};

const main = async () => {
  const input = await getInput();
  const filtered = input.replace(/!./g, '');
  const myRegex = /<([\s\S]*?)>/g;
  let garbage = 0;
  let result;
  while ((result = myRegex.exec(filtered)) !== null) {
    garbage += result[1].length;
    myRegex.lastIndex;
  }
  const solution = garbage;
  return solution;
};

main().then(res => console.log(res));
