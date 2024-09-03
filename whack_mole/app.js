const squares = document.querySelectorAll('.square')
const grid = document.querySelector('.grid')
const mole = document.querySelector('.mole')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#time-left')

let result =0
let hitPosition 
let currentTime = 60
let randoMove = null

function randomSquare(){
    squares.forEach(square => {square.classList.remove('mole')})
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

squares.forEach(square =>{
    square.addEventListener('mousedown', () => {
        if(square.id === hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})


function moveMole(){
  randoMove = setInterval(randomSquare,1000)
}

moveMole()

function countDown(){
    currentTime --
    timeLeft.textContent = currentTime
    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(randoMove)
        alert('GAME-OVER ! the final score is'+result)

    }

}

let countDownTimerId = setInterval(countDown,1000)