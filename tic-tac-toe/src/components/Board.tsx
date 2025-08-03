import { winningCombinations } from "../helpers/game-logic";
import { BoardState, Player } from "../types";
import Square from "./Square";

type BoardProps = {
  board: BoardState;
  winner: Player | null;
  onClick: (index: number) => void;
};

function Board({ board, winner, onClick }: BoardProps) {
  const isWinningSquares = (index: number): boolean => {
    if (!winner) return false;

    return winningCombinations.some(
      (combination) =>
        combination.includes(index) &&
        combination.every((i) => board[i] === winner),
    );
  };

  return (
    <div className="mx-auto grid max-w-[26rem] grid-cols-3 gap-4">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinningSquares={isWinningSquares(index)}
        />
      ))}
    </div>
  );
}

export default Board;
