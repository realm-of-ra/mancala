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
    const positions = [
      {
        player: {
          native: [
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
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        },
        opponent: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        }
      },
      {
        player: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        },
        opponent: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        }
      },
      {
        player: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        },
        opponent: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        }
      },
      {
        player: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        },
        opponent: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        }
      },
      {
        player: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        },
        opponent: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        }
      },
      {
        player: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        },
        opponent: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        }
      },
      {
        player: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        },
        opponent: {
          native: [
            {
              x: 0,
              y: 0
            }
          ],
          non_native: [
            {
              x: 0,
              y: 0
            }
          ]
        }
      },
    ]
    return isNative && type === "player" ? positions[pit_number - 1].player.native[seed_number - 1] : isNative && type === "opponent" ? positions[pit_number - 1].opponent.native[seed_number - 1] : !isNative && type === "player" ? positions[pit_number - 1].player.non_native[seed_number - 1] : !isNative && type === "opponent" ? positions[pit_number - 1].opponent.non_native[seed_number - 1] : { x: 0, y: 0 };
  }, [pit_number, type, isNative, seed_number]);

  useEffect(() => {
    setAnimationDelay(seed_number * 0.75);
  }, [seed_number]);

  const play = () => {
    const timer = setTimeout(() => {
      playSeedDropSound();
    }, (animationDelay * 1000) + 600);

    return () => clearTimeout(timer);
  }

  console.log("position: ", position);
  console.log({
    pit_number,
    seed_number,
    type,
    isNative,
  })

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
