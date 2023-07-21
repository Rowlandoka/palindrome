module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
    // return this.content;
  };

  // Return the letters in the content
  this.letters = function letters() {
    let theLetters = [];
    const letterRegex = /[a-z]/i;
    Array.from(this.content).forEach(function (character) {
      if (character.match(letterRegex)) {
        theLetters.push(character);
      }
    });
    return theLetters.join("");
    // for (let i = 0; i < this.content.length; i++) {
    //   let character = this.content.charAt(i);
    //   if (character.match(letterRegex)) {
    //     theLetters.push(character);
    //   }
    // }
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}
