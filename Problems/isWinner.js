function scores(player) {
  let score = 0;
  for (let i = 0; i < player.length; i++) {
    if (player[i - 1] == 10 || player[i - 2] == 10) {
      score += player[i] * 2;
    } else {
      score += player[i];
    }
  }
  return score;
}

function isWinner(player1, player2) {
  let sumOfPlayer1 = scores(player1);
  let sumOfPlayer2 = scores(player2);
  console.log(sumOfPlayer1);
  console.log(sumOfPlayer2);
  if (sumOfPlayer1 > sumOfPlayer2) {
    return 1;
  } else if (sumOfPlayer1 < sumOfPlayer2) {
    return 2;
  } else {
    return 0;
  }
}

console.log(isWinner([10, 2, 2, 3], [3, 8, 4, 5]));
