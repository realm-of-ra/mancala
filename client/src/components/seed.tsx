import { useAudioControl } from "@/hooks/useAudioControl";
import { positions } from "@/lib/constants";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

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
  const [animationDelay, setAnimationDelay] = useState(seed_number * 0.75);
  const { playSeedDropSound } = useAudioControl();
  const _positions = positions(type);

  const position = useMemo(() => {
    return isNative && type === "player" ? _positions[pit_number - 1].player.native[seed_number - 1] : isNative && type === "opponent" ? _positions[pit_number - 1].opponent.native[seed_number - 1] : !isNative && type === "player" ? _positions[pit_number - 1].player.non_native[seed_number - 1] : !isNative && type === "opponent" ? _positions[pit_number - 1].opponent.non_native[seed_number - 1] : { x: 0, y: 0 };
  }, [isNative, type, _positions, pit_number, seed_number]);

  useEffect(() => {
    setAnimationDelay(seed_number * 0.75);
  }, [seed_number]);

  const play = () => {
    const timer = setTimeout(() => {
      playSeedDropSound();
    }, (animationDelay * 1000) + 600);

    return () => clearTimeout(timer);
  }

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
        x: position?.x,
        y: position?.y,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 35,
          damping: 15,
          delay: animationDelay,
          opacity: { duration: 0.8, delay: animationDelay },
          scale: {
            duration: 0.6, 
            delay: animationDelay,
            type: "spring",
            stiffness: 100,
            damping: 12
          },
          duration: 2.5,
        },
      }}
      onAnimationStart={play}
    >{pit_number}</motion.div>
  );
}
