fs = require('fs');

const getInput = () => {
  return new Promise(resolve => {
    fs.readFile('./day7_input.txt', 'utf8', (err, data) => {
      resolve(data);
    });
  });
};

const main = async () => {
  const input = await getInput();
  const regex = /[a-z]{4,8}/g;
  const programs = input.match(regex);
  // If we filter every duplicte occurence, there will be only one root program left
  const topProgram = programs.filter(m => programs.lastIndexOf(m) === programs.indexOf(m));
  const solution = topProgram[0];
  return solution;
};

main().then(res => console.log(res));
