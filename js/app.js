let sendButton = document.querySelector("#sendButton")
let buttonPlay = document.querySelector(".batButton")
let generatedNumber = null
let userAttempt;



sendButton.addEventListener('click', function () {
    
    userAttempt = document.getElementById("guessButton").value


    if (generatedNumber === null || generatedNumber === undefined) {
        alert("Dear user, please press the bat button to generate a secret number")
    }
    else if (userAttempt === null || userAttempt.trim() === '') {
        alert("Please, type in a number")
    } else if (userAttempt > generatedNumber) {
        alert('The number is higher. Try again.')
    } else if (userAttempt < generatedNumber) {
        alert('The number is lower. Try again')
    } else if (userAttempt == generatedNumber) {
        alert("Congrats! You've guessed the number")
    }
    else {
        generatedNumber = generateNumber(20)
        console.log("Dear user, the number has already been generated.")
    }

})





function generateNumber(max) {
    return Math.floor(Math.random() * (max + 2))
}

buttonPlay.addEventListener('click', function () {
    if (generatedNumber === null) {
        generatedNumber = generateNumber(20)
        console.log("Dear user, the number generated is: " + generatedNumber)
    }
    else {
        console.log("Dear user, the number has already been generated.")
    }
})

function numeroAdivinado () {
    console.log(userAttempt)
}

numeroAdivinado()