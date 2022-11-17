let dice = document.querySelectorAll("img")

function rollDice() {
    let numbers = []
    for (let i = 0; i < dice.length; i++) {
        let randomNumber = Math.floor(Math.random()*6) + 1
        dice[i].setAttribute("src", `images/dice${randomNumber}.png`)
        numbers.push(randomNumber)
        console.log(numbers);
    }

    if (numbers[0] > numbers[1]) {
        document.querySelector("h2").innerHTML = `<i class="fa-solid fa-trophy"></i> Player 1 has won!`
    } else if (numbers[0] < numbers[1]) {
        document.querySelector("h2").innerHTML = `Player 2 has won! <i class="fa-solid fa-trophy"></i>`
    } else {
        document.querySelector("h2").innerHTML = `Draws are for the weak... Try again!`
    }
}



