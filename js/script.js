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
const loseWinText = document.querySelector('.win-lose')
const points = document.querySelector('.points')
const btnClasses = ['paper', 'scissors', 'rock']
const randomNumber = Math.floor(Math.random() * btnClasses.length)


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
	}, 2000)
}
const randomButtonSelect = () => {
	waitBtn.classList.remove('btn-wait')
	waitBtn.classList.add(btnClasses[randomNumber])
	if (waitBtn.classList.contains(btnClasses[randomNumber])) {
		waitImg.setAttribute('src', `./images/icon-${btnClasses[randomNumber]}.svg`)
	}
}
const checkWhoWin = () => {
  let x = 0
  if(chosenBtn.classList.contains(btnClasses[randomNumber]) && waitBtn.classList.contains(btnClasses[randomNumber])) {
    winText.textContent = 'draw'
  } else if(chosenBtn.classList.contains(btnClasses[0]) && waitBtn.classList.contains(btnClasses[1])){
    loseWinText.textContent = 'lose'
  } else if(chosenBtn.classList.contains(btnClasses[0]) && waitBtn.classList.contains(btnClasses[2])){
    loseWinText.textContent = 'win'
  } else if(chosenBtn.classList.contains(btnClasses[1]) && waitBtn.classList.contains(btnClasses[2])){
    loseWinText.textContent = 'lose'
  } else if(chosenBtn.classList.contains(btnClasses[1]) && waitBtn.classList.contains(btnClasses[0])){
    loseWinText.textContent = 'win'
  } else if(chosenBtn.classList.contains(btnClasses[2]) && waitBtn.classList.contains(btnClasses[0])){
    loseWinText.textContent = 'lose'
  } else if(chosenBtn.classList.contains(btnClasses[2]) && waitBtn.classList.contains(btnClasses[1])){
    loseWinText.textContent = 'win'
  }
  winInfo.classList.remove('hide')
}

gameBtn.forEach(btn => btn.addEventListener('click', playGame))
rulesBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)


