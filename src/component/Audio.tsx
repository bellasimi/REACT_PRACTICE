import { forwardRef, ForwardedRef } from "react";

const Audio = forwardRef(function Audio(
  props: any,
  ref: ForwardedRef<HTMLAudioElement>
) {
  return (
    <figure>
      <figcaption>music-player</figcaption>
      <audio
        ref={ref}
        controls
        src="https://drive.google.com/uc?export=download&id=1Yb2IL4-3fvwgzxLcIqPWRrdugXFsJVxA"
      >
        <a href="https://drive.google.com/uc?export=download&id=1Yb2IL4-3fvwgzxLcIqPWRrdugXFsJVxA">
          Download audio
        </a>
      </audio>
    </figure>
  );
});

export default Audio;
