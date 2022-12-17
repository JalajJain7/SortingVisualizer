const n = 20;
const arr = [];

init();

function init() {
  for (let i = 0; i < n; i++) {
    arr[i] = Math.random();
    // arr[i] = arr[i] / 100;
  }
  createBars();
}

function play(which) {
  const copy = [...arr];

  document.getElementById("play1").disabled = true;
  document.getElementById("play1").style.backgroundColor = "grey";

  document.getElementById("play2").disabled = true;
  document.getElementById("play2").style.backgroundColor = "grey";

  document.getElementById("init").disabled = true;
  document.getElementById("init").style.backgroundColor = "grey";

  if (which == "selection") {
    const selectonMoves = selectionSort(copy);
    animateSelectionSort(selectonMoves);
  } else if (which == "bubble") {
    const bubbleMoves = bubbleSort(copy);
    animateBubbleSwaps(bubbleMoves);
  }
}

function buttonReset() {
  document.getElementById("play1").disabled = false;
  document.getElementById("play2").disabled = false;
  document.getElementById("init").disabled = false;

  document.getElementById("play1").style.backgroundColor = "rgb(0, 0, 0)";
  document.getElementById("play2").style.backgroundColor = "rgb(0, 0, 0)";
  document.getElementById("init").style.backgroundColor = "rgb(0, 0, 0)";
}

function createBars(move, where) {
  container.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${arr[i] * 100}%`;
    bar.classList.add("bar");

    if (move && move.indicies.includes(i)) {
      if (where == "selection") {
        if (move.type == "comp" && move.indicies[0] == i) {
          bar.style.backgroundColor = "red";
        } else if (move.type == "comp" && move.indicies[1] == i) {
          bar.style.backgroundColor = "blue";
        } else bar.style.backgroundColor = move.type == "swap" ? "red" : "blue";
      } else bar.style.backgroundColor = move.type == "swap" ? "red" : "blue";
    }
    container.appendChild(bar);
  }
}
