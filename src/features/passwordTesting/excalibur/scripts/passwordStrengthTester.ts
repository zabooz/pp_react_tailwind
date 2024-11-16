import { aiApiCall } from './aiApiCall';
import { Points } from '../../../../interfaces/interfaces';
const sonderzeichen = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '§',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '=',
    '+',
    '[',
    ']',
    '{',
    '}',
    ';',
    ':',
    '"',
    '\'',
    '<',
    '>',
    ',',
    '.',
    '?',
    '/',
];

const kleinbuchstaben = 'abcdefghijklmnopqrstuvwxyz'.split('');
const grossbuchstaben = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const zahlen = '0123456789'.split('');
//eslint-disable-next-line
export async function passwordStrengthTester(password: string) {
    let result = 0;

    const sysContent =
        'you can only answer with one word, it should be yes or no. does this password contains a word, either in german,english,france or spanish?';

    const points: Points = {
        pointForNumber: {
            value: false,
            textTrue: 'Enthält mindestens eine Ziffer.',
            textFalse: 'Enthält keine Ziffer.',
        },
        pointForSLetter: {
            value: false,
            textTrue: 'Enthält mindestens einen Kleinbuchstaben.',
            textFalse: 'Enthält keinen Kleinbuchstaben.',
        },
        pointForBLetter: {
            value: false,
            textTrue: 'Enthält mindestens einen Großbuchstaben.',
            textFalse: 'Enthält keinen Großbuchstaben.',
        },
        pointForSigns: {
            value: false,
            textTrue: 'Enthält mindestens ein Sonderzeichen.',
            textFalse: 'Enthält kein Sonderzeichen.',
        },
        noSequence: {
            value: true,
            textTrue: 'Hat keine aufeinander folgende Zeichen.',
            textFalse: 'Hat aufeinander folgende Zeichen.',
        },
        noRepeat: {
            value: true,
            textTrue: 'Keine wiederholenden Zeichen.',
            textFalse: 'Enthält wiederholende Zeichen.',
        },
        pointForLength: {
            value: password.length >= 12,
            textTrue: 'Passwort besteht aus mindestens 12 Zeichen.',
            textFalse: 'Passwort besteht aus weniger als 12 Zeichen.',
        },
        hasNoWord: {
            value: false,
            textTrue: 'Enthält kein geläufiges Wort.',
            textFalse: 'Enthält ein geläufiges Wort.',
        },
    };

    if (sonderzeichen.some((z) => password.includes(z))) {
        points.pointForSigns.value = true;
    }
    if (kleinbuchstaben.some((z) => password.includes(z))) {
        points.pointForSLetter.value = true;
    }
    if (grossbuchstaben.some((z) => password.includes(z))) {
        points.pointForBLetter.value = true;
    }
    if (zahlen.some((z) => password.includes(z))) {
        points.pointForNumber.value = true;
    }

    const lowerCasePassword = password.toLowerCase();

    for (let i = 0; i < password.length; i++) {
        const charCodeOne = lowerCasePassword.charCodeAt(i);
        const charCodeTwo = lowerCasePassword.charCodeAt(i + 1);
        const charCodeThree = lowerCasePassword.charCodeAt(i + 2);
        const charArr = lowerCasePassword.split('');

        if (charArr[i] === charArr[i + 1] && charArr[i + 1] === charArr[i + 2]) {
            points.noRepeat.value = false;
        }
        if (charCodeOne + 1 === charCodeTwo && charCodeTwo + 1 === charCodeThree) {
            points.noSequence.value = false;
        }
        if (charCodeOne - 1 === charCodeTwo && charCodeTwo - 1 === charCodeThree) {
            points.noSequence.value = false;
        }
    }

    try {
        const response = await aiApiCall(password, sysContent);
        points.hasNoWord.value = !response.toLowerCase().includes('yes');
    } catch (error) {
        console.error('API call error:', error);
        points.hasNoWord.value = false;
    }

    for (const key in points) {
        if (points[key].value === true) {
            result += 12.5;
        }
    }

    return { result, points };
}
