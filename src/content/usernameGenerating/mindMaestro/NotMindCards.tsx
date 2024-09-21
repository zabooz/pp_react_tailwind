import { mindMaestro } from "./mindeMastroScript";
import { CopyToClipBoard } from "../../../utillities/CopyToClipBoard";
interface Props {
  values: string[];
}
function NotMindCards({ values }: Props) {


  const username = mindMaestro({ values });

  return (
    <div className="w-full  dark:text-gray-400">
      {values.length === 5 ? (
        <div className="w-full  flex h-[300px] flex-col items-center border rounded"
        style={{ backgroundImage:"url('/assets/usernameGenerating/mindMaestro/endCard.jpeg')"  }}
        >
          <h5 className="text-lg mt-8 font-semibold  dark:text-gray-300">Dein Ergebnis</h5>
          <p className="mt-12 border rounded p-2 w-2/3 text-center text-xl dark:bg-slate-800  font-bold"
           
          
          >
            <CopyToClipBoard password={username} type="username">
            {username}
            </CopyToClipBoard>
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4  dark:text-gray-400">
          <p>
            Mind Maestro ist ein interaktives Quiz, bei dem du deinen
            einzigartigen Benutzernamen basierend auf deinen Antworten auf 5
            gezielte Fragen erhältst.
          </p>
          <p>
            Jede Frage zielt darauf ab, bestimmte Vorlieben, Interessen oder
            Persönlichkeitsmerkmale zu erkunden. Am Ende des Quiz wird aus
            deinen Antworten ein passender Username generiert, der deine
            individuelle Persönlichkeit widerspiegelt.
          </p>
          <p>
            Lass dich überraschen und entdecke deinen persönlichen "Mind
            Maestro"-Namen!
          </p>
        </div>
      )}
    </div>
  );
}

export default NotMindCards;
