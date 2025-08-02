import { BoardState } from "../types";
import Square from "./Square";

type BoardProps = {
  board: BoardState;
  onClick: (index: number) => void;
};

function Board({ board, onClick }: BoardProps) {
  return (
    <div className="mx-auto grid max-w-[26rem] grid-cols-3 gap-4">
      {board.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}

export default Board;
