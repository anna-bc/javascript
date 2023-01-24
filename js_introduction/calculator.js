// import readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// calculator taken from command line
let operator = "";
let num1 = 5;
let num2 = 5;

rl.question(
  "Which arithmetic operation do you want to perform? (+, -, *, /)",
  (answer) => {
    operator = answer;
    console.log("Your operator: " + operator);
    console.log(num1 + " " + operator + " " + num2);

    let result = 0;
    if (operator == "+") {
      console.log("Performing addition!");
      result = num1 + num2;
    }
    if (operator == "-") {
      console.log("Performing subtraction!");
      result = num1 - num2;
    }
    if (operator == "*") {
      console.log("Performing multiplication!");
      result = num1 * num2;
    }
    if (operator == "/") {
      console.log("Performing division!");
      result = num1 / num2;
    }
    console.log(num1 + " " + operator + " " + num2 + " = " + result);
    rl.close();
  }
);

