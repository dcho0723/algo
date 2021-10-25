function findShortestString(arr) {
  // let strLength = 10000
  // let indnum;
  // for (let i = 0; i < arr.length; i++) {
  //   let str = arr[i]
  //   if (str.length < strLength) {
  //     strLength = str.length
  //     indnum = arr.indexOf(str)
  //   }
  // }
  // return arr[indnum]
  
  // let shortest = arr[0]
  // arr.forEach(str => {
  //   if (str.length < shortest.length) shortest = str
  // })
  // return shortest

  /// why does it not return properly when i have {} after arrow function
  arr.reduce((shortest, string) =>
    string.length < shortest.length ? string : shortest
  );
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestString(["flower", "juniper", "lily", "dadelion"])
  );

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
