const answerOption = ['Rock', 'Paper', 'Scissors'];
const cpuAnswerEntry = [];
const humanAnswerEntry = [];

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function humanAnswer() {
  let ans;
  do {
    ans = parseInt(prompt('Enter 0 for "Rock", 1 for "Paper", or 2 for "Scissors"', 0));
  } while (isNaN(ans) || ans < 0 || ans > 2);

  return ans;
}

function getWinner(human, cpu) {
  if (human === cpu) {
    return 'tie';
  } else if ((human + 1) % 3 === cpu) {
    return 'You Win';
  } else {
    return 'You Lost To Computer';
  }
}

for (let j = 0; j < 5; j++) {
  const compAnswer = computerPlay();
  const humanAns = humanAnswer();
  
  const result = getWinner(humanAns, compAnswer);
  alert(result);

  cpuAnswerEntry.push(answerOption[compAnswer]);
  humanAnswerEntry.push(answerOption[humanAns]);
}

console.log(humanAnswerEntry);