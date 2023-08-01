function isPalindrome(word) {
  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseStrings = reverseLetters.join('')


  if (word == reverseStrings){
    return true
  }else {
    return false
  }
    
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
