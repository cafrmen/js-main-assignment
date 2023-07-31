// this function make the random cpu answer of rock, paper or scissors
function computerPlay() {
    let randomAnswer = ['Rock', 'Paper', 'Scissors'];
    let cpuAnswer = Math.floor(Math.random() * 3);
    return (randomAnswer[cpuAnswer]);
}
console.log(computerPlay);