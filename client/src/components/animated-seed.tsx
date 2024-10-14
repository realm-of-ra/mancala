import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Seed from "./seed";

interface AnimatedSeedProps {
  color: string;
  previousPit: number;
  currentPit: number;
  playerPosition: number;
}

const AnimatedSeed: React.FC<AnimatedSeedProps> = ({
  color,
  previousPit,
  currentPit,
  playerPosition,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const calculatePosition = () => {
      const pitWidth = 60;
      const pitHeight = 125;
      const boardWidth = 700;
      const boardHeight = 350;

      let startX, startY, endX, endY;

      if (previousPit === 0) {
        // Initial position (center of the board)
        startX = boardWidth / 2;
        startY = boardHeight / 2;
      } else if (previousPit === 7) {
        // Starting from the store
        startX = playerPosition === 0 ? 0 : boardWidth;
        startY = boardHeight / 2;
      } else {
        // Starting from a regular pit
        startX = ((previousPit - 1) % 6) * pitWidth + pitWidth / 2;
        startY = previousPit > 6 ? 0 : boardHeight;
      }

      if (currentPit === 7) {
        // Ending in the store
        endX = playerPosition === 0 ? 0 : boardWidth;
        endY = boardHeight / 2;
      } else {
        // Ending in a regular pit
        endX = ((currentPit - 1) % 6) * pitWidth + pitWidth / 2;
        endY = currentPit > 6 ? 0 : boardHeight;
      }

      setPosition({ x: endX - startX, y: endY - startY });
    };

    calculatePosition();
  }, [previousPit, currentPit, playerPosition]);

  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{ x: position.x, y: position.y }}
      transition={{ duration: 0.5 }}
    >
      <Seed color={color} />
    </motion.div>
  );
};

export default AnimatedSeed;