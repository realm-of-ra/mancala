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
      const STORE_ROWS = 8;  // Height of vertical line
      const HORIZONTAL_LENGTH = 3;  // Length of horizontal lines
      const COMPACT_GAP = 2.5;
      
      // Calculate which E-shape layer this seed belongs to
      const SEEDS_PER_E = STORE_ROWS + (HORIZONTAL_LENGTH * 2); // Vertical line + top & bottom horizontals
      const currentLayer = Math.floor((seedNumber - 1) / SEEDS_PER_E);
      const positionInLayer = (seedNumber - 1) % SEEDS_PER_E;
      
      let row, col;
      
      if (type === "player") {
        // Player's store (right side) - E opens to the right
        if (positionInLayer < STORE_ROWS) {
          // Vertical line
          row = positionInLayer;
          col = 0;
        } else if (positionInLayer < STORE_ROWS + HORIZONTAL_LENGTH) {
          // Top horizontal line
          row = 0;
          col = positionInLayer - STORE_ROWS + 1;
        } else {
          // Bottom horizontal line
          row = STORE_ROWS - 1;
          col = positionInLayer - (STORE_ROWS + HORIZONTAL_LENGTH) + 1;
        }
      } else {
        // Opponent's store (left side) - E opens to the left
        if (positionInLayer < STORE_ROWS) {
          // Vertical line
          row = positionInLayer;
          col = HORIZONTAL_LENGTH - 1;
        } else if (positionInLayer < STORE_ROWS + HORIZONTAL_LENGTH) {
          // Top horizontal line
          row = 0;
          col = HORIZONTAL_LENGTH - 1 - (positionInLayer - STORE_ROWS);
        } else {
          // Bottom horizontal line
          row = STORE_ROWS - 1;
          col = HORIZONTAL_LENGTH - 1 - (positionInLayer - (STORE_ROWS + HORIZONTAL_LENGTH));
        }
      }

      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const SAFARI_X_ADJUSTMENT = isSafari ? 
        (type === "player" ? -3 : -14) : 
        (type === "player" ? -2 : -13);

      // Calculate base positions with layer offsets
      const LAYER_X_OFFSET = 4;
      const LAYER_Y_OFFSET = 0;
      
      const baseX = col * (SEED_SIZE + COMPACT_GAP);
      const verticalOffset = (STORE_ROWS / 2) * (SEED_SIZE + COMPACT_GAP);

      return {
        gridX: Math.floor(baseX + currentLayer * LAYER_X_OFFSET) + SAFARI_X_ADJUSTMENT,
        gridY: Math.floor(row * (SEED_SIZE + COMPACT_GAP) - verticalOffset),
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
