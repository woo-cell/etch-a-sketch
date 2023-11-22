const containerDiv = document.querySelector(".main-container");
const clearButton = document.getElementById("clear");
const nbOutput = document.getElementById("nb-output");
let containerHeight = 500;
// initialize the grid to 16 * 16 and allows to  paint
addGrid(16);
paint();
showSize(16);


// listen to the slider value changes and update the grid accordingly
let slider = document.getElementById("nb");
let num = 4;
slider.addEventListener("input", () => {num = slider.value; changeSize(num)});
function changeSize(n){
    deleteGrid();
    addGrid(n);
    paint();
    showSize(n)
}

// clear the board
clearButton.addEventListener("click", clearBoard)
function clearBoard(e) {
    const square = document.querySelectorAll(".square");
    square.forEach((element) => remClass(element));
    function remClass(el) {
        el.classList.remove("painted");      
    }
}


// logic
function showSize(cells) {
    nbOutput.textContent = `${cells}`;
}

function paint() {
    const square = document.querySelectorAll(".square");
    console.log(square);
    square.forEach((element) => listen(element));
    function listen(el) {
        el.addEventListener("mouseover", addClass)
        function addClass(e) {
            e.target.classList.add("painted");
        }
    }
}

function deleteGrid() {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild)
    }
}

function addGrid(cellPerSide) {
    containerDiv.style.cssText = `height : ${containerHeight}px; width : ${containerHeight}px`;
    let squareHeight = containerHeight / cellPerSide;
    
    for (let i = 0; i < cellPerSide; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        rowDiv.style.cssText = `height : ${squareHeight}px; width : ${containerHeight}px;`;
        containerDiv.appendChild(rowDiv);
    
        for (let j = 0; j < cellPerSide; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = `height : ${squareHeight}px; width : ${squareHeight}px`;
            rowDiv.appendChild(square);
        }
    }
}