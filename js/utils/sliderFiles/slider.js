var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  console.log(slider.value);
};