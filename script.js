color = 'black';
let click = true;

// Function create and draw on board
function populatedBoard (col, rows) {
    let board = document.querySelector('.board');
    
    board.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    
    for (let i = 0; i < col * rows; i++) {
        let square = document.createElement('div');
        square.className = 'sq';
        square.addEventListener('mouseover', getColor);
        board.insertAdjacentElement('beforeend', square);
    }
}

populatedBoard(16, 16);

// Function colors
function getColor () {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function getColorChoice (choice) {
    color = choice;
}

// Function sizes
function changeSizeOne () {
    populatedBoard(16, 16);
}

function changeSizeTwo () {
    populatedBoard(32, 32);
}

function changeSizeThree () {
    populatedBoard(64, 64);
}

// Function to reset the board
function resetBoard() {
  let squares = document.querySelectorAll('.sq');
  squares.forEach((square) => square.style.backgroundColor = 'white');
}

// Get body and swap 'click' to true / false
document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
    click = !click;
    if (click) {
        document.querySelector('.mode').textContent = 'Mode: ✅';
    } else {
        document.querySelector('.mode').textContent = 'Mode: 🚫';
    }
    }
})