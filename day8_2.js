fs = require('fs');

const getInput = () => {
  return new Promise(resolve => {
    fs.readFile('./day8_input.txt', 'utf8', (err, data) => {
      resolve(data);
    });
  });
};

const checkCondition = (a, condition, b) => {
  a = Number(a) || 0;
  b = Number(b);
  switch (condition) {
    case '==':
      return a == b;
    case '>':
      return a > b;
    case '<':
      return a < b;
    case '>=':
      return a >= b;
    case '<=':
      return a <= b;
    case '!=':
      return a != b;
  }
};

const main = async () => {
  const input = await getInput();
  const registers = {};
  const instructions = input.split('\n');
  const solution = instructions.reduce((highest, instruction) => {
    const [ register, operation, amount, _, registerCheck, condition, amountCheck ] = instruction.split(' ');
    if (checkCondition(registers[registerCheck], condition, amountCheck)) {
      registers[register] = (registers[register] || 0) + Number(operation === 'inc' ? amount : -amount);
      if (registers[register] > highest) return registers[register];
    }
    return highest;
  }, 0);
  console.log(registers);
  return solution;
};

main().then(res => console.log(res));
