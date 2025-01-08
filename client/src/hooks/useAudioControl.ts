import { useRef, useState, useEffect } from "react";
import { useAtom } from "jotai";
import { isPlayingAtom } from "@/atom/atoms";
import audio from "@/music/audio_1.mp4";
import emptyPitSound from "@/music/empty-pit.mp3";
import seedDropSound from "@/music/seed-drop.mp3";

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

  const playEmptyPitSound = () => {
    const emptySound = new Audio(emptyPitSound);
    emptySound.volume = volume * 0.6;
    emptySound.play();
  };

  const playSeedDropSound = () => {
    const dropSound = new Audio(seedDropSound);
    dropSound.volume = volume * 0.4;
    dropSound.play();
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      const playAudio = async () => {
        try {
          await audio.play();
          audio.loop = true;
        } catch (error) {
          if (error instanceof DOMException) {
            if (error.name === "NotAllowedError") {
              console.error(
                "Audio playback was not allowed. This may be due to autoplay restrictions.",
                error,
              );
              setPlaying(false);
            } else if (error.name === "NotSupportedError") {
              console.error(
                "The audio format is not supported by the browser.",
                error,
              );
            } else {
              console.error(
                "An error occurred while playing the audio:",
                error.name,
                error.message,
              );
            }
          } else {
            console.error(
              "An unexpected error occurred while playing the audio:",
              error,
            );
          }
        }
      };

      playAudio();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying, setPlaying]);

  return {
    isPlaying,
    togglePlay,
    volume,
    volumeDisplayValue,
    handleVolumeChange,
    audioRef,
    playEmptyPitSound,
    playSeedDropSound,
  };
}
