// import script.js file

function animateBubbleSwaps(moves) {
  if (moves.length == 0) {
    createBars();
    buttonReset();
    return;
  }
  const move = moves.shift();
  const [i, j] = move.indicies;

  if (move.type == "swap") [arr[i], arr[j]] = [arr[j], arr[i]];
  PlayNote(200 + arr[i] * 500);
  PlayNote(200 + arr[j - 1] * 500);

  createBars(move);
  setTimeout(function () {
    animateBubbleSwaps(moves);
  }, 200);
}

function bubbleSort(array) {
  const moves = [];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      //   moves.push({
      //     indicies: [i, i + 1],
      //     type: "comp",
      //   });
      if (array[i] > array[i + 1]) {
        moves.push({
          indicies: [i, i + 1],
          type: "swap",
        });
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return moves;
}
