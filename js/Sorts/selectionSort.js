function animateSelectionSort(moves) {
  if (moves.length == 0) {
    createBars();
    buttonReset();
    return;
  }
  const move = moves.shift();
  const [i, j] = move.indicies;

  if (move.type == "swap") [arr[i], arr[j]] = [arr[j], arr[i]];

  PlayNote(200 + arr[i] * 500);
  PlayNote(200 + arr[j] * 500);

  createBars(move, "selection");
  setTimeout(function () {
    animateSelectionSort(moves);
  }, 200);
}

function selectionSort(array) {
  const moves = [];
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      moves.push({
        indicies: [min, j],
        type: "comp",
      });
      if (array[j] < array[min]) {
        min = j;
      }
    }
    moves.push({
      indicies: [min, i],
      type: "swap",
    });
    [array[min], array[i]] = [array[i], array[min]];
  }
  return moves;
}
