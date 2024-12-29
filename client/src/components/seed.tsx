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
  // For non-native seeds in opponent pits, treat them as native
  const effectiveIsNative = pit_number === 7 ? isNative : true;

  // Define position maps for both player and opponent
  const playerPositions = effectiveIsNative
    ? {
        1: { x: -715, y: 120 },
        2: { x: -595, y: 120 },
        3: { x: -475, y: 120 },
        4: { x: -355, y: 120 },
        5: { x: -235, y: 120 },
        6: { x: -115, y: 120 },
        7: { x: (length || 0) > 24 ? -40 : -15, y: 90 },
      }
    : {
        1: { x: 90, y: 120 },
        2: { x: 205, y: 120 },
        3: { x: 325, y: 120 },
        4: { x: 445, y: 120 },
        5: { x: 565, y: 120 },
        6: { x: 685, y: 120 },
        7: { x: (length || 0) > 24 ? 1000 : 1040, y: 90 },
      };

  const opponentPositions = effectiveIsNative
    ? {
        1: { x: 685, y: 10 },
        2: { x: 565, y: 10 },
        3: { x: 445, y: 10 },
        4: { x: 325, y: 10 },
        5: { x: 205, y: 10 },
        6: { x: 85, y: 10 },
        7: { x: (length || 0) > 24 ? 40 : 12, y: 90 },
      }
    : {
        1: { x: -110, y: 10 },
        2: { x: -235, y: 10 },
        3: { x: -355, y: 10 },
        4: { x: -475, y: 10 },
        5: { x: -595, y: 10 },
        6: { x: -715, y: 10 },
        7: { x: (length || 0) > 24 ? -945 : -785, y: 90 },
      };

  // Updated grid position calculation
  const SEED_SIZE = 15;

  const getGridPosition = (seedNumber: number) => {
    // Keep pit 7 (store) logic exactly as is
    if (pit_number === 7) {
      const SEEDS_PER_COLUMN = 10;
      const BASE_COMPACT_GAP = 3;
      const CURVE_FACTOR = 4;
      
      // Calculate which layer this seed belongs to
      const currentLayer = Math.floor((seedNumber - 1) / SEEDS_PER_COLUMN);
      const positionInLayer = (seedNumber - 1) % SEEDS_PER_COLUMN;
      
      // Progressive scaling for each layer
      const SCALE_REDUCTION = 0.15;
      const MIN_SCALE = 0.4;
      const LAYER_SCALE = Math.max(MIN_SCALE, 1 - (currentLayer * SCALE_REDUCTION));
      
      // Tighter base offset and spacing
      const BASE_LAYER_OFFSET = 10;
      const SPACING_INCREMENT = 0.3;
      
      // Calculate vertical position
      const row = positionInLayer;
      const verticalSpacing = (SEED_SIZE * LAYER_SCALE) + (BASE_COMPACT_GAP * LAYER_SCALE);
      const totalHeight = SEEDS_PER_COLUMN * verticalSpacing;
      
      // Create spherical convex mirror effect
      const progress = row / (SEEDS_PER_COLUMN - 1);
      const normalizedY = 2 * (progress - 0.5);
      
      let curveX, layerOffset;
      
      if (type === "opponent") {
        // Start with vertical line on left (layer 0), then curve outward
        curveX = currentLayer === 0 ? 0 : 
          -(Math.sqrt(1 - (normalizedY * normalizedY))) * CURVE_FACTOR * currentLayer;
        layerOffset = -currentLayer * (BASE_LAYER_OFFSET + (currentLayer * SPACING_INCREMENT));
      } else {
        // Player side: start with vertical line on right (layer 0), then curve outward
        curveX = currentLayer === 0 ? 0 : 
          (Math.sqrt(1 - (normalizedY * normalizedY))) * CURVE_FACTOR * currentLayer;
        layerOffset = currentLayer * (BASE_LAYER_OFFSET + (currentLayer * SPACING_INCREMENT));
      }
      
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const SAFARI_X_ADJUSTMENT = isSafari ? 
        (type === "player" ? -2 : -13) : 
        (type === "player" ? -2 : -13);

      return {
        gridX: Math.floor(layerOffset + curveX) + SAFARI_X_ADJUSTMENT,
        gridY: Math.floor(row * verticalSpacing - totalHeight/2),
      };
    }

    // New logic for pits 1-6
    const INNER_GRID_GAP = 2;
    const RING_GAP = 1;
    const BASE_OFFSET = 8;
    const X_SHIFT = 10;
    const Y_SHIFT = 10;

    const positionInSet = ((seedNumber - 1) % 16) + 1;

    // First 4 seeds in a 2x2 grid
    if (seedNumber <= 4) {
      const row = Math.floor((seedNumber - 1) / 2);
      const col = (positionInSet - 1) % 2;
      return {
        gridX: (col - 0.5) * (SEED_SIZE + INNER_GRID_GAP) + X_SHIFT,
        gridY: (row - 0.5) * (SEED_SIZE + INNER_GRID_GAP) + Y_SHIFT,
      };
    }

    // Ring positioning for seeds 5 and up
    const ringPosition = seedNumber - 4; // Position in the ring pattern
    let x = 0, y = 0;

    if (ringPosition <= 4) {
      // Left side: 4 seeds
      x = -(SEED_SIZE + BASE_OFFSET);
      y = ((ringPosition - 2.5) * (SEED_SIZE + RING_GAP));
    } else if (ringPosition <= 6) {
      // Top: 2 seeds
      x = ((ringPosition - 5.5) * (SEED_SIZE + RING_GAP));
      y = -(SEED_SIZE + BASE_OFFSET);
    } else if (ringPosition <= 10) {
      // Right side: 4 seeds
      x = (SEED_SIZE + BASE_OFFSET);
      y = ((ringPosition - 8.5) * (SEED_SIZE + RING_GAP));
    } else if (ringPosition <= 12) {
      // Bottom: 2 seeds
      x = ((ringPosition - 11.5) * (SEED_SIZE + RING_GAP));
      y = (SEED_SIZE + BASE_OFFSET);
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
