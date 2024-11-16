import { FormattedMessage } from 'react-intl';

interface Props {
    startQuiz: boolean;
}
function IntroPage({ startQuiz }: Props) {
    return (
        <div
            className="w-full flex flex-col gap-4 col-span-2 dark:text-gray-400"
            style={{ display: startQuiz ? 'none' : 'block' }}
        >
            <p>
                <FormattedMessage
                    id="MindMaestro.introText"
                    defaultMessage="Mind Maestro ist ein interaktives Quiz, bei dem du deinen einzigartigen Benutzernamen basierend auf deinen Antworten auf 5 gezielte Fragen erhältst."
                />
            </p>
            <p>
                <FormattedMessage
                    id="MindMaestro.introText2"
                    defaultMessage="Jede Frage zielt darauf ab, bestimmte Vorlieben, Interessen oder Persönlichkeitsmerkmale zu erkunden. Am Ende des Quiz wird aus deinen Antworten ein passender Username generiert, der deine individuelle Persönlichkeit widerspiegelt."
                />
            </p>
            <p>
                <FormattedMessage
                    id="MindMaestro.introText3"
                    defaultMessage="  Lass dich überraschen und entdecke deinen persönlichen Mind Maestro-Namen!"
                />
            </p>
        </div>
    );
}

export default IntroPage;
