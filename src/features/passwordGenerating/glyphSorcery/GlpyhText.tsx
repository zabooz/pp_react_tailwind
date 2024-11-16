import { FormattedMessage } from 'react-intl';

function GlpyhText() {
    return (
        <p className="font-normal text-gray-700 dark:text-gray-400">
            <FormattedMessage
                id="passwordGenerating.glyphSorcery.description"
                defaultMessage="Je länger dein Passwort ist, desto sicherer ist es. Mit Glyph Sourcery kannst du dir schnell und unkompliziert ein Passwort in deiner gewünschten Länge erstellen, die den Richtlinien für sichere Passwörter entsprechen."
            />
        </p>
    );
}

export default GlpyhText;
