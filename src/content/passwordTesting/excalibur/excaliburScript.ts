import { zxcvbnTesting } from "./zxcvbn";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
import { passwordStrengthTester } from "./passwordStrengthTester";
import {Points} from "./passwordStrengthTester";


interface Props {
  setNerdStats: (value: ZxcvbnResult | null) => void;
  password: string;
  setShowModalLink: (value: boolean) => void;
  setModalLinkText: (value: string) => void;
  setPasswordStrength: (value:[result: number, points: Points]) => void;
  setIsThinking: (value: boolean) => void;
}
interface Result {
  result: number;
  points: Points
}


export const excaliburTesting = async ({
  setNerdStats,
  password,
  setShowModalLink,
  setModalLinkText,
  setPasswordStrength,
  setIsThinking
}: Props) => {
  const zxcvbnObject = zxcvbnTesting(password);
  setNerdStats(zxcvbnObject);

    setIsThinking(true);


    try {
    const result: Result = await passwordStrengthTester(password);
    setIsThinking(false);
    if (result) {
        const text =
        result.result === 100
        ? "Dein Passwort ist sicher! Keine weiteren Anpassungen erforderlich."
        : "Schau dir diese Tipps an, um dein Passwort zu verbessern.";
        
      setShowModalLink(true);
      setModalLinkText(text);
      setPasswordStrength([result.result, result.points]);
    }
  } catch (error) {
    console.log(error);
  }

  //   let result;
  //   try {
  //     result = await newPwStrength(password);

  //     why.innerText =
  //       result.result === 100
  //         ? "Dein Passwort ist sicher! Keine weiteren Anpassungen erforderlich."
  //         : "Schau dir diese Tipps an, um dein Passwort zu verbessern.";

  //     showSuggestions(result.points, password);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     if (result) {
  //       setTimeout(() => {
  //         bar.style.width = `${result.result}%`;
  //         bar.style.backgroundColor = getColorFromStrength(result.result);

  //         why.style.textDecoration =
  //           result.result !== 100 ? "underline" : "none";
  //         why.style.pointerEvents = result.result === 100 ? "none" : "auto";
  //       }, 100);
  //     }

  //     // Bereinige Intervalle und setze den Button zurück
  //     why.classList.remove("invisible");
  //     clearInterval(barAni);
  //     clearInterval(excaliburThinkerInterval);
  //     excaliburBtn.disabled = true;
  //     excaliburBtn.innerHTML = "Nochmal?";

  //     dataKrakenTakes({ col: "tested_passwords" });
  //   }
};
