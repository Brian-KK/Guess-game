'use strict'

let randomNumber = Math.floor(Math.random() * 20) + 1

const createNumber = () => {
  randomNumber = Math.floor(Math.random() * 20) + 1
}

const checkBtn = document.querySelector('.checkBtn')
const againBtn = document.querySelector('.againBtn')
let score = 20

checkBtn.addEventListener('click', () => {
  const input = Number(document.querySelector('.inputValue').value)
  if(!input){
    document.querySelector('.message').textContent = '⛔️ No number!'
  } else if (input > 20 || input < 1){
    document.querySelector('.message').textContent = 'Hint: Between 1 - 20'
  } else if (input === randomNumber){
    document.querySelector('.message').textContent = 'You have guessed it! 🥳🎉🥳'
    document.querySelector('.secretNumber').textContent = randomNumber
    document.querySelector('.hiScore').textContent = document.querySelector('.score').textContent
  } else if (input > randomNumber){
      if (score > 1){
        document.querySelector('.message').textContent = 'Hint:  📈 Too high..'
        score--
        document.querySelector('.score').textContent = score
      } else {
        document.querySelector('.score').textContent = 0
        document.querySelector('.message').textContent = '💥 Score 0! Again?'
      }
  } else if (input < randomNumber){
      if (score > 1){
        document.querySelector('.message').textContent = 'Hint: 📉 Too low..'
        score--
        document.querySelector('.score').textContent = score
      } else {
        document.querySelector('.score').textContent = 0
        document.querySelector('.message').textContent = '💥 Score 0! Again?'
      }
    }
})

againBtn.addEventListener('click', () => {
  createNumber()
  console.log(randomNumber)
  document.querySelector('.secretNumber').textContent = '?'
  document.querySelector('.inputValue').value = ''
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = 20
  score = 20
})

console.log(randomNumber)
