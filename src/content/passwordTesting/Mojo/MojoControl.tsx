import { Button, Label, Radio, Spinner, TextInput } from "flowbite-react";
import { useEffect } from "react";
import { thinker } from "../../../utillities/thinker";
import { startBruteForce, stopBruteForce } from "./mojoScripts";
import { useBruteForce } from "../../../contexts/Contexts";

interface Props {
  className?: string;
}

function MojoControl({ className }: Props) {
  const {
    bruteType,
    password,
    setIsBruteActive,
    setShowResults,
    setBruteForceResults,
    bruteForceResults,
    bruteForceThinkerInterval,
    setBruteThinkerInterval,
    isBruteActive,
    setPassword,
    setBruteType,
  } = useBruteForce();
  const handleBruteForceStart = async () => {
    setIsBruteActive(true);
    await startBruteForce(
      bruteType,
      password,
      setIsBruteActive,
      setShowResults,
      setBruteForceResults,
      bruteForceResults
    );
  };

  const handleBruteForceStop = async () => {
    await stopBruteForce(setIsBruteActive, bruteForceThinkerInterval);
  };

  const handleBruteTypeClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.tagName === "INPUT" && target.type === "radio") {
      setBruteType(target.dataset.type!);
    }
  };

  useEffect(() => {
    if (isBruteActive) {
      const spinner = document.getElementById("spinner")!;
      spinner.textContent = "...";
      const intervalId = setInterval(() => {
        spinner!.textContent = thinker();
      }, 1500);
      setBruteThinkerInterval(intervalId);
    } else {
      clearInterval(bruteForceThinkerInterval);
    }

    return () => {
      clearInterval(bruteForceThinkerInterval);
    };
  }, [isBruteActive]);

  return (
    <div
      className={className}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <TextInput
        type="text"
        onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
        placeholder="Teste ein Passwort"
      />
      <div
        onClick={(e) => handleBruteTypeClick(e)}
        className="w-full flex justify-evenly my-5"
      >
        <div className="my-2">
          <Label htmlFor="simple" className="!text-gray-400 me-2">
            Einfach
          </Label>
          <Radio
            id="simple"
            name="bruteForce"
            value={"Einfach"}
            data-type="simple"
          />
        </div>
        <div className="my-2">
          <label htmlFor="list" className="text-gray-400 me-2">
            Liste
          </label>
          <Radio
            id="list"
            name="bruteForce"
            value={"Liste"}
            data-type="library"
            defaultChecked
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-row gap-3 w-full justify-between my-3">
          <Button
            onClick={handleBruteForceStart}
            disabled={isBruteActive}
            className="w-full"
          >
            {isBruteActive ? (
              <>
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3" id="spinner"></span>
              </>
            ) : (
              <span className="pl-3">Start</span>
            )}
          </Button>
          <Button
            disabled={false}
            onClick={handleBruteForceStop}
            className="w-full"
          >
            Stop
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MojoControl;
