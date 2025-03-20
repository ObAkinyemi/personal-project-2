let random_number = Math.round((Math.random())*100);

function rand_num () {
    console.log(random_number);
    return random_number;
}

function check_guess () {
    let guess = Number(document.getElementById("guess_input").value);
    if (Number.isNaN(guess)){
        console.log("put in a fucking number you fucktard");
    } else if (guess > random_number) {
        console.log("too high bitch");
    } else if (guess < random_number) {
        console.log("too low ass hole");
    } else if (guess <= random_number + 5 || guess >= rand_num - 5) {
        console.log("You're close")
    } else if (guess === random_number) {
        console.log("You got dat shit right nigga");
    }
}