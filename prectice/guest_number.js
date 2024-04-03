const min = 10;
const max = 100;


// console.log("Random Number:", random_number);

let attempts = 0;


while (true) {
    const random_number = Math.floor(Math.random() * (max - min + 1) + min);
    const user_input = 15;


    if (user_input == random_number) {
        console.log("You win", random_number , " " , user_input);
        break; 
    } else if (user_input < random_number) {
        console.log("Your guessed number is too low",random_number , " " , user_input);
    } else if (user_input > random_number) {
        console.log("Your guessed number is too high",random_number , " " , user_input);
    }
    attempts++;
}

console.log("Number of attempts:", attempts);
