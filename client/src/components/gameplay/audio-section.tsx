import {
    arrowup,
    playnext,
    playprevious,
    speaker,
} from "../../lib/icons_store";
import unmuteFlat from "../../assets/unmute_flat.png";
import muteFlat from "../../assets/mute_flat.png";
import { useAudioControl } from "@/hooks/useAudioControl";
import { useState } from "react";

export default function AudioSection() {
    const {
        isPlaying,
        togglePlay,
        volume,
        volumeDisplayValue,
        handleVolumeChange,
    } = useAudioControl();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    return(
        <div>
        <div
              className="flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-[url('./assets/brown-bg.png')] bg-cover bg-center bg-no-repeat"
              onClick={toggleDropdown}
            >
              <button
                className="p-0 bg-transparent rounded-full cursor-pointer"
                onClick={togglePlay}
              >
                <img
                  src={isPlaying ? unmuteFlat : muteFlat}
                  width={55}
                  height={35}
                  alt="toggle play"
                  className="rounded-full"
                />
              </button>
              <div className="flex items-center justify-center w-full gap-2 -ml-2">
                <h4 className="text-md text-left text-black font-medium">Playing -</h4>
                <h4 className="text-md text-[#e6e6e6] text-left">
                  Storms in Africa
                </h4>
              </div>
              <img
                src={arrowup}
                alt="see song"
                width={20}
                height={20}
                className={`ml-4 cursor-pointer transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"} opacity-40`}
                onClick={toggleDropdown}
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute bottom-24 left-[1%] bg-transparent backdrop-blur-md rounded-md shadow-lg px-6 py-4 z-50 w-[300px]">
                <div className="flex items-center justify-center space-x-1.5">
                  <img
                    src={playprevious}
                    width={30}
                    height={30}
                    alt="toggle play previous"
                    className="rounded-full cursor-pointer"
                  />
                  <img
                    src={isPlaying ? unmuteFlat : muteFlat}
                    width={50}
                    height={50}
                    alt="toggle play"
                    className="rounded-full cursor-pointer"
                    onClick={togglePlay}
                  />
                  <img
                    src={playnext}
                    width={30}
                    height={30}
                    alt="toggle play next"
                    className="rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-center mt-2 gap-2 bg-[#0c0c0c65] px-2 py-1 rounded-full">
                  <img
                    src={speaker}
                    width={20}
                    height={20}
                    alt="toggle play"
                    className="rounded-full"
                  />
                  <input
                    type="range"
                    name="volume"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={{
                      // Custom track styling
                      background: `linear-gradient(to right, #FCE3AA 0%, #FCE3AA ${volume * 100}%, #E48D32  ${volume * 100}%, #E48D32 100%)`,
                      // Hide the thumb by making it transparent and very small
                      WebkitAppearance: "none",
                      appearance: "none",
                      width: "100%",
                      height: "12px",
                      borderRadius: "full",
                    }}
                    className="w-20 h-4 rounded-full cursor-grab"
                  />
                  <span className="flex text-sm text-[#FCE3AA]">
                    {volumeDisplayValue}
                  </span>
                </div>
              </div>
            )}
        </div>
    )
}