let random_number = Math.round((Math.random())*100);
let attempt_counter = 0;

function rand_num () {
    console.log(random_number);
    return random_number;
}

function new_rand_num () {
    let new_rand_num = Math.round((Math.random())*100);
    random_number = new_rand_num;
    console.log(random_number);
    attempt_counter = 0;
    document.getElementById("display_area").innerText = "The game begins";
    return new_rand_num;
}

function check_guess () {
    let guess = Number(document.getElementById("guess_input").value);
    console.log(typeof(guess));
    if (guess == random_number) {
        console.log("You got dat shit right nigga");
        document.getElementById("display_area").innerText = "You got dat shit right nigga";
    } else if (Number.isNaN(guess) || guess == null || guess == undefined){
        console.log("put in a fucking number you fucktard");
        document.getElementById("display_area").innerText = "put in a fucking number you fucktard";
    } else if (guess > random_number + 30) {
        console.log("too high bitch");
        document.getElementById("display_area").innerText = "too high bitch";
    } else if (guess < random_number - 30) {
        console.log("too low ass hole");
        document.getElementById("display_area").innerText = "Too loow";
    } else if (Math.abs(guess - random_number) <= 5) {
        console.log("You're close");
        document.getElementById("display_area").innerText = "You're close";
    }
}

function num_of_attempts () {
    attempt_counter += 1
    document.getElementById("attempt_tracker").innerText = `attempts: ${attempt_counter}`;
    if (attempt_counter < 5 && Number(document.getElementById("guess_input").value) == random_number) {
        document.getElementById("attempt_tracker").innerText = "dayum nigga! You're cookin";
    } else if (attempt_counter > 15) {
        document.getElementById("attempt_tracker").innerText = "Ayy bruh. Don't be a bitch and just start a new game nigga.";
    }

    switch(attempt_counter){
        case(5):
        document.getElementById("attempt_tracker").innerText = "Not everyone is cracked lil bro";
        break;
        case(10):
        document.getElementById("attempt_tracker").innerText = "You've got 5 chances left";
        break;
        case(15):
        document.getElementById("attempt_tracker").innerText = "Aight bruh. You suck. Just restart lil nigga";
        break;
    }

}