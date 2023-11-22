let numberSide = 16;
let numberSquare = numberSide ** 2;
let containerHeight = 640;

const containerDiv = document.querySelector(".main-container");
containerDiv.style.cssText = `height : ${containerHeight}px; width : ${containerHeight}px`;


let squareHeight = containerHeight / numberSide;


for (let i = 0; i < numberSide; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row-div");
    rowDiv.style.cssText = `height : ${squareHeight}px; width : ${containerHeight}px;`;
    containerDiv.appendChild(rowDiv);

    for (let j = 0; j < numberSide; j++) {
        const square = document.createElement("div");
        square.style.cssText = `height : ${squareHeight}px; width : ${squareHeight}px`;
        rowDiv.appendChild(square);
    }
}