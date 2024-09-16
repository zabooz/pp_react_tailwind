import { passwordConverter } from "./passwordConverter";

export function tripleConverter(password :string) {
  const pwArr = ['', '', ''];
  const modi = ["leetSimple", "leetAdvanced", "leetComplicated"];
  for (let i = 0; i < pwArr.length; i++) {
    pwArr[i] = passwordConverter({password,mode : modi[i]});
  }
  return pwArr;
}
