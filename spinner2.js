const spinner = (count) => {
  let freq = 500;
  let revCount = 0;

  const spinArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  const spinArrLen = spinArr.length;

  while (revCount < count) {

    for (let i = 0; i < spinArrLen; i++) {
      setTimeout(() => {
        process.stdout.write(spinArr[i]);
      }, revCount * freq + (i / spinArrLen * freq));
    };

    revCount++;
  };

  setTimeout(() => {
    process.stdout.write('\n');
  }, (count * freq))

};

spinner(5);





    // setTimeout(() => {
    //   process.stdout.write('\r|   ');
    // }, revCount * freq + (0 / 4 * freq));

    // setTimeout(() => {
    //   process.stdout.write('\r/   ');
    // }, revCount * freq + (1 / 4) * freq);

    // setTimeout(() => {
    //   process.stdout.write('\r-   ');
    // }, revCount * freq + (2 / 4) * freq);

    // setTimeout(() => {
    //   // Need to escape the backslash since it's a special character.
    //   process.stdout.write('\r\\   ');
    // }, revCount * freq + (3 / 4) * freq);

    // revCount++;