function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return arr
  }
  let minNum = Math.min(...arr)
  let index = arr.indexOf(minNum)
  arr.splice(index, 1)

  const result = selectionSortRecursive(arr)
  // console.log(selectionSortRecursive(arr))
  result.unshift(minNum)
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
