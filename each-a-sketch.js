let container = document.querySelector("#container");

function makeGrid(row, culms) {
  for (let i = 0; i < row * culms; i++) {
    let grid = document.createElement("div");
    container.appendChild(grid).className = "grid";
    // grid.textContent = "";
  }
}
makeGrid(16, 16);



// document.getElementById('bar').onmouseover = function() {
//     this.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   };

// const random = document.querySelector(".grid").onmouseover = function() {
//     this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   };

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
