// console.log(number)
let numTries = 1;

while (true) {
    const userInput = parseInt(prompt("Enter 1 for Stone, 2 for Paper, 3 for Scissors, or 0 to exit"));

    if (userInput === 0) {
        console.log("Exiting the game.",numTries);
        break; // Exit the while loop
    }

    if (userInput < 1 || userInput > 3) {
        console.log("Invalid input. Please enter 1, 2, 3, or 0 to exit.");
        continue; // Skip the rest of the loop and prompt again
    }

    const computer = Math.floor(Math.random() * 3) + 1;

    sps(userInput, computer);

    numTries++;
}

function sps(user, computer) {
    if (user === computer) {
        console.log("It's a draw!");
    } else if ((user === 1 && computer === 3) || (user === 2 && computer === 1) || (user === 3 && computer === 2)) {
        console.log(`Computer wins with ${computer}.`);
    } else {
        console.log(`User wins with ${user}.`);
    }
}
