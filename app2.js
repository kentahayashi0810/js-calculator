// inputの中身を更新する
const input = document.getElementById("resultBox");
function update(newValue) {
  input.value = newValue;
}

function append(btnValue) {
  const lastChar = input.value[input.value.length - 1];
  if (btnValue == "." && input.value.indexOf(".") !== -1) {
    alert("Period is already included.");
  } else if (
    (btnValue == "+" ||
      btnValue == "-" ||
      btnValue == "*" ||
      btnValue == "/") &&
    (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/")
  ) {
    alert("You can't add another operator after an operator");
  } else {
    if (input.value == 0) {
      input.value = btnValue;
    } else {
      input.value += btnValue;
    }
  }
}

function calc() {
  const currentFormula = input.value;
  const lastChar = currentFormula[currentFormula.length - 1];
  if (
    lastChar !== "+" &&
    lastChar !== "-" &&
    lastChar !== "*" &&
    lastChar !== "/"
  ) {
    try {
      const f = new Function("return " + currentFormula);
      update(f().toString());
    } catch (error) {
      update(error);
    }
  } else {
    alert("Please type in another number.");
  }
}
