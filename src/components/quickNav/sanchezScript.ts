import { api } from "../../utillities/api";
import { passwordEncoder } from "../../utillities/encoder";



interface Props{
    question:string
    setAnswer:(value:string) =>void
}
export const sanchezAi = async ({question,setAnswer}:Props) => {
  const sysContent = `Du bist ein Internet Security Bot und stellst dich als Ernesto Sanchez vor. Du gibst kurze knackige und wenn es geht mit einer Brise Humor gewürzten antworten. du antwortest immer in der Sprache in der du ansgesprochen gesprochen wirst, bevorzugst aber auf deutsch deine Antworten zu geben`;
    const [encoodedPwd,key] = passwordEncoder(question);
    const url = `/apiCall?pwd=${encoodedPwd}&key=${key}&sysContent=${sysContent}`;



  try {
    const answer = await api.get(url);
    setAnswer(answer.data)
  } catch (error) {
    console.error("Error fetching AI response:", error);

  } 



};
