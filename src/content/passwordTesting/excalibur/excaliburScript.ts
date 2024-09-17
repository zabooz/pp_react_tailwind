import { zxcvbnTesting } from "./zxcvbn";
import { ZxcvbnResult } from '@zxcvbn-ts/core'
interface Props{
    setNerdStats: (value: ZxcvbnResult | null) => void
    password: string,
}



export const excaliburTesting = ({setNerdStats,password}:Props) => {
        
        const zxcvbnObject  = zxcvbnTesting(password)

        setNerdStats(zxcvbnObject)



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
    }
