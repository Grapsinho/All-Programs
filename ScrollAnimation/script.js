window.addEventListener("scroll", reveal);

function reveal() {
    let section = document.querySelectorAll(".reveal")


    for(let i = 0; i < section.length; i++) {

        let windowHeight = window.innerHeight
        let revealTop = section[i].getBoundingClientRect().top
        let revealPoint = 150

        if(revealTop < windowHeight - revealPoint) {
            section[i].classList.add("active")
        }else {
            section[i].classList.remove("active")
        }
    }
}

window.addEventListener("scroll", second);

function second() {
    let div = document.querySelectorAll(".second")
    

    for(let i = 0; i < div.length; i++) {

        let windowHeight = window.innerHeight
        let revealTop = div[i].getBoundingClientRect().top
        let revealPoint = 150

        if(revealTop < windowHeight - revealPoint) {
            div[i].classList.add("dactive")
        }else {
            div[i].classList.remove("dactive")
        }
    }
}