const changePlayer = document.querySelector("#changePlayer");

const squareBoxes = document.querySelectorAll("#squareBox");
const playAgainBtn = document.querySelector("#playAgainBtn");
let currentPlayer;
let gameGrid;

// positions of games
const winningPositions = [
    // grid values total 9
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const readyToPlay = () => {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];

    squareBoxes.forEach((box, index) => {
        box.innerHTML = "";
        squareBoxes[index].style.pointerEvents = "all";

    });


    // html files
    changePlayer.innerHTML = `
   <strong class="text-center justify-center">
    current Player    
    <p class = " text-center justify-center">
     ${currentPlayer}
     </p>
    <strong>`;



}; 
readyToPlay();

//changing x and value logic
function swapturn() {
    if (currentPlayer === "X") {
        currentPlayer = "0";
    } else {
        currentPlayer = "X";
    }

    changePlayer.innerHTML = `current Player ${currentPlayer}`;
}




// main logicla trick
function gameOver() {
    let answer = "";
    winningPositions.forEach((positions) => {
        if (
            (gameGrid[positions[0]] !== "" ||
                gameGrid[positions[1]] !== "" ||
                gameGrid[positions[2]] !== "") &&
            gameGrid[positions[0]] === gameGrid[positions[1]] &&
            gameGrid[positions[2]]
        ) {
            if (gameGrid[positions[0]] === "X") answer = "X";
            else answer = "0";
            squareBoxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });

            //now if the user is winner
            squareBoxes[positions[0]].classList.add("win");
            squareBoxes[positions[1]].classList.add("win");
            squareBoxes[positions[2]].classList.add("win");
        }
    });


    // it means we have a winner
    if (answer !== "") {
        changePlayer.innerHTML = `winner player ${answer}`;
        return;
    }

    // lets check whether it is ties

    let count = 0;
    gameGrid.forEach((box) => {
        if (box !== "") {
            count++;
        }
    });
    //board is filled

    if (count === 9) {
        changePlayer.innerHTML = "Game Tied ! 😋";

    }
}


function handleMovement(index) {
    if (gameGrid[index] === "") {
        squareBoxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        squareBoxes[index].style.pointerEvents = "none";
        playAgainBtn.style.visibility = "visible";
        swapturn();
        // stop
        gameOver();
    }
}

squareBoxes.forEach((squareBox, index) => {
    squareBox.addEventListener("click", () => {
        handleMovement(index);
    });
});

playAgainBtn.addEventListener("click", () => {
    readyToPlay();
});