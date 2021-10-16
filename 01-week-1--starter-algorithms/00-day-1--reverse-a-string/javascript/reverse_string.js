function reverseString(str) {

  let newStr = ""
  for (let i = str.length-1; i >=0; i--) {
    newStr += str[i]
  }
  return newStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("expecting: 'sinned")
  console.log("=>", reverseString("dennis"))

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
