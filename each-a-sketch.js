let container = document.querySelector("#container");
let randomBtn = document.querySelector("#rainbow");
let blackBtn = document.querySelector("#black");
let eraseBtn = document.querySelector("#erase");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");

startBtn.addEventListener("click", function () {
  let total = prompt("Enter the number of Squares you would (Maximum 100)");
  let gridSize = 560 / total;
  if (total > 0 && total <= 100) {
    container.textContent = "";
    for (let i = 0; i < total * total; i++) {
      let grid = document.createElement("div");
      grid.style.width = `${gridSize}px`;
      grid.style.height = `${gridSize}px`;
      container.appendChild(grid).className = "grid";
    }
  } else if (isNaN(total)) {
    alert("invalid input, please put a valid Number (Maximum 100)");
    container.textContent = "";
    let paragraph1 = document.createElement("p");
    paragraph1.textContent =
      "It appears that an invalid input was provided. Please try again by clicking the 'New Grid' button to proceed.";
    container.appendChild(paragraph1);
  } else if (total < 0 || total > 100) {
    alert("Try again, Number should be between 1 and 100");
    container.textContent = "";
    let paragraph2 = document.createElement("p");
    paragraph2.textContent =
      "Your input seems a bit off! Please enter a number between 1 and 100 and give it another go.";
    container.appendChild(paragraph2);
  }
});

function blackF() {
  this.style.backgroundColor = "black";
}

function blackColorGrid() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.onmouseover = blackF;
  });
}
blackBtn.addEventListener("click", () => {
  blackColorGrid();
});

function randomColorGrid() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.onmouseover = function () {
      this.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    };
  });
}
randomBtn.addEventListener("click", () => {
  randomColorGrid();
});

function eraseGrid() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.onmouseover = function () {
      this.style.backgroundColor = "transparent";
    };
  });
}
eraseBtn.addEventListener("click", () => {
  eraseGrid();
});

//reset button to reset all grids's background at once.

resetBtn.addEventListener("click", () => {
  let grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.backgroundColor = "transparent";
  });
});
