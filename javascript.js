const container = document.querySelector(".container");
const CONTAINER_SIZE = 512;
function createGrid(size) {

    container.innerHTML='';
    const squareSize = CONTAINER_SIZE / size;
    for(let i=1;i<=size*size;i++) {
        const square = document.createElement("div");
        //set heigh and width for initial grid squares
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor="black";
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