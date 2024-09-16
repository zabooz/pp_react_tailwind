import { dataKrakenTakes } from "../../../backend/dataKraken";
import  {tripleConverter}  from "../../../utillities/converter/tripleConverter";
import { storeAndSwitch } from "../../../utillities/storeAndSwitch";




export default async function  runeTranslator  (input:string,target:HTMLElement | null) {
  const runeTranslatorArray = [];
  const newPasswordArray = tripleConverter(input);
  await dataKrakenTakes({ col: "generated_passwords" });

    for (let i = 0; i < newPasswordArray.length; i++) {
      const pwId = `runeTranslator${i}`;
      const catchId = `runeCatch${i}`;
      const versionArray : string[] = ["Einfach", "Mittel", "Stark"];
      const data = {
        pwId: pwId,
        catchId: catchId,
        catch: versionArray[i],
        password: newPasswordArray[i],
        app: "runeTranslator",
      };

      runeTranslatorArray.push(data);
    }

    sessionStorage.setItem(
      "runeTranslatorArray",
      JSON.stringify(newPasswordArray)
    );

    storeAndSwitch(runeTranslatorArray,  "runeTranslatorArray", target);
}










// leetBtn.addEventListener("click", function () {


 
//   storeAndSwitch(
//     runeRowsArr,
//     runeTranslatorArray,
//     "runeTranslatorArray",
//     "statsBody2"
//   );
// });
