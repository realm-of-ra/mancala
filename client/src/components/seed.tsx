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
  // Define position maps for both player and opponent
  const playerPositions = {
    1: { x: 100, y: 110 },
    2: { x: 215, y: 110 },
    3: { x: 335, y: 110 },
    4: { x: 455, y: 110 },
    5: { x: 575, y: 110 },
    6: { x: 695, y: 110 },
    7: { x: 0, y: 110 },
  };

  const opponentPositions = {
    1: { x: 695, y: 0 },
    2: { x: 575, y: 0 },
    3: { x: 455, y: 0 },
    4: { x: 335, y: 0 },
    5: { x: 215, y: 0 },
    6: { x: 95, y: 0 },
    7: { x: 785, y: 150 },
  };

  // Get position based on type and pit number
  const position = type === 'player' 
    ? playerPositions[pit_number as keyof typeof playerPositions] 
    : opponentPositions[pit_number as keyof typeof opponentPositions];

  return (
    <motion.div
      className={clsx(
        color === "Green"
          ? "bg-[url('./assets/green-seed.png')]"
          : "bg-[url('./assets/purple-seed.png')]",
        "w-[15px] h-[15px] bg-center bg-cover bg-no-repeat absolute",
      )}
      initial={{ x: 0, y: 0 }}
      animate={{ 
        x: position?.x ?? 0,
        y: position?.y ?? 0,
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
