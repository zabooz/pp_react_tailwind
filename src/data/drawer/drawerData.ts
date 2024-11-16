import { leetMessages } from '../../features/passwordGenerating/lang/leet.message';
import { listMessages } from '../../features/passwordTesting/Mojo/langDrawer/list.message';
import { simpleMessages } from '../../features/passwordTesting/Mojo/langDrawer/simple.message';



const paragraphLeet1 = leetMessages.paragraphLeet1;
const paragraphLeet2 = leetMessages.paragraphLeet2;
const paragraphLeet3 = leetMessages.paragraphLeet3;
const paragraphLeet4 = leetMessages.paragraphLeet4;
const paragraphLeet5 = leetMessages.paragraphLeet5;
export const leetspeakTextShortened = {
    title: 'Leetspeak: Bedeutung und Anwendung',
    paragraphs: [paragraphLeet1, paragraphLeet2, paragraphLeet3, paragraphLeet4, paragraphLeet5],
};

const paragraphSimple1 = simpleMessages.paragraphSimple1;
const paragraphSimple2 = simpleMessages.paragraphSimple2;
const paragraphSimple3 = simpleMessages.paragraphSimple3;

export const bruteForceAttackSimple = {
    title: 'Simpler Brute-Force-Angriff',
    paragraphs: [paragraphSimple1, paragraphSimple2, paragraphSimple3],
};


const paragraphList1 = listMessages.paragraphList1;
const paragraphList2 = listMessages.paragraphList2;
const paragraphList3 = listMessages.paragraphList3;
const paragraphList4 = listMessages.paragraphList4;

export const bruteForceAttackList = {
    title: 'Listenangriff',
    paragraphs: [paragraphList1, paragraphList2, paragraphList3, paragraphList4],
};
