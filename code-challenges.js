const sumZero = (arr) => {
  let obj = {};
  let num = 0;
  let diff;

  for (let i = 0; i < arr.length; i++) {
    diff = num - arr[i];

    if (obj[diff]) {
      return true;
    } else {
      obj[arr[i]] = true;
    }
  }
  return false;
};

// console.log(sumZero([]));
// console.log(sumZero([1]));
// console.log(sumZero([1, 2, 3]));
// console.log(sumZero([1, 2, 3, -2]));

const uniqueChars = (string) => {
  let compareString = "";
  for (let i = 0; i < string.length; i++) {
    if (!compareString.includes(string[i])) {
      compareString += string[i];
    } else {
      return false;
    }
  }
  console.log(compareString);
  return true;
};

// console.log(uniqueChars("monday"));
// console.log(uniqueChars("moonday"));

const isPangram = (sentence) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let newSentence = sentence.toLowerCase().replace(regex, "");

  for (let i = 0; i < alphabet.length; i++) {
    if (newSentence.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// console.log(isPangram("I like cats, but not mice"));

const findLongestWord = (arrOfWords) => {
  let largestWordLength = arrOfWords[0].length;

  for (let i = 1; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length > largestWordLength) {
      largestWordLength = arrOfWords[i].length;
    }
  }
  return largestWordLength;
};

console.log(findLongestWord(["hi", "hello"]));
console.log(findLongestWord(["hi", "hello", "supercalifragelisticexpialidotious","dallin"]));
console.log(findLongestWord(["high", "hi"]));
