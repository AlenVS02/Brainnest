// Assignment (Main JavaScript Project):

        //a) Create a blank HTML document with a script tag (Hint: it is best practice to link an
        // external .js file). This game is going to be played completely from the console, so don’t
        // worry about putting anything else in there.

        // b) Your game is going to play against the computer, so begin with a function called
        // computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this
        // function in the game to make the computer’s play. Tip: use the console to make sure this
        // is returning the expected output before moving to the next step!

        // c) Write a function that plays a single round of Rock Paper Scissors. The function should
        // take two parameters - the playerSelection and computerSelection - and then return a
        // string that declares the winner of the round like so: "You Lose! Paper beats Rock"
        //      i. Make your function’s playerSelection parameter case-insensitive (so users can
        //         input rock, ROCK, RocK or any other variation). (Here’s a tip on how to do that)

        // d) Important note: you want to return the results of this function call, not console.log()
        // them. You’re going to use what you return later on, so let’s test this function by using
        // console.log to see the results:

        // e) Write a NEW function called game(). Call the playRound function inside of this one to
        // play a 5 round game that keeps score and reports a winner or loser at the end.
        //      i. Remember loops? This is a great opportunity to use one to play those five
        //         rounds:
        //     ii. At this point you should be using console.log() to display the results of each
        //         round and the winner at the end.
        //    iii. Use prompt() to get input from the user. Read the docs here.
        //     iv. Feel free to re-work your previous functions if you need to. Specifically, you
        //         might want to change the return value to something more useful.
        //      v. Feel free to re-work your previous functions if you need to. Specifically, you
        //         might want to change the return value to something more useful.

// a)

function getRandomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}


function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];

    let move = moves[getRandomNumber(0, moves.length - 1)];
    return move;
}


function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();

    let winCondition1 = playerSelection === 'rock' && computerSelection === 'scissors';
    let winCondition2 = playerSelection === 'paper' && computerSelection === 'rock';
    let winCondition3 = playerSelection === 'scissors' && computerSelection === 'paper';

    if (winCondition1 || winCondition2 || winCondition3) {
        return [`You win! ${playerSelection} beats ${computerSelection}`, true];
    } else if (playerSelection === computerSelection) {
        return ["It's a tie!", 'tie']
    }

    return [`You lose! ${computerSelection} beats ${playerSelection}`, false];
}

function game() {
    let welcomeMessage =
    "Welcome to Alen's Rock Paper and Scissors. You may choose between \"rock\", \"paper\", and \"scissors\"."
    alert(welcomeMessage);

    let scorePlayer = 0
    let scoreMachine = 0

    for (let i = 0; i < 5; i++) {
        let move = prompt("Choose your move:");
        let results = playRound(move);
        console.log(results)
        switch (results[1]) {
            case true:
                scorePlayer++;
            break;

            case false:
                scoreMachine++;
                break;

            case 'tie':
                break;
        }

        alert(`${results[0]} \n Score: ${scorePlayer} - ${scoreMachine}` )
    }

    if (scorePlayer > scoreMachine) {
        alert('You win! One more victory for humanity.')
    } else if (scorePlayer === scoreMachine){
        alert('You have reached a tie. Humans and machines remain equal...for now.')
    } else {
        alert('You lose! Fear the machine! The singularity is near.')
    }
}
