import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Seed({
  color,
  length,
  type,
  seed_id,
  pit_number,
  seed_number,
  isNative,
}: {
  color?: string;
  length?: number;
  type?: "player" | "opponent";
  seed_id: number;
  pit_number: number;
  seed_number: number;
  isNative: boolean;
}) {
  // Define position maps for both player and opponent
  const playerPositions = isNative
    ? {
        1: { x: -715, y: 120 },
        2: { x: -595, y: 120 },
        3: { x: -475, y: 120 },
        4: { x: -355, y: 120 },
        5: { x: -235, y: 120 },
        6: { x: -115, y: 120 },
        7: { x: (length || 0) > 24 ? -30 : 0, y: 90 },
      }
    : {
        1: { x: 90, y: 120 },
        2: { x: 205, y: 120 },
        3: { x: 325, y: 120 },
        4: { x: 445, y: 120 },
        5: { x: 565, y: 120 },
        6: { x: 685, y: 120 },
        7: { x: (length || 0) > 24 ? 0 : 815, y: 90 },
      };

  const opponentPositions = isNative
    ? {
        1: { x: 685, y: 10 },
        2: { x: 565, y: 10 },
        3: { x: 445, y: 10 },
        4: { x: 325, y: 10 },
        5: { x: 205, y: 10 },
        6: { x: 85, y: 10 },
        7: { x: (length || 0) > 24 ? 10 : 0, y: 90 },
      }
    : {
        1: { x: -110, y: 10 },
        2: { x: -235, y: 10 },
        3: { x: -355, y: 10 },
        4: { x: -475, y: 10 },
        5: { x: -595, y: 10 },
        6: { x: -715, y: 10 },
        7: { x: (length || 0) > 24 ? 0 : -815, y: 90 },
      };

  // Updated grid position calculation
  const SEED_SIZE = 15;

  const getGridPosition = (seedNumber: number) => {
    const INNER_GRID_GAP = 2;
    const RING_GAP = 1;
    const BASE_OFFSET = 8;
    const X_SHIFT = 10;
    const Y_SHIFT = 10;

    // Special case for pit 7 (store)
    if (pit_number === 7) {
      const STORE_GRID_COLS = 3;
      const STORE_GRID_ROWS = 5;
      const SEEDS_PER_LAYER = STORE_GRID_COLS * STORE_GRID_ROWS;

      // Safari detection
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      
      // Safari-specific adjustments
      const SAFARI_X_ADJUSTMENT = isSafari ? type === "player" ? -3 : -14 : type === "player" ? -2 : -13;
      
      // Rest of the store pit calculations
      const normalizedSeedNumber = ((seedNumber - 1) % (SEEDS_PER_LAYER * 3)) + 1;
      const layer = Math.floor((normalizedSeedNumber - 1) / SEEDS_PER_LAYER);
      const positionInLayer = (normalizedSeedNumber - 1) % SEEDS_PER_LAYER;
      const row = Math.floor(positionInLayer / STORE_GRID_COLS);
      const col = positionInLayer % STORE_GRID_COLS;

      const COMPACT_GAP = 1.5;
      const verticalOffset = (STORE_GRID_ROWS / 2) * (SEED_SIZE + COMPACT_GAP);
      const LAYER_X_OFFSET = 3;
      const LAYER_Y_OFFSET = 2.5;

      return {
        gridX: Math.floor((col - 1) * (SEED_SIZE + COMPACT_GAP) + layer * LAYER_X_OFFSET) + SAFARI_X_ADJUSTMENT,
        gridY: Math.floor(row * (SEED_SIZE + COMPACT_GAP) - verticalOffset + layer * LAYER_Y_OFFSET),
      };
    }

    const MULTIPLIER = Math.floor((seedNumber - 1) / 16);
    const SPACING_INCREASE = 1.1;

    const positionInSet = ((seedNumber - 1) % 16) + 1;
    const currentSpacing =
      MULTIPLIER === 0 ? 1 : 1 + MULTIPLIER * SPACING_INCREASE;

    // First 4 seeds (2x2 grid)
    if (positionInSet <= 4) {
      const row = Math.floor((positionInSet - 1) / 2);
      const col = (positionInSet - 1) % 2;
      return {
        gridX: (col - 0.5) * (SEED_SIZE + INNER_GRID_GAP) + X_SHIFT,
        gridY: (row - 0.5) * (SEED_SIZE + INNER_GRID_GAP) + Y_SHIFT,
      };
    }

    // Ring positioning
    const ringPosition = positionInSet - 5;
    let x = 0,
      y = 0;

    if (ringPosition < 4) {
      // Positions 5-8: Top edge
      x = (ringPosition - 1.5) * (SEED_SIZE + RING_GAP) * currentSpacing;
      y = -(SEED_SIZE + RING_GAP + BASE_OFFSET) * currentSpacing;
    } else if (ringPosition < 6) {
      // Positions 9-10: Right edge
      x = (SEED_SIZE + RING_GAP + BASE_OFFSET) * currentSpacing;
      y = (ringPosition - 4.5) * (SEED_SIZE + RING_GAP) * currentSpacing;
    } else if (ringPosition < 8) {
      // Positions 11-12: Bottom edge
      x = (1.5 - (ringPosition - 6)) * (SEED_SIZE + RING_GAP) * currentSpacing;
      y = (SEED_SIZE + RING_GAP + BASE_OFFSET) * currentSpacing;
    } else {
      // Positions 13-16: Left edge
      x = -(SEED_SIZE + RING_GAP + BASE_OFFSET) * currentSpacing;
      y = (2.5 - (ringPosition - 8)) * (SEED_SIZE + RING_GAP) * currentSpacing;
    }

    return {
      gridX: x + X_SHIFT,
      gridY: y + Y_SHIFT,
    };
  };

  // Get base position based on type and pit number
  const basePosition =
    type === "player"
      ? playerPositions[pit_number as keyof typeof playerPositions]
      : opponentPositions[pit_number as keyof typeof opponentPositions];

  // Calculate final position including grid offset
  const gridOffset = getGridPosition(seed_number);
  const finalPosition = {
    x: (basePosition?.x ?? 0) + gridOffset.gridX,
    y: (basePosition?.y ?? 0) + gridOffset.gridY,
  };

  const [animationDelay, setAnimationDelay] = useState(seed_number * 0.75);

  useEffect(() => {
    setAnimationDelay(seed_number * 0.75);
  }, [seed_number]);

  return (
    <motion.div
      className={clsx(
        color === "Green"
          ? "bg-[url('./assets/green-seed.png')]"
          : "bg-[url('./assets/purple-seed.png')]",
        "w-[15px] h-[15px] bg-center bg-cover bg-no-repeat absolute",
      )}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: finalPosition.x,
        y: finalPosition.y,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 35, // Reduced from 45 for slower movement
          damping: 15, // Increased from 5 for less bounce
          delay: animationDelay,
          opacity: { duration: 0.8, delay: animationDelay }, // Slower fade in
          scale: { 
            duration: 0.6, 
            delay: animationDelay,
            type: "spring",
            stiffness: 100, // Reduced bounce on scale
            damping: 12
          },
          duration: 2.5, // Increased from 1.8 to 2.5 seconds
        },
      }}
    />
  );
}
