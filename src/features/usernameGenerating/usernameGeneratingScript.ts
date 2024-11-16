import { dataKrakenTakes } from '../../components/login.register/backend/dataKraken';
import { englishArraysObj } from '../../data/translations/englishGenerator.data';
interface Props {
    choices: string[];
}

export const userGenerator = ({ choices }: Props) => {
    let word: string = '';
    choices.forEach((choice) => {
        const arr = englishArraysObj[choice as keyof typeof englishArraysObj];
        //eslint-disable-next-line sonarjs/pseudo-random
        const token = arr[Math.floor(Math.random() * arr.length)] as string;
        word += token.slice(0, 1).toUpperCase() + token.slice(1);
    });

    const spanFull = document.createElement('span');
    word.split('').forEach((char) => {
        if (char === char.toUpperCase()) {
            const span = document.createElement('span');
            span.className = 'text-gray-300 tracking-wider';
            span.textContent = char; // Use textContent to safely set text
            spanFull.appendChild(span);
        } else {
            const textNode = document.createTextNode(char); // Create a text node for plain text
            spanFull.appendChild(textNode);
        }
    });

    dataKrakenTakes({ col: 'generated_usernames' });
    return spanFull;
};
