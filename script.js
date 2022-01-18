'use strict'

let randomNumber = Math.floor(Math.random() * 20) + 1

const createNumber = () => {
  randomNumber = Math.floor(Math.random() * 20) + 1
}

const checkBtn = document.querySelector('.checkBtn')
const againBtn = document.querySelector('.againBtn')

checkBtn.addEventListener('click', () => {
  const input = Number(document.querySelector('.inputValue').value)
  if(!input){
    document.querySelector('.message').textContent = '⛔️ No number!'
  } else if (input === randomNumber){
    document.querySelector('.message').textContent = '🥳 You have guessed it!'
    document.querySelector('.secretNumber').textContent = randomNumber
    document.querySelector('.hint').textContent = ''
  } else {
    document.querySelector('.message').textContent = `You have guessed ${input}..`
  }
})

againBtn.addEventListener('click', () => {
  createNumber()
  console.log(randomNumber)
  document.querySelector('.secretNumber').textContent = '?'
  document.querySelector('.inputValue').value = ''
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.hint').textContent = 'Hint:'
})

console.log(randomNumber)
