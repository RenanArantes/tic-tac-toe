import { Player } from "../types";

type SquareProps = {
  value: Player | null;
  onClick: () => void;
  isWinningSquares: boolean;
};

const getTextColor = (value: Player | null) => {
  if (value === "X") {
    return "text-white";
  }
  return "text-pink";
};

const getBorderColor = (value: Player | null, isWinningSquares: boolean) => {
  if (!isWinningSquares) return "border-gray-200";

  if (value === "X") return "border-blue-500";
  return "border-pink";
};

function Square({ value, onClick, isWinningSquares }: SquareProps) {
  return (
    <button
      className={`h-32 w-32 rounded-xl border-4 border-gray-200 text-4xl font-bold ${getTextColor(value)} ${getBorderColor(value, isWinningSquares)}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
