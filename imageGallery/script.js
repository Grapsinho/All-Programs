const gallery = document.querySelector('.gallery')
const overlay = document.querySelector('.overlay')
const overlayImg = overlay.querySelector('img')
const overlayClose = overlay.querySelector('.close')

function generateHTML([h, v]) {
    
        return `
            <div class="item h${h} v${v} big">
            <img src="assets/${1}.jpg" alt="image">
            <div class="item__overlay">
                <button class="btn">View <span>-></span></button>
            </div>
        </div>

        <div class="item h${h} v${v} small">
            <img src="assets/${2}.jpg" alt="image">
            <div class="item__overlay">
                <button class="btn">View <span>-></span></button>
            </div>
        </div>

        <div class="item h${h} v${v} middle">
            <img src="assets/${3}.jpg" alt="image">
            <div class="item__overlay">
                <button class="btn">View <span>-></span></button>
            </div>
        </div>

        <div class="item h${h} v${v} big">
            <img src="assets/${4}.jpg" alt="image">
            <div class="item__overlay">
                <button class="btn">View <span>-></span></button>
            </div>
        </div>

        <div class="item h${h} v${v} middle">
            <img src="assets/${5}.jpg" alt="image">
            <div class="item__overlay">
                <button class="btn">View <span>-></span></button>
            </div>
        </div>
        `
}

function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src
    overlayImg.src = src
    overlay.classList.add('open')
}

let btnClose = document.querySelector('.close')

btnClose.addEventListener("click", function() {
    overlay.classList.remove('open')
})

const digits = Array.from({ length: 2 }, () => 
    [3, 4])

const html = digits.map(generateHTML).join('')
gallery.innerHTML = html

const items = document.querySelectorAll('.item')

items.forEach(item => item.addEventListener('click', handleClick));