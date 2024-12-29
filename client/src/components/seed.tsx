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
        7: { x: (length || 0) > 24 ? -10 : 800, y: 90 },
      };

  const opponentPositions = isNative
    ? {
        1: { x: 685, y: 10 },
        2: { x: 565, y: 10 },
        3: { x: 445, y: 10 },
        4: { x: 325, y: 10 },
        5: { x: 205, y: 10 },
        6: { x: 85, y: 10 },
        7: { x: (length || 0) > 24 ? 22 : 0, y: 90 },
      }
    : {
        1: { x: -110, y: 10 },
        2: { x: -235, y: 10 },
        3: { x: -355, y: 10 },
        4: { x: -475, y: 10 },
        5: { x: -595, y: 10 },
        6: { x: -715, y: 10 },
        7: { x: (length || 0) > 24 ? 0 : -805, y: 90 },
      };

  // Updated grid position calculation
  const SEED_SIZE = 15;

  const getGridPosition = (seedNumber: number) => {
    const INNER_GRID_GAP = 2;
    const RING_GAP = 1.5;
    const BASE_OFFSET = 10;
    const X_SHIFT = 10;
    const Y_SHIFT = 10;

    // Special case for pit 7 (store)
    if (pit_number === 7) {
      const STORE_COLS = 3;
      const STORE_ROWS = 8;
      const COMPACT_GAP = 1.5;
      
      // Calculate position based on sequential order
      const totalPositions = STORE_COLS * STORE_ROWS;
      const adjustedSeedNumber = (seedNumber - 1) % totalPositions;
      
      // Calculate initial row and column
      const row = Math.floor(adjustedSeedNumber / STORE_COLS);
      let col = adjustedSeedNumber % STORE_COLS;
      
      // Determine if we're in the middle section (the vertical parts of the U)
      const isMiddleSection = row > 1 && row < 6;
      
      if (isMiddleSection) {
        // For player's store (right side), seeds go on the left of the U
        // For opponent's store (left side), seeds go on the right of the U
        col = type === "player" ? 0 : STORE_COLS - 1;
      }

      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const SAFARI_X_ADJUSTMENT = isSafari ? 
        (type === "player" ? -3 : -14) : 
        (type === "player" ? -2 : -13);

      // Calculate base positions
      const baseX = type === "player" ? 
        col * (SEED_SIZE + COMPACT_GAP) :
        (STORE_COLS - 1 - col) * (SEED_SIZE + COMPACT_GAP);

      const verticalOffset = (STORE_ROWS / 2) * (SEED_SIZE + COMPACT_GAP);
      
      // Add a slight curve to the U shape
      const rowOffset = Math.abs(row - STORE_ROWS / 2) * 0.5;
      const curveX = type === "player" ? -rowOffset : rowOffset;

      // Calculate layer based on total seeds
      const layer = Math.floor((seedNumber - 1) / totalPositions);
      const LAYER_X_OFFSET = 2;
      const LAYER_Y_OFFSET = 1.5;

      return {
        gridX: Math.floor(baseX + layer * LAYER_X_OFFSET + curveX) + SAFARI_X_ADJUSTMENT,
        gridY: Math.floor(row * (SEED_SIZE + COMPACT_GAP) - verticalOffset + layer * LAYER_Y_OFFSET),
      };
    }

    // Regular pit logic remains the same
    const SEEDS_PER_RING = 6;
    const ringNumber = Math.floor((seedNumber - 1) / SEEDS_PER_RING);
    const positionInRing = (seedNumber - 1) % SEEDS_PER_RING;
    
    const angle = (Math.PI * positionInRing) / (SEEDS_PER_RING - 1);
    const radius = BASE_OFFSET + (ringNumber * (SEED_SIZE + RING_GAP));

    const x = Math.cos(angle) * radius;
    const y = (type === "player" ? 1 : -1) * Math.sin(angle) * radius;

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
