'use strict'

const checkBtn = document.querySelector('.checkBtn')

checkBtn.addEventListener('click', () => {
  const input = Number(document.querySelector('.inputValue').value)
  if(!input){
    document.querySelector('.message').textContent = '⛔️ No number!'
  } else {
    document.querySelector('.message').textContent = `You have guessed ${input}..`
  }
})
