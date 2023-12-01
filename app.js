// Task #2

var word = prompt("Enter your Word:");
var reverse = "";
var length = word.length - 1;

console.log(length);

for (let i = length; i >= 0; i--) {
  reverse += word[i];
}

if (word.toLowerCase() === reverse.toLowerCase()) {
  alert(word + " Palindrome Word");
} else {
  alert(word + " Not Palindrome Word");
}

console.log(reverse);
