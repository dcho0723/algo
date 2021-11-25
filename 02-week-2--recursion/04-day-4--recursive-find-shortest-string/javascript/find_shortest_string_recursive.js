function findShortestStringRecursive(arr) {
  //create a variable that volds length of string
  //create variable that holds index of longest string
  // create a for loop
  // loop through each elemtn in aray, measuring the ;length of string
  //create if statement, if length of string is less than our varialbe, add that index to our variable. 
  //return the string
  let strLeng = arr[0].length
  let index = 0
  // for (let i = 0; i < arr.length; i++) {
  //   let curLength = arr[i].length
  //   if(curLength < strLeng) {
  //     index = i
  //     strLeng = curLength
  //   }
  // }
  // return arr[index]

  for (let str of arr) {
    let curLeng = str.length
    if(curLeng < strLeng) {
      index = arr.indexOf(str)
      strLeng = curLeng
    }
  }
  return arr[index]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
