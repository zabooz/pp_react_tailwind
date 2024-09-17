import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en'
import * as  zxcvbnDePackage from '@zxcvbn-ts/language-de'





export const zxcvbnTesting = (password:string) => {
    
    const options = {
      translations: zxcvbnEnPackage.translations,
      graphs: zxcvbnCommonPackage.adjacencyGraphs,
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
        ...zxcvbnDePackage.dictionary,
      },
    }
    
    zxcvbnOptions.setOptions(options)

     return zxcvbn(password)

}


export const stats = (nerdStats: ZxcvbnResult) => {
    return [

      [
        { stat: "password", value: nerdStats.password },
        { stat: "calcTime", value: nerdStats.calcTime },
        { stat: "guesses", value: nerdStats.guesses },
        { stat: "score", value: nerdStats.score }
      ],
 
      [
        { method: "offlineFastHash", time: nerdStats.crackTimesDisplay.offlineFastHashing1e10PerSecond },
        { method: "offlineSlowHash", time: nerdStats.crackTimesDisplay.offlineSlowHashing1e4PerSecond },
        { method: "onlineNoThrottle", time: nerdStats.crackTimesDisplay.onlineNoThrottling10PerSecond },
        { method: "onlineThrottle", time: nerdStats.crackTimesDisplay.onlineThrottling100PerHour }
      ],

      [
        { type: "warning", message: nerdStats.feedback.warning },
        { type: "suggestions", message: nerdStats.feedback.suggestions }
      ],

      nerdStats.sequence
    ];
  };


export const displayResult = (result: ZxcvbnResult) => {
    const base = document.getElementById("base");
  
    const baseStats = [
      {
        stat: "password",
        value: result.password,
      },
      {
        stat: "calcTime",
        value: result.calcTime,
      },
      {
        stat: "guesses",
        value: result.guesses,
      },
      {
        stat: "score",
        value: result.score,
      },
    ];
  
    baseStats.forEach((item) => {
      base.innerHTML += `<p>${item.stat}: <span>${item.value}</span></p>`;
    });
  
    const crackTime = document.getElementById("crackTime");
  
    const crackTimesDisplay = [
      {
        method: "offlineFastHash",
        time: result.crackTimesDisplay.offlineFastHashing1e10PerSecond,
      },
      {
        method: "offlineSlowHash",
        time: result.crackTimesDisplay.offlineSlowHashing1e4PerSecond,
      },
      {
        method: "onlineNoThrottle",
        time: result.crackTimesDisplay.onlineNoThrottling10PerSecond,
      },
      {
        method: "onlineThrottle",
        time: result.crackTimesDisplay.onlineThrottling100PerHour,
      },
    ];
  
    crackTimesDisplay.forEach((item) => {
      crackTime.innerHTML += `<p>${item.method}: <span>${item.time}</span></p>`;
    });
  
    const feedback = document.getElementById("feedback");
  
    const feedbackDisplay = [
      {
        type: "warning",
        message: result.feedback.warning,
      },
      {
        type: "suggestions",
        message: result.feedback.suggestions,
      },
    ];
  
    feedbackDisplay.forEach((item) => {
      if (item.type === "suggestions") {
        item.message.forEach((suggestion) => {
          feedback.innerHTML += `<p>${item.type}: <span>${suggestion}</span></p>`;
        });
      } else {
        feedback.innerHTML += `<p>${item.type}: <span>${item.message}</span></p>`;
      }
    });
  
    const sequence = document.getElementById("sequence");
    const keys = ["guesses", "pattern", "token"];
  
    result.sequence.forEach((item) => {
      for (const key in item) {
        if (keys.includes(key))
          sequence.innerHTML += `<p>${key}: <span>${item[key]}</span></p>`;
      }
    });
  };
  



