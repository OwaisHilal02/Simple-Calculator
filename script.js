const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const num1EL = document.querySelector("#num1");
const num2EL = document.querySelector("#num2");
const resultEL = document.querySelector("#result");

function calculate(operations) {
  const num1 = Number(num1EL.value);
  const num2 = Number(num2EL.value);
  if (num1EL.value === "" || num2EL.value === "") {
    resultEL.textContent = "Please Enter Valid Numbers";
  } else if (isNaN(num1) || isNaN(num2)) {
    resultEL.textContent = "Please Enter Valid Numbers";
  } else {
    let result;
    switch (operations) {
      case "add":
        result = num1 + num2;
        break;
      case "sub":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          result = "Undefined";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "";
        break;
    }
    resultEL.textContent = result;
  }
}

addBtn.addEventListener("click", () => {
  calculate("add");
});

subBtn.addEventListener("click", () => {
  calculate("sub");
});

multiplyBtn.addEventListener("click", () => {
  calculate("multiply");
});

divideBtn.addEventListener("click", () => {
  calculate("divide");
});
