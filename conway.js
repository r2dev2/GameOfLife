export const nextBoard = board => board.map((row, i) => row.map((cell, j) => {
  const aliveNeighbors = getAliveNeighbors(board, i, j);
  return cell && 2 <= aliveNeighbors && aliveNeighbors <= 3 ||
    !cell && aliveNeighbors == 3;
}));

const bounds = x => [Math.max(x - 1, 0), x + 2];
const getAliveNeighbors = (board, i, j) => board
  .slice(...bounds(i))
  .map(row => row.slice(...bounds(j)))
  .flat()
  .filter(Boolean)
  .length - board[i][j];
