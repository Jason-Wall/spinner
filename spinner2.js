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