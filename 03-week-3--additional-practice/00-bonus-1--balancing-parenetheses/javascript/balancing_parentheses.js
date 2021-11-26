function balancingParentheses(string) {
  //create two variables, one counts "(" and one counts ")"
  //iterate through the string, and count up the variables depending on right or left. 
  //subtract two variablesa and theresthe answers 


  let leftPara = 0
  let rightPara = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      leftPara++
    } else {
      rightPara++
    }
  }
  return Math.abs(leftPara - rightPara)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
