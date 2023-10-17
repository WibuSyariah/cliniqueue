function sequenceExists(main, seq) {
  for (let i = 0; i < main.length; i++) {
    if (main[i] === seq[0]) {
      let found = true;
      for (let j = 1; j < seq.length; j++) {
        if (main[i + j] !== seq[j]) {
          found = false;
          break;
        }
      }
      if (found) return true;
    }
  }
  return false;
}

const main = [20, 7, 8, 10, 2, 5, 6];
console.log(sequenceExists(main, [7, 8]));   // true
console.log(sequenceExists(main, [8, 7]));   // false
console.log(sequenceExists(main, [7, 10]));  // false