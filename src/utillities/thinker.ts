export const thinker = () => {
    // eslint-disable-next-line sonarjs/pseudo-random
    const randomIndex = Math.floor(Math.random() * thinkWords.length);
    const verb = thinkWords[randomIndex];
    return verb;
};

export const thinkWords = [
    'Denken',
    'Rechnen',
    'Überlegen',
    'Analysieren',
    'Planen',
    'Abstrahieren',
    'Interpretieren',
    'Kalkulieren',
    'Schätzen',
    'Kombinieren',
    'Spekulieren',
    'Ermitteln',
    'Nachdenken',
    'Ableiten',
    'Schlussfolgern',
    'Reflektieren',
    'Synthesieren',
];
