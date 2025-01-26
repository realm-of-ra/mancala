import { positions } from "@/lib/constants";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import audio_url from "@/music/seed-drop.mp3";

export default function TutorialSeed({
  color,
  type,
  pit_number,
  seed_number,
  isNative,
  volume,
  shouldAnimate,
  onAnimationComplete
}: {
  color?: string;
  type?: "player" | "opponent";
  pit_number: number;
  seed_number: number;
  isNative: boolean;
  volume: number;
  shouldAnimate: boolean;
  onAnimationComplete?: () => void;
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
    setAnimationDelay(seed_number * 0.3);
  }, [seed_number]);

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
    timerRef.current = setTimeout(
      () => audio.play().catch(console.error),
      animationDelay * 1000 + 600,
    );
  };

  return (
    <motion.div
      className={clsx(
        color === "Green"
          ? "bg-[url('./assets/green-seed.png')]"
          : "bg-[url('./assets/purple-seed.png')]",
        "w-[15px] h-[15px] bg-center bg-cover bg-no-repeat absolute",
      )}
      initial={shouldAnimate ? { 
        x: position?.x - 50, 
        y: position?.y - 50, 
        opacity: 0, 
        scale: 0 
      } : { 
        x: position?.x, 
        y: position?.y, 
        opacity: 1, 
        scale: 1 
      }}
      animate={{
        x: position?.x,
        y: position?.y,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 35,
        damping: 15,
        duration: 0.8,
        delay: shouldAnimate ? animationDelay : 0,
      }}
      onAnimationComplete={() => {
        if (shouldAnimate) {
          play();
          onAnimationComplete?.();
        }
      }}
    />
  );
}
