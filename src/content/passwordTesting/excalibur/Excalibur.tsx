import { Card } from "flowbite-react";

import { useState, useEffect } from "react";
import ExcaliburModal from "./modal/ExcaliburModal";
import { thinker } from "../../../utillities/thinker";
import { useExcalibur, useSlideContext } from "../../../contexts/Contexts";
import ExcaliburControl from "./ExcaliburControl";
import ExcaliburTextContent from "./ExcaliburTextContent";
import ExcaliburHeader from "./ExcaliburHeader";
import ModalLink from "./modal/ModalLink";

interface Props {
  mojoGrow: boolean;
  colDelay: boolean;
  handleCardGrow: (grow: boolean) => void;
  onSite: boolean;
  excaliburGrow: boolean;
}

function Excalibur({ mojoGrow, onSite, excaliburGrow }: Props) {
  const { isThinking, passwordStrength, nerdStats, showModal, setShowModal } =
    useExcalibur();

  const { startAnimation } = useSlideContext();
  const [intervalId, setIntervalId] = useState<number>(0);
  useEffect(() => {
    if (isThinking) {
      const spinner = document.getElementById("spinner")!;
      spinner.textContent = "...";
      const number = setInterval(() => {
        spinner!.textContent = thinker();
      }, 1500);
      setIntervalId(number);
    } else {
      clearInterval(intervalId);
    }
  }, [isThinking]);

  return (
    <div className={` ${!onSite ? "" : mojoGrow ? "lg:vanish" : "lg:appear"} `}>
      <Card
        className={`max-w-lg mx-auto border-4 ${
          startAnimation ? "animate-fade-out" : "animate-fade-in"
        } dark:hover:shadow-2xl transition-shadow duration-1000 min-h-[670px]  `}
        imgAlt="Excalibur Picture"
        imgSrc="/assets/passwordTesting/excalibur.webp"
      >
        <ExcaliburHeader />
        <ExcaliburTextContent />
        <ExcaliburControl />
        <ModalLink />
      </Card>
      <ExcaliburModal
        openModal={showModal}
        setOpenModal={setShowModal}
        nerdStats={nerdStats}
        passwordStrength={passwordStrength}
      />
    </div>
  );
}

export default Excalibur;
