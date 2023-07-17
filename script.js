// assigning variables to access document and manupulate document

const start = document.querySelector("#start");
const form = document.querySelector("form");
const submit = document.querySelector("#Submit");
const userNum  = document.querySelector("#userNum");
const info = document.querySelector("#info");
const guesses = document.querySelector("#guessLeft");
const playAgain = document.querySelector("#restart");
const body = document.querySelector("body");

let guessLeft = 5;

// adding eventListener to start button

start.addEventListener("click", () => {
    form.style.display = "flex";
    start.style.display = "none";
    const randomNum = parseInt((Math.random() * 50));

    // after click on check button below code will be executed

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        guessLeft --;
        guesses.innerHTML = `<h1>${guessLeft}</h1>`;
        let guessedNum = userNum.value;
        
        if(guessLeft == 0 && guessedNum == randomNum){
            info.innerHTML = "Congratulations You Won!";
            won();
        }
        else if(guessLeft == 0){
            info.innerHTML = "You lost, the number was "+ `${randomNum}`;
            lost();
        }
        else if(guessedNum.length == 0 || guessedNum > 50){
            info.innerHTML = "Oops! <br> try typing some number between 1 and 50. <br> you are wasting your guesses.";
        }
        else if(guessedNum == randomNum){
            info.innerHTML = "Congratulations You Won!";
            won();
        }
        else if(guessedNum > randomNum){
            info.innerHTML = `Oops! your guess is wrong <br> Aim for some lower number. <br> Only ${guessLeft} Guesses are left.`;
        }
        else if(guessedNum < randomNum){
            info.innerHTML = `Oops! your guess is wrong <br> Aim for some higher number. <br> Only ${guessLeft} Guesses are left.`;
        } 
    });
});


// function for win condition
won = () => {
    playAgain.style.display = "block";
    userNum.style.display = "none";
    submit.style.display = "none";
    body.classList.add("youWon");
}

// function for lost condition
lost= () => {
    playAgain.style.display = "block";
    userNum.style.display = "none";
    submit.style.display = "none";
    body.classList.add("youLost");
}

// after clicking on play again buttom this code will reload page
playAgain.addEventListener("click", () => {
    location.reload();
});