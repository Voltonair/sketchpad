let color = 'black';
let buttons = document.querySelectorAll('[data-color]')
let clearButton = document.querySelector('.clear');
let sizeButton = document.querySelector('.get-size');
let checkRemoveBoard = false;
let click = true;

function getBoard(cols, rows) {
    let board = document.querySelector('.board');

    if (checkRemoveBoard) {
        removeBoard();
    }

    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    let size = cols * rows;
    for (let i = 0; i < size; i++) {
        let fill = document.createElement('div');
        fill.className = 'sq';
        fill.addEventListener('mouseover', paintBoard);
        board.insertAdjacentElement('beforeend', fill);
    }

    board.addEventListener('click', getClick);

    function removeBoard() {
        while(board.lastChild) {
            board.removeChild(board.lastChild);
        }
    }
    
}

function paintBoard() {
    if (click) {
        let randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.style.backgroundColor = color;
        if (color === 'red') this.style.backgroundColor = color;
        if (color === 'blue') this.style.backgroundColor = color;
        if (color === 'random') this.style.backgroundColor = randomColor;
    }
}

function clearBoard() {
    let clearDivs = document.querySelectorAll('.sq');
    clearDivs.forEach((div) => div.style.backgroundColor = 'rgb(235, 135, 99)');
}

function changeSize() {
    let errorMsg = document.querySelector('.error-message');
    let input = prompt('Choose a size!');
    input = parseFloat(input);
    if (input <= 3 || input > 64 || input !== Number(input)) {
        checkRemoveBoard = false;
        errorMsg.textContent = 'Please, insert a number bewteen 4 and 64';
    } else {
        checkRemoveBoard = true;
        errorMsg.textContent = '';
        return input;
    }
}

function getClick() {
    let clickMessage = document.querySelector('.click-message-on');
    let clickMessageOff = document.querySelector('.click-message-off');
    click = !click;
    if (click) {
        clickMessageOff.textContent = '';
        clickMessage.textContent = `Click enabled, you can paint! ✔️`;
    } else if (!click) {
        clickMessage.textContent = '';
        clickMessageOff.textContent = `Click disabled, you can\'t paint! ❌`;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        let colorSelection = button.dataset.color;
        color = colorSelection;
    })
})

clearButton.addEventListener('click', clearBoard);

sizeButton.addEventListener('click', function() {
    let size = changeSize();
    getBoard(size, size);
});

getBoard(32, 32);