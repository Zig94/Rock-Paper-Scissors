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
const waitImg = document.querySelector('.img-wait')
const winInfo = document.querySelector('.win-info')
const winText = document.querySelector('.win-info-text')
const points = document.querySelector('.points')
const playAgainBtn = document.querySelector('.play-again-btn')
const btnClasses = ['paper', 'scissors', 'rock']
let randomNumber
let x = 0

const showModal = () => {
	game.classList.toggle('hide')
	modal.classList.toggle('hide')
}
const closeModal = () => {
	game.classList.toggle('hide')
	modal.classList.toggle('hide')
}
function playGame() {
	gameBtn.forEach(btn => {
		btn.classList.add('hide')
	})
	waitBtn.classList.remove('hide')
	waitText.forEach(text => text.classList.remove('hide'))
	const checkSelectedButton = () => {
		chosenBtn.classList.remove('hide')
		if (this.classList.contains('paper')) {
			chosenBtn.classList.add('paper')
      chosenImg.setAttribute("src", "./images/icon-paper.svg")
		} else if(this.classList.contains('scissors')){
      chosenBtn.classList.add('scissors');
      chosenImg.setAttribute("src", "./images/icon-scissors.svg")
     } else{
      chosenBtn.classList.add('rock');
      chosenImg.setAttribute("src", "./images/icon-rock.svg")
     }
	}
	checkSelectedButton()
	setTimeout(() => {
		randomButtonSelect()
	}, 1000)
	setTimeout(() => {
		checkWhoWin()
	}, 1500)
}

const createNumber = () => {
  randomNumber = Math.floor(Math.random() * btnClasses.length)
}
const randomButtonSelect = () => {
  createNumber()
	waitBtn.classList.remove('btn-wait')
	waitBtn.classList.add(btnClasses[randomNumber])
  console.log(randomNumber);
	if (waitBtn.classList.contains(btnClasses[randomNumber])) {
		waitImg.setAttribute('src', `./images/icon-${btnClasses[randomNumber]}.svg`)
	}
}
const checkWhoWin = () => {
  if(chosenBtn.classList.contains(btnClasses[randomNumber]) && waitBtn.classList.contains(btnClasses[randomNumber])) {
    winText.textContent = 'draw'
  } else if(chosenBtn.classList.contains(btnClasses[0]) && waitBtn.classList.contains(btnClasses[1])){
    winText.textContent = 'you lose'
  } else if(chosenBtn.classList.contains(btnClasses[0]) && waitBtn.classList.contains(btnClasses[2])){
    winText.textContent = 'you win'
  } else if(chosenBtn.classList.contains(btnClasses[1]) && waitBtn.classList.contains(btnClasses[2])){
    winText.textContent = 'you lose'
  } else if(chosenBtn.classList.contains(btnClasses[1]) && waitBtn.classList.contains(btnClasses[0])){
    winText.textContent = 'you win'
  } else if(chosenBtn.classList.contains(btnClasses[2]) && waitBtn.classList.contains(btnClasses[0])){
    winText.textContent = 'you lose'
  } else if(chosenBtn.classList.contains(btnClasses[2]) && waitBtn.classList.contains(btnClasses[1])){
    winText.textContent = 'you win'
  }
  winInfo.classList.remove('hide')
  hadlePoints()
}
const hadlePoints = () => {
  if(winText.textContent == 'you win') {
    x++
   
  } else if (winText.textContent == 'you lose') {
    x--
  } else {
    return
  }
  points.textContent = x
	localStorage.setItem('actualPoints', points.textContent)
}
const nextGame = () => {
  gameBtn.forEach(btn => {
		btn.classList.remove('hide')
	})
  waitBtn.classList.add('hide')
  waitBtn.classList.add('btn-wait')
  waitBtn.classList.remove(btnClasses[randomNumber])
  waitImg.setAttribute('src', ``)
  waitText.forEach(text => text.classList.add('hide'))
  chosenBtn.classList.add('hide')
  chosenBtn.classList.remove('paper')
  chosenBtn.classList.remove('scissors')
  chosenBtn.classList.remove('rock')
  winInfo.classList.add('hide')
  chosenImg.setAttribute("src", "")
  winText.textContent = ''
}


gameBtn.forEach(btn => btn.addEventListener('click', playGame))
rulesBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)
playAgainBtn.addEventListener('click', nextGame)
window.addEventListener("DOMContentLoaded", function() {
  const actualPoints = localStorage.getItem("actualPoints");
  points.textContent = actualPoints
});


