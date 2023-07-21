Phrase Object (with palindrome detector)
This is an NPM module created in Learn Enough JavaScript by Oka Rowland.
The module can be used as follows:

$ npm install --global palindrome
$ vim test.js
let Phrase = require("palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
