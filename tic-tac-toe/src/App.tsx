import { Gamepad2, RotateCcw } from "lucide-react";
import { useState } from "react";

import Board from "./components/Board";
import { checkWinningCombination, isBoardFull } from "./helpers/game-logic";
import { BoardState } from "./types";

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const winner = checkWinningCombination(board);
  const isDraw = isBoardFull(board) && !winner;

  const currentPlayer = board.filter(Boolean).length % 2 === 0 ? "X" : "O";

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    setBoard(board.map((value, i) => (i === index ? currentPlayer : value)));
  };

  const getGameStatus = () => {
    if (winner) {
      return `Player ${winner} is the winner!`;
    }

    if (isDraw) {
      return "It's a draw!";
    }

    return `Player ${currentPlayer}'s turn`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="w-full max-w-lg rounded-2xl bg-blue-100 p-8">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Gamepad2 className="h-8 w-8 text-pink" />
          <h1 className="text-4xl font-bold text-white"> Tic Tac Toe </h1>
        </div>
        <div className="mb-6 text-center">
          <p className="text-xl font-semibold text-gray-100">
            {getGameStatus()}
          </p>
        </div>
        <Board board={board} winner={winner} onClick={handleClick} />

        {(winner || isDraw) && (
          <div className="mt-8 flex justify-center">
            <button
              className="group flex items-center gap-2 rounded-lg bg-pink px-6 py-3 text-sm text-white hover:opacity-90"
              // onClick={handleReset}
            >
              Reset
              <RotateCcw className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-180" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
