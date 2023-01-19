// Utility Logic
function isEmpty(testString) {
  return (testString.trim().length === 0);
}
// Business Logic
function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    if (!Number(word)) {
    wordCount++;
  }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// MAGIC STUFF TO COUNT WORDS
function wordCount(text) {
  // hi hi bye bye hi
  var wordsArray = text.split(" ");
  var wordCounts = {};
  for (var i = 0; i < wordsArray.length; i++) {
    // i = 0.  i < 5 then add 1 to i.  once i = 5, we no more add to i
      if (wordCounts[wordsArray[i]] === undefined) {
          wordCounts[wordsArray[i]] = 1;
          // if we haven't encountered a value located in a particular index before, we set it's value to 1
      } else {
          wordCounts[wordsArray[i]]++;
          // if we have encountered a particular value before, but this is a new iteration of that value, we increment the previous number assigned to that "value" by 1
          // now the i of 'hi' is 2
      }
  }
  return wordCounts;
}


//

function omitOffensive() {
const input = ["select from table order by asc limit 10 no binding"]
const wordsToExclude = new Set(['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop']);
const words = input[0].split(' ').filter(word => !wordsToExclude.has(word));
words.join(" ")
return words
}

// UI Logic
function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;

  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}
window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}
