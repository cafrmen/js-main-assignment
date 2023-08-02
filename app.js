
// this function make the random cpu answer of rock, paper or scissors
const cpuAnswerEntry = [];
const humanAnswerEntry = [];
const answerOption = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    let cpuAnswer = Math.floor(Math.random() * 3);
    return cpuAnswer;
}
function humanAnswer() {
    let i = 0;
    let ans;
    while (i < 1) {
        if (i == 0) {
            ans = parseInt(prompt('Enter 0 for  "Rock" & Enter 1 for "Paper" & Enter 2 for "Scissors"', 0));
        }
        if (ans <= 3 && ans >= 0) {
            i++;
        }
    }
    return ans;
}

for (let j = 0; j < 5; j++) {
    let compAnswer = computerPlay();
    // alert(answerOption[compAnswer]);
    let Answe = humanAnswer();
    // alert(answerOption[Answe]);
    if (answerOption[Answe] == 'Scissors') {
        if (answerOption[compAnswer] == 'Rock') {
            alert('You choose Rock and Lost To Computer');
        }
        else if (answerOption[compAnswer] == 'Paper') {
            alert('You choose Paper and You Win');
        } else {
            alert('You choose Scissors and tie');
        }
    } else if (answerOption[Answe] == 'Rock') {
        if (answerOption[compAnswer] == 'Paper') {
            alert('You choose paper and you lost to computer');
        }
        else if (answerOption[compAnswer] == 'Scissors') {
            alert('You Win');
        } else {
            alert('You choose Rock and tie');
        }
    } else if (answerOption[Answe] == 'Paper') {
        if (answerOption[compAnswer] == 'Scissors') {
            alert('You Lost To Computer');
        }
        else if (answerOption[compAnswer] == 'Rock') {
            alert('You Win');
        } else {
            alert('You choose Paper and tie');
        }
    }
    cpuAnswerEntry.push(answerOption[compAnswer]);
    humanAnswerEntry.push(answerOption[Answe])
}


console.log(humanAnswerEntry);