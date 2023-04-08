// QUESTION-4

function hoistingDemo() {
  console.log("value of var before declaration: ", thirdNum);
  var thirdNum = 32;
  console.log("value of let after declaration: ", thirdNum);

  console.log("value of let before declaration: ", firstNum);
  let firstNum = 45;
  console.log("value of let after declaration: ", firstNum);

  console.log("value of const before declaration: ", secondNum);
  const secondNum = 23;
  console.log("value of const after declaration: ", secondNum);
}

hoistingDemo();
