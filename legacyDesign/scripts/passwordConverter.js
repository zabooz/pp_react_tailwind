export function passwordConverter(password, selector) {
  // Converts a strings content based on dropdown menu choice ("selector")
  let newPassword;
  const leetTables = {
    leetSimple: {
      // Easily readable leetspeak here.
      A: "4",
      a: "4",
      C: "(",
      c: "(",
      E: "3",
      e: "3",
      I: "1",
      i: "1",
      O: "0",
      o: "0",
      S: "5",
      s: "5",
      T: "7",
      t: "7",
    },
    leetAdvanced: {
      // Somewhat readable leetspeak here.
      A: "4",
      B: "|3",
      C: "(",
      D: "|)",
      E: "3",
      H: "|-|",
      I: "1",
      K: "|<",
      L: "|_",
      M: "/V\\",
      N: "/\\/",
      O: "0",
      R: "I2",
      S: "5",
      T: "7",
      U: "|_|",
      V: "\\/",
      W: "\\/\\/",
      X: ")(",
      1: "i",
      3: "e",
      4: "a",
      5: "s",
      7: "t",
      "!": "?",
      0: "o",
      "(": "c",
    },
    leetComplicated: {
      // Define complicated leetspeak substitutions here.
      A: "(L",
      B: "|-]",
      C: "<",
      D: "?",
      E: "|=-",
      F: "v",
      G: "(_+",
      H: "#",
      I: "!",
      J: ",_|",
      K: "(7<",
      L: "£",
      M: "^^",
      N: "^/",
      O: "<>",
      Q: "&",
      R: "[z",
      S: "§",
      T: "']",
      U: "L|",
      V: "|/",
      W: "'//",
      X: "><",
      Y: "`/",
      Z: "-\\_",
      1: "i",
      3: "e",
      4: "a",
      5: "s",
      7: "t",
      "!": "?",
      0: "o",
      "(": "c",
    },
  };

  // Converting to upper case to catch lower case letters for leetspeak.
  let upperCasePw = password.toUpperCase();

  // Get the correct leetTable based on the selected converter.
  const leetTable = leetTables[selector];

  // Create a regex pattern from the keys of leetTable
  const pattern = new RegExp(`[${Object.keys(leetTable).join("")}]`, "g");

  // Use the pattern to replace characters based on the leetTable
  if (selector === "leetSimple") {
    newPassword = password.replace(pattern, (match) => leetTable[match]);
  } else {
    newPassword = upperCasePw.replace(pattern, (match) => leetTable[match]);
  }

  return newPassword;
}
