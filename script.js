const firstPin = document.querySelector('.firstPin')
const secondPin = document.querySelector('.secondPin')
const thirdPin = document.querySelector('.thirdPin')
const fourthPin = document.querySelector('.fourthPin')
const generateBtn = document.querySelector('.generateBtn')

generateBtn.addEventListener('click', () => {
    firstPin.textContent = Math.floor(Math.random() * 9) + 1
    secondPin.textContent = Math.floor(Math.random() * 9) + 1
    thirdPin.textContent = Math.floor(Math.random() * 9) + 1
    fourthPin.textContent = Math.floor(Math.random() * 9) + 1
})


