var num1 = 0;
var num2 = 0;
var operator = "";
var result = 0;

function number(num) {
  document.getElementById("displayOp").value += num;
}

function remove() {
  let val = document.getElementById("displayOp").value;
  document.getElementById("displayOp").value = parseInt(parseInt(val) / 10);
}

function reset() {
  document.getElementById("displayOp").value = null;
  document.getElementById("subdisplay").innerHTML = "";
}

function setOperator(op) {
  num1 = parseInt(document.getElementById("displayOp").value);
  operator = op;

  document.getElementById("subdisplay").innerHTML = num1 + " " + op;
  document.getElementById("displayOp").value = null;
}

function operate() {
  num2 = parseInt(document.getElementById("displayOp").value);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;
  }

  document.getElementById("subdisplay").innerHTML =
    num1 + " " + operator + " " + num2;
  document.getElementById("displayOp").value = result;
}

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
