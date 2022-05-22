const board = document.querySelector('.etch-container')
const inputColor = document.querySelector('.color-selection > input')
const colorWheel = document.querySelector('.color-wheel')




let sideHeight = 0
let userColor = "red"
let wheelRotate = 0
let mousedown = false




function generateBoard(){
    clearBoard()
    let boardArea = sideHeight ** 2
    board.style.cssText = `grid-template-columns: repeat(${sideHeight}, 1fr); grid-template-rows: repeat(${sideHeight}, 1fr);`
    for(let i = 0; i < boardArea; i++){
        let square = document.createElement('div')
        square.classList.add('board-square')
        board.appendChild(square)
    }
    assignColorListener()
    
}


    document.addEventListener('mousedown', function(){
        mousedown = true;
        console.log(mousedown)
    })
    document.addEventListener('mouseup', function(){
        mousedown = false
        console.log(mousedown)
    })



function assignColorListener(){
    document.querySelectorAll('.board-square').forEach(sqr => sqr.addEventListener('mouseover', function(e){
        if(mousedown){
        e.target.style.backgroundColor = userColor
        console.log(e.target)
        }
        return
    }));
   
}

function clearBoard(){
    document.querySelectorAll('.board-square').forEach(sqr => sqr.remove())
}

function changeColor(){
    let currentColor = document.querySelector('.color[data-position = "0"]').dataset.color
    console.log(currentColor)
    userColor = currentColor
    console.log(userColor, "Thisiscolor")
    assignColorListener()
}

document.querySelectorAll("button.color-select").forEach(butt => butt.addEventListener('click', (e) =>{
    let degreeTurn = e.target.value == -1 ? -36: 36
    wheelRotate = wheelRotate + degreeTurn
    colorWheel.style.transform = `rotate(${wheelRotate}deg)`
    document.querySelectorAll('div.color').forEach(color => {
        let increment = degreeTurn < 0? -1 : 1
        color.dataset.position = ((parseInt(color.dataset.position) + 10) + increment) % 10
        
    })
    changeColor()

}));


document.querySelector(".set-height").addEventListener('input', function(){
    sideHeight = Math.round(this.value)
    this.style.backgroundColor = "white"
    if(this.value > 200 || this.value < 0){
        this.style.backgroundColor = "red"
        sideHeight = 200
        alert("Must be between 1 and 200")
        this.value = ''
    }
    console.log(typeof parseInt(this.value))
})

document.querySelector('.generate-board').addEventListener('click', generateBoard)
document.querySelector('.clear-board').addEventListener('click', clearBoard)



