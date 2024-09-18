import { dataKrakenTakes } from "../../../backend/dataKraken";
import { tripleConverter } from "../../../utillities/converter/tripleConverter";

export default async function runeTranslator(input: string) {
  const runeTranslatorArray = [];
  const newPasswordArray = tripleConverter(input);
  await dataKrakenTakes({ col: "generated_passwords" });

  for (let i = 0; i < newPasswordArray.length; i++) {
    const key = `runeTranslator${i}`;
    const versionArray: string[] = ["Einfach", "Mittel", "Stark"];
    const data = {
      key: key,
      catch: versionArray[i],
      password: newPasswordArray[i],
    };

    runeTranslatorArray.push(data);
  }

  sessionStorage.setItem(
    "runeTranslatorArray",
    JSON.stringify(runeTranslatorArray)
  );

  return runeTranslatorArray;
}
