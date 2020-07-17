# Game of Life
[Conways Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a cellular automaton devised by the British mathematician John Horton Conway.

It's not a line-by-line copy, but [this tutorial](https://www.youtube.com/watch?v=FWSR_7kZuYg) was used for inspiration.

## Demo

Live demo [here](https://htmlpreview.github.io/?https://github.com/MirSzabo/Game-of-Life/blob/master/index.html)

## Rules
* Any live cell with fewer than two live neighbors dies, as if by underpopulation.
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by overpopulation.
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

simplified as 
* 0--- exactly 3 alive neighbours ---->1 
* 1--- less than 2 alive or more than 3 alive ---->0

## Pseudo code
* create 2 dimensional array[x][y]
* fill array with 1 and 0
* draw the array
* implement the rules of Game 
* solve the edges

## Installation

Install npm dependencies

```sh
 npm install 
```

## Running the project
The project is written in ES6 and is transpiled with Babel using Webpack. To start the development server

```sh
npm start
```

To build for production

```sh
npm run build
```

To preview the production build
```sh
npm run preview
```
