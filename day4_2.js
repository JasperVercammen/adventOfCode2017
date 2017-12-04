const input = `aa bb cc dd ee abcdef edcba
iix wj rojvbkk phrij ixi zuajnk tadv givslju ewj bda`;

const sortString = s => {
  return s.split('').sort().join('');
};
const main = () => {
  const solution = input.split('\n').reduce((valid, row) => {
    const words = row.split(' ').map(sortString);
    const filteredWords = words.filter((a, i) => words.indexOf(a) === i);
    if (words.length === filteredWords.length) valid++;
    return valid;
  }, 0);
  return solution;
};

console.log(main());
