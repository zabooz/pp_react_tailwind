import { cardMessages } from '../../features/landingPage/cards.message';

export const cardData = {
    password: {
        title: cardMessages.passwordTitle,
        subtitle: cardMessages.passwordSubtitle,
        text: cardMessages.passwordText,
        btnText: cardMessages.passwordBtnText,
        imgSrc: '/assets/landingPage/password.webp',
        imgAlt: 'Erstelle Passwort Picture',
        btnLink: '/password-generating',
    },
    testing: {
        title: cardMessages.testingTitle,
        subtitle: cardMessages.testingSubtitle,
        text: cardMessages.testingText,
        btnText: cardMessages.testingBtnText,
        imgSrc: '/assets/landingPage/testing.webp',
        imgAlt: 'Teste Passwort Picture',
        btnLink: '/password-testing',
    },
    username: {
        title: cardMessages.usernameTitle,
        subtitle: cardMessages.usernameSubtitle,
        text: cardMessages.usernameText,
        btnText: cardMessages.usernameBtnText,
        imgSrc: '/assets/landingPage/username.webp',
        imgAlt: 'Erstelle Username Picture',
        btnLink: '/username-generating',
    },
};
