export const nextBoard = board => board.map((row, i) => row.map((cell, j) => {
  const aliveNeighbors = getAliveNeighbors(board, i, j);
  return cell && 2 <= aliveNeighbors <= 3 || !cell && aliveNeighbors == 3;
}));

const ds = [-1, 0, 1];
const getAliveNeighbors = (board, i, j) => board
  .slice(i - 1, i + 2) // get 3 rows centered at board(i)
  .map(row => row.slice(i - 1, i + 2)) // get a 3x3 slice centered at board(i, j)
  .flat()
  .filter((_, idx) => idx != 4) // don't count board(i, j)
  .filter(Boolean) // only count alive cells
  .length;
