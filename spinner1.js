const spinner = (count) => {
  let freq = 500;
  let revCount = 0;

  while (revCount < count) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, revCount * freq + (0 / 4 * freq));

    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, revCount * freq + (1 / 4) * freq);

    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, revCount * freq + (2 / 4) * freq);

    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write('\r\\   ');
    }, revCount * freq + (3 / 4) * freq);

    revCount++;
  };
  setTimeout(() => {
    process.stdout.write('\n');
  }, (count * freq))
};

spinner(5);