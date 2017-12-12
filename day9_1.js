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
  let filtered = input.replace(/!./g, '');
  filtered = filtered.replace(/<([\s\S]*?)>/g, '');
  filtered = filtered.replace(/,/g, '');
  const result = filtered.split('').reduce(({ score, depth }, x) => {
    if (x === '{') return { score, depth: depth + 1 };
    return { score: score + depth, depth: depth - 1 };
  }, { score: 0, depth: 0 });

  const solution = result.score;
  return solution;
};

main().then(res => console.log(res));
