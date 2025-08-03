import { BoardState, Player } from "../types";

export const winningCombinations = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinningCombination = (board: BoardState): Player | null => {
  for (const combination of winningCombinations) {
    const [index1, index2, index3] = combination;

    if (
      board[index1] &&
      board[index1] === board[index2] &&
      board[index1] === board[index3]
    ) {
      return board[index1];
    }
  }

  return null;
};

export const isBoardFull = (board: BoardState): boolean => {
  return !board.includes(null);
};
