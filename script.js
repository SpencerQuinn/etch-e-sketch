const board = document.querySelector('.etch-container')
const inputColor = document.querySelector('.color-selection > input')
const colorWheel = document.querySelector('.color-wheel')







let sideHeight = 100
let boardArea = sideHeight ** 2
let wheelRotate = 0

board.style.cssText = `grid-template-columns: repeat(${sideHeight}, 1fr); grid-template-rows: repeat(${sideHeight}, 1fr);`

for(let i = 0; i < boardArea; i++){
    let square = document.createElement('div')
    square.classList.add('board-square')
    square.style.cssText = `background-color: rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    board.appendChild(square)
}


document.querySelectorAll('.board-square').forEach(sqr => sqr.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "white"
    console.log(e.target)
}));

function generateBoard(){
    board.style.cssText = `grid-template-columns: repeat(${sideHeight}, 1fr); grid-template-rows: repeat(${sideHeight}, 1fr);`
    for(let i = 0; i < boardArea; i++){
        let square = document.createElement('div')
        square.classList.add('board-square')
        board.appendChild(square)
    }
}

function clearBoard(){
    document.querySelectorAll('.board-square').forEach(sqr => sqr.remove())
}

function rotateWheelRight(){
    wheelRotate = wheelRotate + 36
    colorWheel.style.transform = `rotate(${wheelRotate}deg)`
    
}
function rotateWheelLeft(){
    wheelRotate = wheelRotate - 36
    colorWheel.style.transform = `rotate(${wheelRotate}deg)`
    
}

document.querySelector(".color-select.right").addEventListener('click', rotateWheelRight)
document.querySelector(".color-select.left").addEventListener('click', rotateWheelLeft)




