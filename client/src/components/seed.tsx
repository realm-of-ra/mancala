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
  isNative
}: {
  color?: string;
  length?: number;
  type?: "player" | "opponent";
  seed_id: number;
  pit_number: number;
  seed_number: number;
  pit_length?: number;
  isNative: boolean;
}) {
  // Define position maps for both player and opponent
  const playerPositions = isNative ? {
    1: { x: -715, y: 120 },
    2: { x: -595, y: 120 },
    3: { x: -475, y: 120 },
    4: { x: -355, y: 120 },
    5: { x: -235, y: 120 },
    6: { x: -115, y: 120 },
    7: { x: 785, y: 150 },
  } : {
    1: { x: 90, y: 120 },
    2: { x: 205, y: 120 },
    3: { x: 325, y: 120 },
    4: { x: 445, y: 120 },
    5: { x: 565, y: 120 },
    6: { x: 685, y: 120 },
    7: { x: 785, y: 150 },
  };

  const opponentPositions = isNative ? {
    1: { x: 685, y: 10 },
    2: { x: 565, y: 10 },
    3: { x: 445, y: 10 },
    4: { x: 325, y: 10 },
    5: { x: 205, y: 10 },
    6: { x: 85, y: 10 },
    7: { x: 0, y: 110 },
  } : {
    1: { x: -110, y: 10 },
    2: { x: -235, y: 10 },
    3: { x: -355, y: 10 },
    4: { x: -475, y: 10 },
    5: { x: -595, y: 10 },
    6: { x: -715, y: 10 },
    7: { x: 0, y: 110 },
  };

  // Updated grid position calculation
  const SEED_SIZE = 15;
  const INNER_GAP = 5;  // Gap for inner grid
  const OUTER_GAP = 8;  // Slightly larger gap for outer seeds
  
  const getGridPosition = (seedNumber: number, totalSeeds: number) => {
    const INNER_GRID_GAP = 5;
    const RING_GAP = 4;
    const BASE_OFFSET = 8;
    const X_SHIFT = 6;
    const Y_SHIFT = 6;
    const MULTIPLIER = Math.floor((seedNumber - 1) / 16);
    const SPACING_INCREASE = 1.1;
    
    const positionInSet = ((seedNumber - 1) % 16) + 1;
    const currentSpacing = MULTIPLIER === 0 ? 1 : (1 + (MULTIPLIER * SPACING_INCREASE));
    
    // First 4 seeds (2x2 grid)
    if (positionInSet <= 4) {
      const row = Math.floor((positionInSet - 1) / 2);
      const col = (positionInSet - 1) % 2;
      return {
        gridX: (col - 0.5) * (SEED_SIZE + INNER_GRID_GAP) + X_SHIFT,
        gridY: (row - 0.5) * (SEED_SIZE + INNER_GRID_GAP) + Y_SHIFT
      };
    }
    
    // Ring positioning
    const ringPosition = positionInSet - 5;
    let x = 0, y = 0;
    
    if (ringPosition < 4) {
      x = (ringPosition - 1.5) * (SEED_SIZE + RING_GAP) * currentSpacing;
      y = -(SEED_SIZE + RING_GAP + BASE_OFFSET) * currentSpacing;
    } else if (ringPosition < 6) {
      x = (SEED_SIZE + RING_GAP + BASE_OFFSET) * currentSpacing;
      y = (ringPosition - 4.5) * (SEED_SIZE + RING_GAP) * currentSpacing;
    } else if (ringPosition < 10) {
      x = (4.5 - (ringPosition - 5)) * (SEED_SIZE + RING_GAP) * currentSpacing;
      y = (SEED_SIZE + RING_GAP + BASE_OFFSET) * currentSpacing;
    } else {
      x = -(SEED_SIZE + RING_GAP + BASE_OFFSET) * currentSpacing;
      y = (11.5 - ringPosition) * (SEED_SIZE + RING_GAP) * currentSpacing;
    }
    
    return { 
      gridX: x + X_SHIFT,
      gridY: y + Y_SHIFT
    };
  };

  // Get base position based on type and pit number
  const basePosition = type === 'player' 
    ? playerPositions[pit_number as keyof typeof playerPositions] 
    : opponentPositions[pit_number as keyof typeof opponentPositions];

  // Calculate final position including grid offset
  const gridOffset = getGridPosition(seed_number, pit_length || 0);
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
