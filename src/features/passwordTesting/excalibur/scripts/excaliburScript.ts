import { zxcvbnTesting } from "./zxcvbn";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
import { passwordStrengthTester } from "./passwordStrengthTester";
import { Points } from "../../../../interfaces/interfaces";
import { dataKrakenTakes } from "../../../../components/login.register/backend/dataKraken";

interface Props {
  setNerdStats: (value: ZxcvbnResult | null) => void;
  password: string;
  setShowModalLink: (value: boolean) => void;
  setModalLinkText: (value: string) => void;
  setPasswordStrength: (value: { result: number; points: Points }) => void;
  setIsThinking: (value: boolean) => void;
}
interface Result {
  result: number;
  points: Points;
}

export const excaliburTesting = async ({
  setNerdStats,
  password,
  setShowModalLink,
  setModalLinkText,
  setPasswordStrength,
  setIsThinking,
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
      setPasswordStrength({ result: result.result, points: result.points });
      await dataKrakenTakes({ col: "tested_passwords" });
    }
  } catch (error) {
    console.log(error);
  }
};
