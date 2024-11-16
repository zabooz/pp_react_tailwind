import { FormattedMessage } from "react-intl";

function ExcaliburTextContent() {
    return (
        <div className="font-normal text-gray-700 dark:text-gray-400 ">
            <p>
              <FormattedMessage id="passwordTesting.excalibur.description" 
              defaultMessage="Excalibur ist ein Tool, dass die Stärke deines Passworts überprüft. Es bewertet dabei Faktoren wie Länge, Komplexität und Vorhersehbarkeit und gibt dir eine umfassende Bewertung deiner Passwortsicherheit."
              />
            </p>
            <div className="hidden lg:block mb-7">
                <p className="my-2">
                    <FormattedMessage id="passwordTesting.excalibur.benefits" 
                    defaultMessage="Durch die Verwendung von Excalibur kannst du dein Passwort stärker schützen und deine Sicherheit verbessern."
                    />
                </p>
                <p>
                    <FormattedMessage id="passwordTesting.excalibur.howItWorks" 
                    defaultMessage="Mit diesem Tool kannst du sicherstellen, dass dein Passwort gegen Brute-Force-Angriffe und gängige Passwortlisten gut geschützt ist."
                    />

                </p>
            </div>
        </div>
    );
}

export default ExcaliburTextContent;
