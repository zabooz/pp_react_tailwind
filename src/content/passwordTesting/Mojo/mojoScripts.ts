import { dataKrakenTakes } from "../../../backend/dataKraken";
import { api } from "../../../utillities/api";
import { passwordEncoder } from "../../../utillities/encoder";
import { updateAttempts } from "../../../utillities/updateResult";

export const startBruteForce = async (
  bruteType: string,
  password: string,
  setBruteActive: (value: boolean) => void,
  interval: number,
  display: HTMLTableSectionElement,
  showAllResults: (value: boolean) => void,
  setBruteForceResults: (value: string[][]) => void,
  bruteForceResults: string[][]
) => {
  const [encodedPwd, key] = passwordEncoder(password);

  sessionStorage.setItem("stopKey", encodedPwd as string);

  let result = [password, "--", "--", "--"];

  try {
    const response = await api.get(
      `/bruteforce${bruteType}?pwd=${encodedPwd}&key=${key}`
    );
    result = response.data;
    setBruteForceResults([...bruteForceResults, result]);
  } catch (error) {
    console.error("fetch data:", error);
  } finally {
    setBruteActive(false);
    clearInterval(interval);
    showAllResults(true);
    updateAttempts([result], display);

    await dataKrakenTakes({ col: "tested_passwords" });
  }
};

export const stopBruteForce = async (
  setBruteActive: (value: boolean) => void,
  interval: number
) => {
  const stopKey = sessionStorage.getItem("stopKey");

  try {
    const response = await api.get(`/stopBruteForce?key=${stopKey}`);
    console.log("response.data:", response.data);

    setBruteActive(false);
    clearInterval(interval);
    sessionStorage.removeItem("stopKey");
  } catch (error) {
    console.error("Stop brute force process:", error);
  }
};
