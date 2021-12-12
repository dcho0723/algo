function distinctPairSum(arr, k) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i]
    let secondNum = arr[i+1]
    if (firstNum + secondNum === k) {
      newArr.push([firstNum, secondNum])
    }
  }
  newArr.forEach(arr => {
    console.log(arr)
  })
  // return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
