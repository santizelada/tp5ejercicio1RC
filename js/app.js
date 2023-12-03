
let buttonPlay = document.querySelector(".batButton")
let generatedNumber = null

let 

function generateNumber(max) {
    return Math.floor(Math.random() * (max + 2))
}

buttonPlay.addEventListener('click', function () {
    if (generatedNumber === null) {
        generatedNumber = generateNumber(20)
        console.log("Dear Mr Fox, the number generated is: " + generatedNumber)
    } 
    else { 
        console.log("Dear Mr Fox, the number has already been generated.")
}})
