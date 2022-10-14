import { useEffect, useRef } from "react";

const MusicPlayer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  useEffect(() => {
    console.log(ref);
  }, []);

  return (
    <>
      <figure>
        <figcaption>music-player</figcaption>
        <audio
          ref={audioRef}
          controls
          src="https://drive.google.com/uc?export=download&id=1Yb2IL4-3fvwgzxLcIqPWRrdugXFsJVxA"
        >
          <a href="https://drive.google.com/uc?export=download&id=1Yb2IL4-3fvwgzxLcIqPWRrdugXFsJVxA">
            Download audio
          </a>
        </audio>
      </figure>
      <div ref={ref}>
        <button onClick={handlePlay}>재생</button>
        <button onClick={handlePause}>정지</button>
      </div>
    </>
  );
};

export default MusicPlayer;
