const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    // Function to
    const playGame = () => {
        const kingBtn = document.querySelector('.king');
        const citizenBtn = document.querySelector('.citizen');
        const slaveBtn = document.querySelector('.slave');
        const playerOptions = [kingBtn, citizenBtn, slaveBtn];
        const computerOptions = ['king', 'citizen', 'slave']

        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                this.style.opacity = 1
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${3 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins
                winner(this.innerText, computerChoice)

                // Calling gameOver function after 5 moves
                if (moves == 3) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }

    // Function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = " Tie...King's card was: " + computer
        }
        else if (player == 'slave') {
            if (computer == 'citizen') {
                result.textContent = 'King Won with: ' + computer;
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = "You won... King's card was: " + computer;
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'citizen') {
            if (computer == 'king') {
                result.textContent = 'King Won with: ' + computer;
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = "You won... King's card was: " + computer;
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'king') {
            if (computer == 'slaves') {
                result.textContent = 'King Won with: ' + computer;
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = "You won... King's card was: " + computer;
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // Function to run when game is over
    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        const nextBtn = document.querySelector('.next');


        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won ready for the next room? '
            result.style.color = 'grey';
            nextBtn.innerText = 'Next Room';
            nextBtn.style.display = 'flex'
            nextBtn.addEventListener('click', () => {
                window.location = href = "../doors.html"
            })
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost ';
            result.style.color = 'grey';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    // Calling playGame function inside game
    playGame();

}

// Calling the game function
game();