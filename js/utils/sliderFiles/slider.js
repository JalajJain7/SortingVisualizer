function changeNumberValue() {
  document.getElementById("numberValue").value = number.value;
  n = number.value;
  init();
}

const slider = document.getElementById("speed");
const number = document.getElementById("number");

document.getElementById("number").oninput = function () {
  changeNumberValue();
};

document.getElementById("numberValue").oninput = function () {
  if (
    parseInt(document.getElementById("numberValue").value) <
    parseInt(number.attributes.min.value)
  ) {
    document.getElementById("numberValue").value = 5;
  }

  if (
    parseInt(document.getElementById("numberValue").value) >
    parseInt(number.attributes.max.value)
  )
    document.getElementById("numberValue").value = number.attributes.max.value;

  document.getElementById("number").value =
    document.getElementById("numberValue").value;

  n = document.getElementById("number").value;
  init();
};
// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function () {
//   slider.value = 250 - slider.value;
// };
