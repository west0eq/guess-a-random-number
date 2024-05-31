let buttons = document.querySelectorAll('#buttons button');
let message = document.getElementById('message');
let newGameBtn = document.getElementById('newGame');
let secretNumber;

function generateSecretNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function checkNumber(event) {
    const guess = parseInt(event.target.textContent);

    if (guess === secretNumber) {
        message.textContent = "Поздравляю, вы угадали число!";
        disableButtons();
    } else if (guess < secretNumber) {
        message.textContent = "Больше";
    } else {
        message.textContent = "Меньше";
    }
}

function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

function startNewGame() {
    secretNumber = generateSecretNumber();
    message.textContent = '';
    buttons.forEach(button => button.disabled = false);
}

buttons.forEach(button => button.addEventListener('click', checkNumber));
startNewGame();

newGameBtn.addEventListener('click', startNewGame);