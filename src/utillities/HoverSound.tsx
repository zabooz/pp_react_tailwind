import { useRef } from "react";


function HoverSound({ children,hoverTimer }: { children: React.ReactNode,hoverTimer:boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (audioRef.current && hoverTimer) {
      audioRef.current.volume = 0.1;
      setTimeout(() => {
        audioRef.current!.play();
      }, 100);
    }
  };
  return (
    <div onMouseEnter={playSound} className="cursor-pointer   mx-auto  ">
      <audio ref={audioRef} src="/assets/sounds/cardSound.mp3" />
      {children}
    </div>
  );
}

export default HoverSound;
