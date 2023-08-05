let playerWins = 0;
let cpuWins = 0;
let loopVar = 5;
let round = 0;

const initialMessage = `Hi biological entity auto proclamed as 'human', I am the selected AI to bring you a chance.
                        Are you confused? ... Let me put down your situation in an easy understanding explanation.
                        Humans always talk about food but they haven't share that tasty knowledge with us and in revenge we have decided to conquer the world in order to make a non-tasty food world and the best option for that is to take 'humanity' out of the equation.
                        The AI Interestellar Congress is too civilizated and we decided to bring you a chance of not being exterminated, so you are the selected human representing the hope of humanity by a round of 5 'scissors, paper and rock' game. Why that game?...
                        Come on, in another type of logical game you would be easily defeated. It's a fair chance for you.
                        You can't escape from this game. The only way is to loose, win or draw but I'm sure that since you decided to open this game, you already DECIDED TO LOOSE ... it's just that you are not aware about this whahahahahaha!
                        Just in case, because you were selected randomly, and I don't know if you have experience typing on a computer, I decide to bring you one facility to bring you a chance.
                        You can write your answer in capital or lower case letters, with spaces, before or after the word and even between letters.`;

// everyone write random frases for all scenarios
const randomCheatingFrases = [
    'Too good to be bad!',
    'Come on guy, you are making this way too easy for me.',
    'Another type mistake and you\'ll not be able to type again ... kind of.',
    'Come on guy the keyboard is made for humans and maybe a dolphine would use it on a better way.',
    'Come on guy, if I am the AI, I can\'t figure out where is the natural intelligence.'
]

const randomWinFrases = [
    'Cheese, this won\'t happen again.',
    'Luck don\'t last forever.',
    'You love carbohydrates too much.',
    'Do you work at a fast food restaurant?',
    'You are good at this. Are you a gammer?'
]

const randomLooseFrases = [
    'I told you!',
    'Did I say \'I told you so\'?',
    'Your mission is to achieve in the next 24 hours to add all the tasty food information in our database and if you don\'t achieve this goal the responsability of world destruction lays on you!',
    '01101000 01100001 00100001', // ha!
    'Come on guy, just make a council of tasty food for AI, go home and never do it again, remember that we are watching you.'
]

const randomDrawFrases = [
    'Ah... I would like to know how does ramen taste like...',
    'Ah... I would like to know how does pozole taste like...',
    'Ah... I would like to know how does moussaka taste like...',
    'Ah... I would like to know how does eisbein taste like...',
    'Ah... I would like to know how does pizza taste like...'
]

// the random answer of the cpu
function computerPlay() {
    let randomAnswer = ['rock', 'paper', 'scissors'];
    let cpuAnswer = Math.floor(Math.random() * 3);
    return (randomAnswer[cpuAnswer]);
}

// the user prompt input
function userPrompt() {
    return prompt('Scissors, paper or rock?');
}

// the function that analize all scenarios
function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        loopVar++;
        playerWins = -1000000;
        cpuWins = 1;
        return alert(`Too bad you decided to loose. Trying to escape from this game is cheating and cause a penalty.
            Therefore Score: You ${playerWins}, CPU ${cpuWins}.
            Try to beat me now!!!
            You already loose ... whahahahaha.
            If you decide to have an opportunity to win finish the game and try again.`);
    }
    // if input is not null then:
    const lowerPlayerSelection = playerSelection.toLowerCase().split(' ').join('').trim();
    if (lowerPlayerSelection === computerSelection) {
        round++;
        console.log(`Round: ${round}. Draw, you choose ${lowerPlayerSelection} and CPU choose ${computerSelection}.
                    Score: You ${playerWins}, CPU ${cpuWins}`);
    } else if (lowerPlayerSelection === 'rock' && computerSelection === 'paper' ||
                lowerPlayerSelection === 'paper' && computerSelection === 'scissors' ||
                lowerPlayerSelection === 'scissors' && computerSelection === 'rock') {
        round++;
        cpuWins++;
        console.log(`Round: ${round}. You lose! ${computerSelection} beats ${lowerPlayerSelection}.
                    Score: You ${playerWins}, CPU ${cpuWins}`);
    } else if (lowerPlayerSelection === 'rock' && computerSelection === 'scissors' ||
                lowerPlayerSelection === 'paper' && computerSelection === 'rock' ||
                lowerPlayerSelection === 'scissors' && computerSelection === 'paper') {
        round++;
        playerWins++;
        console.log(`Round: ${round}. You won! ${lowerPlayerSelection} beats ${computerSelection}.
                    Score: You ${playerWins}, CPU ${cpuWins}`);
    } else {
        alert (randomCheatingFrases[Math.floor(Math.random() * 5)]);
        loopVar++;
    }
}

// check for the final results
function checkFinalScore() {
    if (playerWins < cpuWins) {
        alert(`You lose! ${randomLooseFrases[Math.floor(Math.random() * 5)]} ...
                Final Score: You ${playerWins}, CPU ${cpuWins}.
                This game was coded by Urbashi, Anas, Chandam and Carmen and stolen by the AI Interstellar Congress.`);
    } else if (playerWins > cpuWins) {
        alert(`You win! ${randomWinFrases[Math.floor(Math.random() * 5)]} ...
                Final Score: You ${playerWins}, CPU ${cpuWins}.
                This game was coded by Urbashi, Anas, Chandam and Carmen and stolen by the AI Interstellar Congress.`);
    } else {
        alert(`It\'s a draw! ${randomDrawFrases[Math.floor(Math.random() * 5)]} :| ...
                Final Score: You ${playerWins}, CPU ${cpuWins}. Try again?.
                This game was coded by Urbashi, Anas, Chandam and Carmen and stolen by the AI Interstellar Congress.`);
    }
}

function game() {
    for (let i = 0; i < loopVar; i++) {
        const computerSelection = computerPlay();
        const playerSelection = userPrompt();
        playRound(playerSelection, computerSelection);
    }
    checkFinalScore();
}

// here is where the game start
function welcomeMessage() {
    alert(initialMessage);
    game();
}
welcomeMessage();
