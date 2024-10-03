let container = document.querySelector("#container");
let randomBtn = document.querySelector("#rainbow");
let blackBtn = document.querySelector("#black");
let eraseBtn = document.querySelector("#erase");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");

startBtn.addEventListener("click", function () {
  let total = prompt("Enter the number of Squares you would (Maximum 16)");
  if (isNaN(total)) {
    alert("invalid input, please put a valid Number (Maximum 16)");
  }
  container.innerHTML = "";
  for (let i = 0; i < total * total; i++) {
    let grid = document.createElement("div");
    container.appendChild(grid).className = "grid";
    // grid.textContent = "";
  }
  makeGrid(total);
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
document.getElementById("bar").onmouseover = function () {
  this.style.color = "black";
};

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

// const grids = document.querySelectorAll(".grid");
// grids.forEach(grid => {
//   grid.onmouseover = function() {
//     this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   };
// });

// function makeCulms(culms ) {
//     for (i = 0; i < (culms * 16); i++) {
//       let culms = document.createElement("div");
//     //   let culms = document.createElement("div");
//       container.appendChild(culms).className = "culms"
//       culms.textContent=""
//     }
//   }
//   makeCulms(1);

//   let fMakeRow = makeRow()
//   let fMakeCulms = makeCulms()

//   function makeGrid (fMakeRow, fMakeCulms){
//     for (i = 0; i < (fMakeRow * fMakeCulms); i++) {
//         fMakeRow.textContent = "grid"
//         fMakeCulms.textContent = "grid"
//   }
// }
// makeGrid(fMakeRow,fMakeCulms)
