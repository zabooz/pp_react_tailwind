import { dataKrakenTakes } from '../../../components/login.register/backend/dataKraken';
import { tripleConverter } from '../../../utillities/converter/tripleConverter';

export default async function runeTranslator(input: string) {
  const runeTranslatorArray = [];
  const newPasswordArray = tripleConverter(input);
  await dataKrakenTakes({ col: 'generated_passwords' });

  for (let i = 0; i < newPasswordArray.length; i++) {
    const key = `runeTranslator${i}`;
    const versionArray: string[] = ['Einfach', 'Mittel', 'Stark'];
    const data = {
      key: key,
      catch: versionArray[i],
      value: newPasswordArray[i],
      type: 'password',
    };

    runeTranslatorArray.push(data);
  }
  return runeTranslatorArray;
}
