import { generateEzPw } from "./passwordSandBox"
import { dataKrakenTakes } from "../../../backend/dataKraken";
import { storeAndSwitch } from "../../../utillities/storeAndSwitch";

export const glyphSorcery = async (language:string,length:number,target:HTMLElement) => {
        const storedGlyphArray = JSON.parse(sessionStorage.getItem("storedGlyphArray") || "[]");

        const password = generateEzPw(length, language);
        const pwid = `${password}`;
        const lengthid = `${length + password}`;
        const app = "glyphSorcery";
        

        const data = {
          pwid: pwid,
          catchId: lengthid,
          catch: length,
          password: password,
          app: app,
        };
        dataKrakenTakes({ col: "generated_passwords" });
        storedGlyphArray.push(data);
        storeAndSwitch(storedGlyphArray, "storedGlyphArray", target);
}

