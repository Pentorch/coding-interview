document.getElementById("btnReverse").onclick = function () {
  reverse();
};

String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }

  return this.substring(0, index) + replacement + this.substring(index + 1);
};

function reverseWord(word) {
  let wordLength = word.length;
  let reversedWord = word;
  for (let j = 0; j < wordLength / 2; j++) {
    let temp = reversedWord[j];
    let rightChar = word[wordLength - 1 - j];
    if (j === 0 && wordLength > 1 && word[j].toUpperCase() === word[j]) {
      temp = temp.toLowerCase();
      rightChar = rightChar.toUpperCase();
    }

    reversedWord = reversedWord.replaceAt(j, rightChar);
    reversedWord = reversedWord.replaceAt(wordLength - 1 - j, temp);
  }
  return reversedWord;
}

function reverse() {
  let text = document.getElementById("text").value;

  let splittedText = text.split(" ");

  let reversedWords = [];

  for (let i = 0; i < splittedText.length; i++) {
    let word = splittedText[i];

    let reversedWord = reverseWord(word);
    reversedWords.push(reversedWord);
  }

  document.getElementById("demo").innerHTML = reversedWords.join(" ");
}
