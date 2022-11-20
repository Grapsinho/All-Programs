const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let btn = document.querySelector(".btn")
let color = document.querySelector("#color")

btn.addEventListener("click", function() {
    let hex = "#"

    for(let i = 0; i < 6; i++) {
        hex += colors[randomNumber()]
    }

    color.textContent = hex
    document.body.style.backgroundColor = hex
})

function randomNumber() {
   return Math.floor(Math.random() * colors.length)
}