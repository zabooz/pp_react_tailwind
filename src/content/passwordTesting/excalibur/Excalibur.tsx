import { Card, Button, Progress, TextInput, Spinner } from "flowbite-react";
import { excaliburTesting } from "./excaliburScript";
import { useState, useEffect } from "react";
import ExcaliburModal from "./modal/ExcaliburModal";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
import { Points } from "./passwordStrengthTester";
import { thinker } from "../../../utillities/thinker";
function Excalibur() {
  const [showModal, setShowModal] = useState(false);
  const [showModalLink, setShowModalLink] = useState(false);
  const [modalLinkText, setModalLinkText] = useState("");
  const [nerdStats, setNerdStats] = useState<ZxcvbnResult | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<
    [result: number, points: Points]
  >([0, {}]);
  const [intervalId, setIntervalId] = useState<number>(0);
  const [isThinking, setIsThinking] = useState<boolean>(false);

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
    <>
      <Card
        className={`max-w-lg mx-auto border-4 ${isThinking? 'animate-glowing' :''}`}
        imgAlt="Excalibur Picture"
        imgSrc="src/assets/passwordTesting/excalibur.png"
      >
        <div className="h-full mt-3">
          <div className="relative">
            <div className="absolute  -top-[170px] flex items-center justify-center w-full">
              <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80   text-gray-200">
                Excalibur
              </h5>
            </div>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            Excalibur ist ein Tool, dass die Stärke deines Passworts überprüft. Es
            bewertet dabei Faktoren wie Länge, Komplexität und Vorhersehbarkeit
            und gibt dir eine umfassende Bewertung deiner Passwortsicherheit.
          </p>
          <div className="my-4">
            <TextInput
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            <Progress
              progress={passwordStrength[0]}
              progressLabelPosition="inside"
              textLabel="Passwort Stärke"
              textLabelPosition="outside"
              size="lg"
              labelProgress
              labelText
              className="my-2"
            />
          </div>
          <Button
            onClick={() =>
              excaliburTesting({
                setNerdStats,
                password,
                setShowModalLink,
                setModalLinkText,
                setPasswordStrength,
                setIsThinking,
              })
            }
            className="w-2/3 mx-auto mt-7 mb-4"
          >
            {isThinking ? (
              <>
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3" id="spinner"></span>
              </>
            ) : (
              <span className="pl-3">Start</span>
            )}
          </Button>
          {showModalLink && (
            <span
              onClick={() => setShowModal(true)}
              className="cursor-pointer font-bold text-gray-400 underline underline-offset-2 hover:text-[#0891b2d9]"
            >
              {modalLinkText}
            </span>
          )}
        </div>
      </Card>
      <ExcaliburModal
        openModal={showModal}
        setOpenModal={setShowModal}
        nerdStats={nerdStats}
        passwordStrength={passwordStrength}
      />
    </>
  );
}

export default Excalibur;
