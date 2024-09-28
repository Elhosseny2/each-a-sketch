let container = document.querySelector("#container");

function makeRow(row, ) {
  for (i = 0; i < (row * 16); i++) {
    let row = document.createElement("div");
    // let culms = document.createElement("div");
    container.appendChild(row).className = "row"
    // container.appendChild(culms).className = "culms"
    row.textContent="row"
    // culms.textContent="culms"
  }
}
makeRow(2);

// function makeCulms(culms ) {
//     for (i = 0; i < (culms * 16); i++) {
//       let culms = document.createElement("div");
//     //   let culms = document.createElement("div");
//       container.appendChild(culms).className = "culms"
//       culms.textContent="culms"
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