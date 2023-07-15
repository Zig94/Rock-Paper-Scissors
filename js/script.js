const rulesBtn = document.querySelector('.rules-btn')
const game = document.querySelector('.container')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close')
const gameBtn = document.querySelectorAll('.game-btn')
const btnImg = document.querySelectorAll('.img')
const gameBox = document.querySelector('.game-box')
const waitBtn = document.querySelector('.btn-wait')
const waitText = document.querySelectorAll('.under-btn')
const chosenBtn = document.querySelector('.chosen-btn')
const chosenImg = document.querySelector('.img-chosen')


const showModal = () => {
	game.classList.toggle('hide')
	modal.classList.toggle('hide')
}
const closeModal = () => {
    game.classList.toggle('hide')
	modal.classList.toggle('hide')
}
function playGame (e) {
   gameBtn.forEach(btn => {
    btn.classList.add('hide')
   })
 waitBtn.classList.remove('hide')
waitText.forEach(text => text.classList.remove('hide'))

const checkSelectedButton = () => {
  chosenBtn.classList.remove('hide')
 if (this.classList.contains('paper')) {
  chosenBtn.classList.add('paper')
 } else if(this.classList.contains('scissors')){
  chosenBtn.classList.add('scissors');
  chosenImg.setAttribute("src", "./images/icon-scissors.svg")
 } else{
  chosenBtn.classList.add('rock');
  chosenImg.setAttribute("src", "./images/icon-rock.svg")
 }
}

 checkSelectedButton()  
}


gameBtn.forEach(btn => btn.addEventListener('click',playGame))
rulesBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)
