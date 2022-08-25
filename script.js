let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "⨉") {
      string += "*";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "÷") {
      string += "/";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "X²") {
      string = Math.pow(string, 2);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "√x") {
      string = Math.pow(string, 1 / 2);
      document.querySelector("input").value = string;
    } else {
      console.log(e.target.value);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
