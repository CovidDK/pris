const amountElem = document.querySelector('#amount')
const start = new Date('01.01.2021')
const amountIncreasePerSecond = 3611


setInterval(() => {
  const now = new Date()
  const secondsSinceStart = (now - start) / 1000
  const amountSinceStart = Math.floor(secondsSinceStart * amountIncreasePerSecond)
  amountElem.innerText = (amountSinceStart).toLocaleString('da-DK') + ' kr.'
}, 50)
