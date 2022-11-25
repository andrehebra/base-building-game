//get the playGrid div from index.html
const playGrid = document.getElementById("playGrid");


//creating a test grid to play around with it
const numRows = 10;
const numColumns = 10;

for (i = 1; i <= numRows; i++) {
    for (j = 1; j <= numColumns; j++) {
        const square = document.createElement("div");
        square.id = i + " " + j;
        square.classList.add("square");
        playGrid.appendChild(square);
    }
}
