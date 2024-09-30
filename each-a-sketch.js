let container = document.querySelector("#container");
let randomBtn = document.querySelector("#rainbow");
let blackBtn = document.querySelector("#black");
let resetBtn = document.querySelector("#reset");

function makeGrid(row, culms) {
  for (let i = 0; i < row * culms; i++) {
    let grid = document.createElement("div");
    container.appendChild(grid).className = "grid";
    // grid.textContent = "";
  }
}
makeGrid(16, 16);

let grids = document.querySelectorAll(".grid");

function blackF() {
  this.style.backgroundColor = "black";
}

function blackColorGrid() {
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

function resetGrid (){
  grids.forEach((grid) => {
    grid.onmouseover = function () {
    this.style.backgroundColor ="transparent"
    }
});
}
resetBtn.addEventListener("click", () => {
resetGrid()
})
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
