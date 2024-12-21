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
    1: { x: -715, y: 120 },
    2: { x: -595, y: 120 },
    3: { x: -475, y: 120 },
    4: { x: -355, y: 120 },
    5: { x: -235, y: 120 },
    6: { x: -115, y: 120 },
    7: { x: 0, y: 110 },
  };

  const opponentPositions = {
    1: { x: 685, y: 10 },
    2: { x: 565, y: 10 },
    3: { x: 445, y: 10 },
    4: { x: 325, y: 10 },
    5: { x: 205, y: 10 },
    6: { x: 85, y: 10 },
    7: { x: 785, y: 150 },
  };

  // Calculate grid positions
  const SEED_SIZE = 15;
  const SEEDS_PER_ROW = 2;  // Adjust this based on pit size
  
  const getGridPosition = (seedNumber: number) => {
    const row = Math.floor((seedNumber - 1) / SEEDS_PER_ROW);
    const col = (seedNumber - 1) % SEEDS_PER_ROW;
    return {
      gridX: col * (SEED_SIZE + 5),  // 5px gap between seeds
      gridY: row * (SEED_SIZE + 5)
    };
  };

  // Get base position based on type and pit number
  const basePosition = type === 'player' 
    ? playerPositions[pit_number as keyof typeof playerPositions] 
    : opponentPositions[pit_number as keyof typeof opponentPositions];

  // Calculate final position including grid offset
  const gridOffset = getGridPosition(seed_number);
  const finalPosition = {
    x: (basePosition?.x ?? 0) + gridOffset.gridX,
    y: (basePosition?.y ?? 0) + gridOffset.gridY
  };

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
        x: finalPosition.x,
        y: finalPosition.y,
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
