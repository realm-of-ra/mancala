import { useRef, useState, useEffect } from "react";
import { useAtom } from "jotai";
import { isPlayingAtom } from "@/atom/atoms";
import audio from "@/music/audio_1.mp4";

export function useAudioControl() {
  const [isPlaying, setPlaying] = useAtom(isPlayingAtom);
  const audioRef = useRef(new Audio(audio));
  const [volume, setVolume] = useState(0.5);
  const [volumeDisplayValue, setVolumeDisplayValue] = useState(50);

  const togglePlay = () => {
    setPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume: number = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setVolumeDisplayValue(Math.round(newVolume * 100));
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      try {
        audio.play();
        audio.loop = true;
      } catch (error) {
        console.error("Error playing the audio", error);
      }
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return {
    isPlaying,
    togglePlay,
    volume,
    volumeDisplayValue,
    handleVolumeChange,
    audioRef,
  };
}
