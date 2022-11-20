const text = document.getElementById('text')
const words = document.querySelector('.word')
const Char = document.querySelector('.character')

text.addEventListener('input', function() {
    Char.textContent = text.value.length

    let txt = text.value.trim()

    words.textContent = txt.split(/\s/).filter((item)=> item).length
})