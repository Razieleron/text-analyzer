Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: 
wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: 
wordCounter("          ");
Expected Output: 0

Test: "It should not count numbers as words."
Code:
wordCounter("hi there 77 19");
Expected Output: 2



Describe: numberOfOccurrencesInText()


Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red Red Red!";
numberOfOccurrencesInText(word, text);
Expected Output: 0



Describe: omitOffensiveWords()

Test: "It should return the string without the offensive word"
Code:
const text = "this color is zoinks so great"
const word = "zoinks"
omitOffensiveWords()
expected output: "this color is so great"

Test: "It should return ANY string without the offensive word"
Code:
const text = "::VARIABLE::"
const word = "zoinks"
expected output: "Text without the bad words"


Describe: boldPassage()

Test: "It should return null if no word or text is entered."
Code:
const text = "";
const word = "";
boldPassage(word, text);
Expected Output: null

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: <p>yo</p>

Test: "It should return a matching word in a strong tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong></p>

Test: "It should wrap words that match in strong tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong> there</p>


Describe: displayAndCount()
Test: "It should display 1 if there is only 1 of a particular word."
Code:
const word = "hello";
const text = "hello";
displayAndCount()
Expected Output: Hello : 1

function wordCount(text) {
    var words = text.split(" ");
    var wordCounts = [];
    words.forEach(function(word) {
        var found = false;
        for (var i = 0; i < wordCounts.length; i++) {
            if (wordCounts[i][0] === word) {
                wordCounts[i][1]++;
                found = true;
                break;
            }
        }
        if (!found) {
            wordCounts.push([word, 1]);
        }
    });
    return wordCounts;
}

