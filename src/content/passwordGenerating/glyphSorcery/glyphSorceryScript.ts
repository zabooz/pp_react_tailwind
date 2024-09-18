import { generateEzPw } from "./passwordSandBox"
import { dataKrakenTakes } from "../../../backend/dataKraken";


export const glyphSorcery = async (language:string,length:number) => {
        const storedGlyphArray = JSON.parse(sessionStorage.getItem("storedGlyphArray") || "[]");

        const password = generateEzPw(length, language);
        const key = `${password}`;

        

        const data = {
          key: key,
          catch: length,
          password: password,
        };
        dataKrakenTakes({ col: "generated_passwords" });
        storedGlyphArray.push(data);
        sessionStorage.setItem("storedGlyphArray", JSON.stringify(storedGlyphArray));
        return storedGlyphArray

}

