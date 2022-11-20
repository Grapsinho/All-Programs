const show = document.querySelector('.show')
const show2 = document.querySelector('.show2')
const btn = document.querySelector('.submit')

function AgeRetire() {
  let age = document.querySelector('.age').value
  age = Number(age)
  let retire = document.querySelector('.retire').value
  retire = Number(retire)
  let date = new Date
  let currentYear = date.getFullYear()

  const retireAge = retire - age
  let retireYear = retireAge + currentYear

  show.textContent = `You have ${retireAge} years left until you can retire.`
  show2.textContent = `It's ${currentYear}, so you can retire in ${retireYear}.`

  if(retireAge < 0) {
    show.textContent = `You are already retired.`
    retireYear = currentYear + retireAge
    show2.textContent = `You retired ${retireYear} year`
  }
}

document.addEventListener('input', AgeRetire)
