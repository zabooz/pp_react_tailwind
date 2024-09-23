import { useRef } from "react";

interface Props {
  hoverTimer: boolean;
  soundFile: string;
  children: React.ReactNode;
  volume: number;
}

function HoverSound({ hoverTimer, soundFile, children, volume }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const playSound = () => {
    
    audioRef.current!.volume = volume;
    if (audioRef.current && hoverTimer) {
      setTimeout(() => {
        audioRef.current!.play();
      }, 100);
    } else if(audioRef.current) {
      setTimeout(() => {
        audioRef.current!.play();
      }, 200);
    }
  };

  console.log(soundFile);
  return (
    <div onMouseEnter={playSound} className="cursor-pointer  mx-auto  ">
      <audio ref={audioRef} src={soundFile} />
      {children}
    </div>
  );
}

export default HoverSound;
