import { Card, Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { mindMaestro } from "./mindeMastroScript";
import { useSlideContext } from "../../../contexts/Contexts";
function MindMaestro() {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    setUsername("");
  }, [username]);

  const { startAnimation } = useSlideContext();
  return (
    <Card
      className={`max-w-lg mx-auto border-4 ${
        startAnimation ? "animate-fade-out" : "animate-fade-in"
      } dark:hover:shadow-2xl`}
      imgAlt="MindMaestro Picture"
      imgSrc="src/assets/usernameGenerating/mindMaestro.jpeg"
    >
      <div className="relative">
        <div className="absolute  -top-[185px] flex items-center justify-center w-full">
          <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80   !text-gray-200">
            Mind Maestro
          </h5>
        </div>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <p className="pb-2 text-gray-400  text-center">Hallo</p>
        <div className=" grid grid-cols-2 gap-4 grid-rows-2 ">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="overflow-hidden w-full h-[170px] relative">
              <img
                src="src/assets/usernameGenerating/mindMaestro/cardDeck.jpeg"
                alt="carddeck"
                className=" mx-auto w-[10rem] object-fit rounded-md border-slate-400 border-4"
              />
            </div>
          ))}
        </div>
      </div>
      <Button className="mt-4">Start</Button>
    </Card>
  );
}

export default MindMaestro;
