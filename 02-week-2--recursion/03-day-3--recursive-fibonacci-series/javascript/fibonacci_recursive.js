function fibonacci(n) {
  let count;
  // let number = [0, 1];

  // let sum = number[0] + number[1];
  if (count < n) {
    // number = [number[1], sum];
    console.log(count)
    count++;
    fibonacci(n)
  }
  // return number[0]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
