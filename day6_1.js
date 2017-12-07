const input = `11 11 13 7 0 15 5 5 4 4 1 1 7 1 15 11`;

const main = async () => {
  let memory = input.split(' ').map(Number);

  let lastStateStr = memory.join(' ');
  let log = [ lastStateStr ];
  let count = 0;

  while (log.indexOf(lastStateStr) >= count) {
    count++;
    // Find the position to reallocate
    let toReallocate = memory.reduce((a, b) => Math.max(a, b));
    let index = memory.indexOf(toReallocate);
    // Calculate how much we big the parts are
    const piece = Math.ceil(toReallocate / memory.length);
    // Reset current index
    memory[index] = 0;
    // Reallocate memory
    while (toReallocate > 0) {
      index++;
      if (index >= memory.length) index = 0;
      memory[index] += toReallocate < piece ? toReallocate : piece;
      toReallocate -= piece;
    }
    // save the new state and add it to the log
    lastStateStr = memory.join(' ');
    log.push(lastStateStr);
  }
  const solution = log.length - 1;
  return solution - log.indexOf(lastStateStr);
};

main().then(res => console.log(res));
