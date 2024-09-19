import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { truncateString } from "@/lib/utils";

interface PlayerProfileProps {
  name?: string;
  address?: string;
  wins?: number;
  isLeftSide: boolean;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({
  name,
  address,
  wins,
  isLeftSide,
}) => {
  const level =
    wins === undefined || Number.isNaN(Math.floor(wins))
      ? 1
      : Math.floor(wins) < 4
        ? 1
        : Math.floor(wins / 4) + 1;

  const displayName =
    name || (address ? truncateString(address) : "Unknown Player");

  return (
    <div
      className={`flex flex-row ${isLeftSide ? "space-x-2.5" : "space-x-2.5 flex-row-reverse"} items-center justify-center ${isLeftSide ? "mr-56 2xl:mr-80 4xl:mr-56" : "ml-56 2xl:ml-80 4xl:ml-56"}`}
    >
      <div className="ml-2.5">
        <h3
          className={`text-3xl text-white ${isLeftSide ? "text-right" : "text-left"}`}
        >
          {displayName}
        </h3>
        <h4
          className={`text-base text-[#F58229] ${isLeftSide ? "text-right" : "text-left"}`}
        >
          {`Level ${level}`}
        </h4>
      </div>
      <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
        <div className="bg-[#15171E] rounded-full p-2.5">
          <UserIcon color="#F58229" className="w-8 h-8" />
        </div>
        <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
          <div className="h-4 w-4 bg-[#00FF57] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
