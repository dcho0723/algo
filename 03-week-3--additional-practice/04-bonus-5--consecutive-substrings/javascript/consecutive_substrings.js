function consecutiveSubstrings(string) {
  // let returnArr = []
  // const newString = string.split("")
  // // console.log(newString)

  // newString.forEach((char, idx) => {
  //   returnArr.push(char)
  //   let fragment = char

  //   newString.slice(idx + 1).forEach((letter) => {
  //     fragment = fragment + letter
  //     returnArr.push(fragment)
  //   })
  // })
  // return returnArr

  let newArr = []
  for (let i = 0; i < string.length; i++) {
    let currentIdx = i;
    let newWord;
    while (currentIdx < string.length) {
      newWord = (newWord ? newWord : "") + string[currentIdx]
      currentIdx++
      newArr.push(newWord)
    }
  }
  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
