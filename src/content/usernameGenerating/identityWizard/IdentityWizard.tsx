import { Card } from "flowbite-react";
import Selectors from "./Selectors";

import { useSlideContext } from "../../../contexts/Contexts";
const IdentityWizard = () => {
  const { startAnimation } = useSlideContext();

  return (
    <Card
      className={`max-w-lg mx-auto border-4 ${
        startAnimation ? "animate-fade-out" : "animate-fade-in"
      } dark:hover:shadow-2xl`}
      imgAlt="Identity Wizard Picture"
      imgSrc="/assets/usernameGenerating/identityWizard.jpg"
    >
      <div className="relative">
        <div className="absolute  -top-[185px] flex items-center justify-center w-full">
          <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80   !text-gray-200">
            Identity Wizard
          </h5>
        </div>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Erstelle einen einzigartigen Benutzernamen, indem du bis zu zwei Gruppen
        von Adjektiven und eine Gruppe von Substantiven auswählst, oder lass den
        Generator eine zufällige Kombination für dich erstellen.{" "}
      </p>
      <div className="flex flex-col">
        <Selectors />
      </div>
    </Card>
  );
};

export default IdentityWizard;
