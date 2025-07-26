const container = document.querySelector(".container");
const CONTAINER_SIZE = 512;
let gridLinesVisible = true;
const toolBtn = document.querySelector('.tool');
let currState = 'Draw';

function createGrid(size) {

    container.innerHTML='';
    const squareSize = CONTAINER_SIZE / size;
    for(let i=1;i<=size*size;i++) {
        const square = document.createElement("div");
        //set heigh and width for initial grid squares
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        square.style.backgroundColor = 'white';
        square.style.border = gridLinesVisible ? "1px solid" : "none";

        square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            square.style.backgroundColor = (currState == 'Draw') ? `rgb(${r}, ${g}, ${b})` : 'white';
        })
        container.appendChild(square);
    }
}

createGrid(16);

//Clear Grid
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    const allGrids = container.querySelectorAll("div");
    allGrids.forEach(grid => {
        grid.style.backgroundColor = "white";
    });
});


//Resize Grid
const resizeBtn = document.querySelector(".resize");

resizeBtn.addEventListener("click", () => {
    let gridSize = prompt("Enter number of squares per side (max 100): ", "16");
    if(gridSize == null) return;

    gridSize = parseInt(gridSize);
    if(isNaN(gridSize) || gridSize<1 || gridSize>100){
        alert("Invalid input provided");
        return;
    }

    createGrid(gridSize);
});

const toggleGridLines = document.querySelector(".toggle")

toggleGridLines.addEventListener("click", ()=> {
    const allSquares = container.querySelectorAll("div");

    if(gridLinesVisible){
        allSquares.forEach(square => {
            square.style.border = "none";
        });
        toggleGridLines.textContent = "Show Grid Lines";
    }

    else{
        allSquares.forEach(square => {
            square.style.border = "1px solid";
        });
        toggleGridLines.textContent = "Remove Grid Lines";
    }

    gridLinesVisible = !gridLinesVisible;
})

// erase functionality
toolBtn.addEventListener('click',()=>{
    currState = (currState == 'Draw') ? 'Erase' : 'Draw';
    toolBtn.textContent = (currState == 'Draw') ? 'Erase' : 'Draw';
});