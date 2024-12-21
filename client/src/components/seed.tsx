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
}: {
  color?: string;
  length?: number;
  type?: "player" | "opponent";
  seed_id: number;
  pit_number: number;
  seed_number: number;
  pit_length?: number;
}) {
  const getMarginLeft = (
    length: number | 0,
    type: "player" | "opponent" | undefined,
  ) => {
    if (length >= 21 && type === "player") {
      return "-8px";
    } else if (length > 30 && length <= 40 && type === "opponent") {
      return "-5px";
    } else if (length > 40 && type === "opponent") {
      return "-7px";
    } else {
      return "0px";
    }
  };
  const calculateX = (type: "player" | "opponent" | undefined, seed_number: number, pit_number: number) => {
    if (type === "opponent") {
      if (seed_number < 6) {
        switch(pit_number) {
          case 1:
            return 675;
          case 2:
            return 555;
          case 3:
            return 435;
          case 4:
            return 315;
          case 5:
            return 200;
          case 6:
            return 75;
          case 7:
            return 0;
        }
      } else if (seed_number < 12) {
        switch(pit_number) {
          case 1:
            return 690;
          case 2:
            return 570;
          case 3:
            return 450;
          case 4:
            return 330;
          case 5:
            return 210;
          case 6:
            return 90;
          case 7:
            return 0;
        }
      }
      else if (seed_number < 18) {
        switch(pit_number) {
          case 1:
            return 705;
          case 2:
            return 585;
          case 3:
            return 465;
          case 4:
            return 345;
          case 5:
            return 225;
          case 6:
            return 105;
          case 7:
            return 0;
        }
      }
      else if (seed_number > 17 && seed_number <= 24) {
        switch(pit_number) {
          case 1:
            return 720;
          case 2:
            return 600;
          case 3:
            return 480;
          case 4:
            return 360;
          case 5:
            return 240;
          case 6:
            return 120;
          case 7:
            return 0;
        }
      }
    } else {
      return 0;
    }
  };
  const calculateY = (type: "player" | "opponent" | undefined, seed_number: number, pit_number: number) => {
    if (type === "opponent") {
      switch (seed_number) {
        case 1:
          return 0;
        case 2:
          return 10;
        case 3:
          return 20;
        case 4:
          return 30;
        case 5:
          return 40;
        case 6:
          return 0;
        case 7:
          return 10;
        case 8:
          return 20;
        case 9:
          return 30;
        case 10:
          return 40;
        case 11:
          return 0;
        case 12:
          return 10;
        case 13:
          return 20;
        case 14:
          return 30;
        case 15:
          return 40;
        case 16:
          return 0;
        case 17:
          return 10;
        case 18:
          return 20;
        case 19:
          return 30;
        case 20:
          return 40;
        case 21:
          return 0;
        case 22:
          return 10;
        case 23:
          return 20;
        case 24:
          return 30;
        case 25:
          return 40;
      }
    } else {
      return 0;
    }
  };
  const [x, setX] = useState(calculateX(type, seed_number, pit_number));
  const [y, setY] = useState(calculateY(type, seed_number, pit_number));
  useEffect(() => {
    setX(calculateX(type, seed_number, pit_number));
    setY(calculateY(type, seed_number, pit_number));
  }, [type, seed_number, pit_number]);
  return (
    <motion.div
      className={clsx(
        color === "Green"
          ? "bg-[url('./assets/green-seed.png')]"
          : "bg-[url('./assets/purple-seed.png')]",
        "w-[16px] h-[16px] bg-center bg-cover bg-no-repeat",
      )}
      style={{
        marginLeft: getMarginLeft(length, type),
      }}
      initial={{ x: 0, y: 0 }}
      animate={{ x, y }}
      transition={{ duration: 0.5 }}
    />
  );
}
