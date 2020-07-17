const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

const resolution = 10;
canvas.width = 1500;
canvas.height = 700;

const cols = canvas.width / resolution;
const rows = canvas.height / resolution;

let grid = [];

/*//buttons
const start = document.getElementById("startButton");
const pause = document.getElementById("pauseButton");

start.addEventListener("click", newGrid(grid)
);
pause.addEventListener("click", newGrid(grid)
);*/

requestAnimationFrame(update);
function update() {
  grid = newGrid(grid);
  draw(grid);
  requestAnimationFrame(update);
}

//create the 2D array
function make2DArray(cols, rows) {
  let arr = [];
  for (let i = 0; i < cols; i++) {
    arr[i] = [];
    for (let j = 0; j < rows; j++) {
      arr[i][j] = Math.floor(Math.random() * 2); //new Cell(i, j);
    }
  }
  return arr;
}

grid = make2DArray(cols, rows);
console.table(grid);

//draw the 2D array
function draw(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = grid[i][j];
      const x = i * resolution;
      const y = j * resolution;

      ctx.beginPath();
      ctx.rect(x, y, resolution, resolution);
      ctx.fillStyle = cell ? changeColorRandomly() : "white";
      ctx.fill();
      //ctx.stroke();
    }
  }
}
draw(grid);

//implement the rules of Game
function newGrid(grid) {
  //copy of the grid by value!!!
  let next = JSON.parse(JSON.stringify(grid));
  //console.log(grid === next);//false

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      //count live neighbours
      let neighbours = countNeighbours(grid, i, j);
      //rules of the game
      let state = grid[i][j];
      if (state === 0 && neighbours === 3) {
        next[i][j] = 1;
      } else if (state === 1 && (neighbours < 2 || neighbours > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }
  return next;
}

function countNeighbours(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let column = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[column][row];
    }
  }
  sum -= grid[x][y]; //we dont want to check this position
  return sum;
}



//utility function
function changeColorRandomly() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 80 * Math.random()) +
    "%," +
    (75 + 10 * Math.random()) +
    "%)"
  );
}
