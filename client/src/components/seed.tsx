import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Seed({
  color,
  length = 0,
  type,
  seed_id,
  pit_number,
  seed_number,
  pit_length,
}: {
  color?: string;
  length?: number;
  type?: "player" | "opponent";
  seed_id: number;
  pit_number: number;
  seed_number: number;
  pit_length?: number;
}) {
  // Get base grid position
  const getGridPosition = (seed_number: number) => {
    const row = Math.floor((seed_number - 1) / 4);
    const col = (seed_number - 1) % 4;
    return { row, col };
  };

  // Calculate animation offset based on pit position
  const calculateOffset = (type: "player" | "opponent" | undefined, pit_number: number) => {
    if (type === "opponent") {
      const baseOffsets = {
        1: { x: 675, y: 0 },
        2: { x: 555, y: 0 },
        3: { x: 435, y: 0 },
        4: { x: 315, y: 0 },
        5: { x: 200, y: 0 },
        6: { x: 75, y: 0 },
        7: { x: 0, y: 0 },
      };
      return baseOffsets[pit_number as keyof typeof baseOffsets] || { x: 0, y: 0 };
    } else if (type === "player") {
      // For player (bottom), we need to adjust x coordinates to move from right to left
      const baseOffsets = {
        1: { x: -725, y: 110 },
        2: { x: -605, y: 110 },
        3: { x: -485, y: 110 },
        4: { x: -365, y: 110 },
        5: { x: -245, y: 110 },
        6: { x: -125, y: 110 },
        7: { x: 0, y: 110 },
      };
      return baseOffsets[pit_number as keyof typeof baseOffsets] || { x: 0, y: 0 };
    }
    return { x: 0, y: 0 };
  };

  const { row, col } = getGridPosition(seed_number);
  const offset = calculateOffset(type, pit_number);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    setX(offset.x + (col * 12));
    setY(offset.y + (row * 15));
  }, [offset, col, row])

  return (
    <motion.div
      className={clsx(
        color === "Green"
          ? "bg-[url('./assets/green-seed.png')]"
          : "bg-[url('./assets/purple-seed.png')]",
        "w-[15px] h-[15px] bg-center bg-cover bg-no-repeat absolute", // Reduced size from 16px to 12px
      )}
      style={{
        gridRow: row + 1,
        gridColumn: col + 1,
      }}
      initial={{ x: 0, y: 0 }}
      animate={{ 
        x,
        y,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }}
    >
      <p className="text-white text-[8px]">{seed_id}</p>
    </motion.div>
  );
}
