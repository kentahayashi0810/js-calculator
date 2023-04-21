const input = document.getElementById("resultBox");
let resultDisplay = "0";
let combinedNum = 0;
let inputValue = 0;
let total = 0;
let operator = [];
let lastChar;
let endWithOperator = false;

function displayNum(num) {
  endWithOperator = false;
  if (combinedNum == 0) {
    combinedNum = num;
    console.log("Combined Num is " + combinedNum);
  } else {
    combinedNum += num;
    console.log("Combined Num is " + combinedNum);
  }
  if (resultDisplay == 0) {
    resultDisplay = combinedNum;
  } else {
    resultDisplay += combinedNum;
  }
  inputValue = parseInt(combinedNum);
  input.value = resultDisplay;
  console.log("Current Input is " + inputValue);
  if (total == 0) {
    total += inputValue;
  }
  console.log("Total is " + total);
}

function reset() {
  clearDisplay();
  clearTotal();
  operator = [];
}

function clearDisplay() {
  combinedNum = 0;
  resultDisplay = 0;
  input.value = resultDisplay;
}
function clearTotal() {
  total = 0;
  console.log("Total is " + total);
}

function add() {
  // total += inputValue;
  console.log("Total is " + total);

  inputValue = 0;
  combinedNum = 0;
  console.log("Current Input is " + inputValue);

  if (!endWithOperator) {
    operator.push("+");
    resultDisplay += " + ";
  }
  console.log(operator);
  console.log((lastChar = operator[operator.length - 1]));

  input.value = resultDisplay;
  endWithOperator = true;
}

function subtract() {
  total -= inputValue;
  console.log("Total is " + total);

  inputValue = 0;
  combinedNum = 0;
  console.log("Current Input is " + inputValue);

  if (!endWithOperator) {
    operator.push("-");
    resultDisplay += " - ";
  }
  console.log(operator);
  input.value = resultDisplay;
  endWithOperator = true;
}

function multiply() {
  total *= inputValue;
  console.log("Total is " + total);

  inputValue = 0;
  combinedNum = 0;
  console.log("Current Input is " + inputValue);

  if (!endWithOperator) {
    operator.push("*");
    resultDisplay += " x ";
  }
  console.log(operator);
  input.value = resultDisplay;
  endWithOperator = true;
}

function divide() {
  total /= inputValue;
  console.log("Total is " + total);

  inputValue = 0;
  combinedNum = 0;
  console.log("Current Input is " + inputValue);

  if (!endWithOperator) {
    operator.push("/");
    resultDisplay += " ÷ ";
  }
  console.log(operator);
  input.value = resultDisplay;
  endWithOperator = true;
}

function showResult() {
  resultDisplay = 0;
  if (operator[0] == "+") {
    total += inputValue;
  } else if (operator[0] == "-") {
    total -= inputValue;
  } else if (operator[0] == "*") {
    total *= inputValue;
  } else {
    total /= inputValue;
  }
  input.value = total;
  console.log(total);
}
