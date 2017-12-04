const input = `nyot babgr babgr kqtu kqtu kzshonp ylyk psqk
iix ewj rojvbkk phrij iix zuajnk tadv givslju ewj bda`;

const main = () => {
  const solution = input.split('\n').reduce((valid, row) => {
    const words = row.split(' ');
    const filteredWords = words.filter((a, i) => words.indexOf(a) === i);
    if (words.length === filteredWords.length) valid++;
    return valid;
  }, 0);
  return solution;
};

console.log(main());
