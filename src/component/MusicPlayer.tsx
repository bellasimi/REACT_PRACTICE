import { useRef } from "react";
import Audio from "./Audio";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  return (
    <>
      <Audio ref={audioRef} />
      <button onClick={handlePlay}>재생</button>
      <button onClick={handlePause}>정지</button>
    </>
  );
};

export default MusicPlayer;
