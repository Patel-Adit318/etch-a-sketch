const container = document.querySelector(".container");

for(let i=1;i<=16*16;i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor="black";
    })
    container.appendChild(div);
}

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    const allGrids = container.querySelectorAll("div");
    allGrids.forEach(grid => {
        grid.style.backgroundColor = "white";
    });
})
