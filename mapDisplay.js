//get the playGrid div from index.html
const playGrid = document.getElementById("playGrid");


//creating a test grid to play around with it
const numRows = 10;
const numColumns = 10;

let sprites = [];

for (i = 1; i <= numRows; i++) {
    for (j = 1; j <= numColumns; j++) {
        const square = document.createElement("div");
        square.id = i + " " + j;
        square.classList.add("square");
        playGrid.appendChild(square);
    }
}

function createSprite(id) {
    const sprite = document.createElement("div");
    sprite.classList.add("sprite");
    sprite.id = (id);
    sprites.push(id);

    const spritesLocation = document.getElementById("sprites");

    spritesLocation.appendChild(sprite);
}

createSprite(sprites.length);
console.log(sprites);