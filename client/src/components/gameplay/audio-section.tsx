import {
  arrowup,
  playnext,
  playprevious,
  speaker,
} from "../../lib/icons_store";
import unmuteFlat from "../../assets/unmute_flat.png";
import muteFlat from "../../assets/mute_flat.png";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import audio_url from "@/music/audio_1.mp4";
import { Slider } from "../ui/slider";

export default function AudioSection({ volume, setVolume }: { volume: number, setVolume: Dispatch<SetStateAction<number>> }) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [audio] = useState(new Audio(audio_url));

  useEffect(() => {
    audio.volume = volume / 100;
    if (volume === 0) {
      audio.pause();
    } else if (volume > 0) {
      audio.play().catch(console.error);
    }
  }, [volume, audio]);

  useEffect(() => {
    audio.loop = true;
    
    audio.addEventListener('ended', () => {
      audio.play().catch(console.error);
    });

    audio.addEventListener('error', (e) => {
      console.error('Audio playback error:', e);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const togglePlay = () => {
    if (volume > 0) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
      setVolume(0)
    }
  };

  return (
    <div>
      <div
        className="flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-[url('./assets/brown-bg.png')] bg-cover bg-center bg-no-repeat"
        onClick={toggleDropdown}
      >
        <button
          className="p-0 bg-transparent rounded-full cursor-pointer"
        >
          <img
            src={volume > 0 ? unmuteFlat : muteFlat}
            width={55}
            height={35}
            alt="toggle play"
            className="rounded-full"
          />
        </button>
        <div className="flex items-center justify-center w-full gap-2 -ml-2">
          <h4 className="text-md text-left text-black font-medium">
            Playing -
          </h4>
          <h4 className="text-md text-[#e6e6e6] text-left">Storms in Africa</h4>
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
              src={volume > 0 ? unmuteFlat : muteFlat}
              width={50}
              height={50}
              alt="toggle play"
              className="rounded-full cursor-pointer"
              onClick={() => setVolume(volume > 0 ? 0 : 35)}
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
            <Slider value={[volume]} onValueChange={([value]: any) => setVolume(value)} className="w-full" track="bg-[#E48D32]" thumb="bg-[#FCE3AA]" range="bg-[#FCE3AA]" hideThumb={false} />
            <span className="flex text-sm text-[#FCE3AA]">
              {volume}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
