import { defineMessages } from 'react-intl';

export const simpleMessages = defineMessages({
    paragraphSimple1: {
        id: 'passwordGenerating.lang.simple.paragraphSimple1',
        defaultMessage:
            'Bei einem einfachen Bruteforce-Angriff versucht ein Angreifer systematisch, ein Passwort oder einen geheimen Schlüssel zu erraten, indem er alle möglichen Kombinationen nacheinander ausprobiert. Der Angreifer beginnt in der Regel mit den einfachsten Kombinationen, wie \'0000\' oder \'1234\', und arbeitet sich dann durch alle möglichen Kombinationen, bis er die richtige gefunden hat.',
    },
    paragraphSimple2: {
        id: 'passwordGenerating.lang.simple.paragraphSimple2',
        defaultMessage:
            'Zielsetzung: Der Angreifer hat ein spezifisches Ziel, wie z.B. den Zugriff auf ein Benutzerkonto, eine verschlüsselte Datei oder ein geschütztes System.',
    },
    paragraphSimple3: {
        id: 'passwordGenerating.lang.simple.paragraphSimple3',
        defaultMessage:
            'Kombinationsauswahl: Der Angreifer generiert alle möglichen Kombinationen aus Zeichen, die für das Passwort verwendet werden können. Bei einem vierstelligen numerischen Passwort wären dies z.B. alle Kombinationen von \'0000\' bis \'9999\'.',
    },
});
