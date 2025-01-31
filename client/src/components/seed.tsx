import { positions } from "@/lib/constants";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import audio_url from "@/music/seed-drop.mp3";

export default function Seed({
  color,
  type,
  pit_number,
  seed_number,
  isNative,
  volume,
  simulated,
  seed_id,
}: {
  color?: string;
  type?: "player" | "opponent";
  pit_number: number;
  seed_number: number;
  isNative: boolean;
  volume: number;
  simulated: boolean;
  seed_id: string;
}) {
  const [animationDelay, setAnimationDelay] = useState(0);
  const _positions = positions(type);
  const timerRef = useRef<NodeJS.Timeout>();
  const [audio] = useState(new Audio(audio_url));

  const position = useMemo(() => {
    return isNative && type === "player"
      ? _positions[pit_number - 1]?.player?.native[seed_number - 1]
      : isNative && type === "opponent"
        ? _positions[pit_number - 1]?.opponent?.native[seed_number - 1]
        : !isNative && type === "player"
          ? _positions[pit_number - 1]?.player?.non_native[seed_number - 1]
          : !isNative && type === "opponent"
            ? _positions[pit_number - 1]?.opponent?.non_native[seed_number - 1]
            : { x: 0, y: 0 };
  }, [isNative, type, _positions, pit_number, seed_number]);

  useEffect(() => {
    if (simulated) {
      setAnimationDelay(seed_number * 0.75);
    } else {
      setAnimationDelay(0);
    }
  }, [seed_number, simulated]);

  useEffect(() => {
    audio.volume = 0.35;
    // if (volume <= 0) {
    //   audio.pause();
    // }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      audio.pause();
      audio.currentTime = 0;
    };
  }, [volume, audio]);

  const play = () => {
    if (simulated) {
      timerRef.current = setTimeout(
        () => audio.play().catch(console.error),
        animationDelay * 1000 + 600,
      );
    }
  };

  return (
    <motion.div
      className={clsx(
        color === "Green"
          ? "bg-[url('./assets/green-seed.png')]"
          : "bg-[url('./assets/purple-seed.png')]",
        "w-[15px] h-[15px] bg-center bg-cover bg-no-repeat absolute",
      )}
      initial={false}
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
            damping: 12,
          },
          duration: simulated ? 2.5 : 0.5,
        },
      }}
      onAnimationStart={play}
    />
  );
}
