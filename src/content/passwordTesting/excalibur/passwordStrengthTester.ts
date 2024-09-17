import { aiApiCall } from "../../../utillities/aiApiCall";

const sonderzeichen = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "§",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
];


export type Points = {
  [key: string]: {
    value: boolean;
    textTrue: string;
    textFalse: string;
  };
};


const kleinbuchstaben = "abcdefghijklmnopqrstuvwxyz".split("");
const grossbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const zahlen = "0123456789".split("");

export async function passwordStrengthTester(password:string) {
  let result = 0;

  const sysContent =
    "you can only answer with one word, it should be yes or no. does this password contains a word, either in german,english,france or spanish?";

  const points:Points = {
    pointForNumber: {
      value: false,
      textTrue: "Enthält mindestens eine Ziffer.",
      textFalse: "Enthält keine Ziffer.",
    },
    pointForSLetter: {
      value: false,
      textTrue: "Enthält mindestens einen Kleinbuchstaben.",
      textFalse: "Enthält keinen Kleinbuchstaben.",
    },
    pointForBLetter: {
      value: false,
      textTrue: "Enthält mindestens einen Großbuchstaben.",
      textFalse: "Enthält keinen Großbuchstaben.",
    },
    pointForSigns: {
      value: false,
      textTrue: "Enthält mindestens ein Sonderzeichen.",
      textFalse: "Enthält kein Sonderzeichen.",
    },
    noSequence: {
      value: false,
      textTrue: "Hat keine aufeinander folgende Zeichen.",
      textFalse: "Hat aufeinander folgende Zeichen.",
    },
    noRepeat: {
      value: false,
      textTrue: "Keine wiederholenden Zeichen.",
      textFalse: "Enthält wiederholende Zeichen.",
    },
    pointForLength: {
      value: password.length >= 12,
      textTrue: "Passwort besteht aus mindestens 12 Zeichen.",
      textFalse: "Passwort besteht aus weniger als 12 Zeichen.",
    },
    hasNoWord: {
      value: false,
      textTrue: "Enthält kein geläufiges Wort.",
      textFalse: "Enthält ein geläufiges Wort.",
    },
  };

  if (sonderzeichen.some((z) => password.includes(z))) {
    points.pointForSigns.value = true;
  }
  if (kleinbuchstaben.some((z) => password.includes(z))) {
    points.pointForSLetter.value = true;
  }
  if (grossbuchstaben.some((z) => password.includes(z))) {
    points.pointForBLetter.value = true;
  }
  if (zahlen.some((z) => password.includes(z))) {
    points.pointForNumber.value = true;
  }

  password = password.toLowerCase();
  for (let i = 0; i < password.length - 2; i++) {
    const charCodeOne = password.charCodeAt(i);
    const charCodeTwo = password.charCodeAt(i + 1);
    const charCodeThree = password.charCodeAt(i + 2);

    if (!(charCodeOne === charCodeTwo && charCodeTwo === charCodeThree)) {
      points.noRepeat.value = true;
    }

    if (!sonderzeichen.some((z) => password[i] === z)) {
      if (
        !(charCodeOne + 1 === charCodeTwo && charCodeTwo + 1 === charCodeThree)
      ) {
        points.noSequence.value = true;
      }
    }

    if (!sonderzeichen.some((z) => password[i] === z)) {
      if (
        !(charCodeOne - 1 === charCodeTwo && charCodeTwo - 1 === charCodeThree)
      ) {
        points.noSequence.value = true;
      }
    }
  }

  try {
    const response = await aiApiCall(password, sysContent);
    points.hasNoWord.value = !response.toLowerCase().includes("yes");
  } catch (error) {
    console.error("API call error:", error);
    points.hasNoWord.value = false;
  }

  for (const key in points) {
    if (points[key].value === true) {
      result += 12.5;
    }
  }

  return { result, points };
}
