const bill = document.getElementById('bill')
const people = document.getElementById('people')
const total = document.getElementById('total')
const tip = document.getElementById('tip')
const tips = document.querySelectorAll('.gio1')

bill.addEventListener('input', billInput)
people.addEventListener('input', peopleInput)

tips.forEach(function(val){
    val.addEventListener('click', handleClick)
})

bill.value = "0.0"
people.value = "1"
tip.innerHTML = '$' + (0.0).toFixed(2)
total.innerHTML = '$' + (0.0).toFixed(2)

let billValue = 0.0
let peopleValue = 1
let tipValue = 0.15

function billInput() {
    billValue = parseFloat(bill.value)
    calculate1()
}

function peopleInput() {
    peopleValue = parseFloat(people.value)
    calculate1()
}


function handleClick(e) {
    tips.forEach (function(val) {
        val.classList.remove('active-tip')
        if(e.target.innerHTML == val.innerHTML) {
            val.classList.add('active-tip')
            tipValue = parseFloat(val.innerHTML) / 100
        }
    }) 
    calculate1()
}

function calculate1() {
    if (people.value >= 1) {
        let tipAmount = (billValue + tipValue) / peopleValue;
        let total1 = (billValue + tipAmount) / peopleValue;
        tip.innerHTML = '$' + tipAmount.toFixed(2)
        total.innerHTML = '$' + total1.toFixed(2)
    }
}




