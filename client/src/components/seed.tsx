import { useAudioControl } from "@/hooks/useAudioControl";
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

  const position = useMemo(() => {
    return [
      {
        x: 270,
        y: 110,
      },
      {
        x: 287,
        y: 110,
      },
      {
        x: 270,
        y: 127,
      },
      {
        x: 287,
        y: 127,
      },
      {
        x: 270,
        y: 144,
      },
      {
        x: 287,
        y: 144,
      },
      {
        x: 270,
        y: 93,
      },
      {
        x: 287,
        y: 93,
      },
      {
        x: 253,
        y: 100,
      },
      {
        x: 253,
        y: 117,
      },
      {
        x: 253,
        y: 134,
      },
      {
        x: 304,
        y: 100,
      },
      {
        x: 304,
        y: 117,
      },
      {
        x: 304,
        y: 134,
      },
      {
        x: 260,
        y: 100
      },
      {
        x: 260,
        y: 117
      },
      {
        x: 260,
        y: 134
      },
      {
        x: 278,
        y: 93
      },
      {
        x: 278,
        y: 110
      },
      {
        x: 278,
        y: 127
      },
      {
        x: 278,
        y: 143
      },
      {
        x: 296,
        y: 100
      },
      {
        x: 296,
        y: 117
      },
      {
        x: 296,
        y: 134
      },
      {
        x: 314,
        y: 110
      },
      {
        x: 314,
        y: 128
      },
      {
        x: 247,
        y: 110
      },
      {
        x: 247,
        y: 127
      },
      {
        x: 267,
        y: 95
      },
      {
        x: 267,
        y: 112
      },
      {
        x: 267,
        y: 129
      },
      {
        x: 255,
        y: 135
      },
      {
        x: 267,
        y: 146
      },
      {
        x: 278,
        y: 97
      },
      {
        x: 278,
        y: 114
      },
      {
        x: 278,
        y: 131
      },
      {
        x: 278,
        y: 148
      },
      {
        x: 289,
        y: 97
      },
      {
        x: 289,
        y: 114
      },
      {
        x: 289,
        y: 131
      },
      {
        x: 289,
        y: 148
      },
      {
        x: 300,
        y: 93
      },
      {
        x: 300,
        y: 110
      },
      {
        x: 300,
        y: 127
      },
      {
        x: 300,
        y: 144
      },
      {
        x: 312,
        y: 100
      },
      {
        x: 312,
        y: 117
      },
      {
        x: 312,
        y: 134
      }
    ]
  }, []);

  const each_position = useMemo(() => {
    switch (pit_number) {
      case 1:
        return { x: type === "player" ? position[seed_number - 1].x - 982.5 : position[seed_number - 1].x + 420, y: type === "player" ? position[seed_number - 1].y + 10 : position[seed_number - 1].y - 100 };
      case 2:
        return { x: type === "player" ? position[seed_number - 1].x - 862.5 : position[seed_number - 1].x + 300, y: type === "player" ? position[seed_number - 1].y + 10 : position[seed_number - 1].y - 100 };
      case 3:
        return { x: type === "player" ? position[seed_number - 1].x - 742.5 : position[seed_number - 1].x + 180, y: type === "player" ? position[seed_number - 1].y + 10 : position[seed_number - 1].y - 100 };
      case 4:
        return { x: type === "player" ? position[seed_number - 1].x - 622.5 : position[seed_number - 1].x + 60, y: type === "player" ? position[seed_number - 1].y + 10 : position[seed_number - 1].y - 100 };
      case 5:
        return { x: type === "player" ? position[seed_number - 1].x - 502.5 : position[seed_number - 1].x - 60, y: type === "player" ? position[seed_number - 1].y + 10 : position[seed_number - 1].y - 100 };
      case 6:
        return { x: type === "player" ? position[seed_number - 1].x - 382.5 : position[seed_number - 1].x - 185, y: type === "player" ? position[seed_number - 1].y + 10 : position[seed_number - 1].y - 100 };
      case 7:
        return { x: position[seed_number - 1].x + (type === "player" ? -262.5 : 540), y: position[seed_number - 1].y + (type === "player" ? 10 : -100) };
      default:
        return { x: 0, y: 0 };
    }
  }, [seed_number, pit_number, position, type]);

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
        x: each_position.x,
        y: each_position.y,
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
