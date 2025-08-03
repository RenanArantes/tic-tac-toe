import { motion } from "motion/react";

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
    <motion.button
      className={`h-32 w-32 rounded-xl border-4 border-gray-200 text-4xl font-bold ${getTextColor(value)} ${getBorderColor(value, isWinningSquares)}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      {value && (
        <motion.span
          className="block"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          {value}
        </motion.span>
      )}
    </motion.button>
  );
}

export default Square;
