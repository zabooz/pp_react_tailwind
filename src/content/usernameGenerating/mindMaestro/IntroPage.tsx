interface Props {
  startQuiz: boolean;
}
function IntroPage({ startQuiz }: Props) {
  return (
    <div
      className="w-full flex flex-col gap-4 col-span-2 dark:text-gray-400"
      style={{ display: startQuiz ? "none" : "block" }}
    >
      <p>
        Mind Maestro ist ein interaktives Quiz, bei dem du deinen einzigartigen
        Benutzernamen basierend auf deinen Antworten auf 5 gezielte Fragen
        erhältst.
      </p>
      <p>
        Jede Frage zielt darauf ab, bestimmte Vorlieben, Interessen oder
        Persönlichkeitsmerkmale zu erkunden. Am Ende des Quiz wird aus deinen
        Antworten ein passender Username generiert, der deine individuelle
        Persönlichkeit widerspiegelt.
      </p>
      <p>
        Lass dich überraschen und entdecke deinen persönlichen "Mind
        Maestro"-Namen!
      </p>
    </div>
  );
}

export default IntroPage;
