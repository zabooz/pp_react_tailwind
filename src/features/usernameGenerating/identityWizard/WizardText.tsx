import { FormattedMessage } from 'react-intl';

function WizardText() {
    return (
        <p className="font-normal text-gray-700 dark:text-gray-400">
            <FormattedMessage
                id="identityWizard.text"
                defaultMessage="      Erstelle einen einzigartigen Benutzernamen, indem du bis zu zwei Gruppenvon Adjektiven und eine Gruppe von Substantiven auswählst, oder lass den Generator eine zufällige Kombination für dich erstellen."
            />{' '}
        </p>
    );
}

export default WizardText;
