var input_1 = document.getElementById("input1");
var input_2 = document.getElementById("input2");
var current = document.getElementById("current__clr");
var wrapper = document.getElementById("wrapper");

var setGradient = function () {
  wrapper.style.backgroundImage = `linear-gradient(to right, ${input_1.value}, ${input_2.value})`;

  current.textContent = wrapper.style.backgroundImage;
};

input_1.addEventListener("input", setGradient);
input_2.addEventListener("input", setGradient);
