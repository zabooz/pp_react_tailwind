import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';
import * as zxcvbnDePackage from '@zxcvbn-ts/language-de';

export const zxcvbnTesting = (password: string) => {
    const options = {
        translations: zxcvbnEnPackage.translations,
        graphs: zxcvbnCommonPackage.adjacencyGraphs,
        dictionary: {
            ...zxcvbnCommonPackage.dictionary,
            ...zxcvbnEnPackage.dictionary,
            ...zxcvbnDePackage.dictionary,
        },
    };

    zxcvbnOptions.setOptions(options);

    return zxcvbn(password);
};

export const stats = (nerdStats: ZxcvbnResult | null) => {
    if (!nerdStats) {
        return [[], [], []];
    }
    return [
        [
            { stat: 'password', value: nerdStats.password },
            { stat: 'calcTime', value: nerdStats.calcTime },
            { stat: 'guesses', value: nerdStats.guesses },
            { stat: 'score', value: nerdStats.score },
        ],

        [
            {
                method: 'offlineFastHash',
                time: nerdStats.crackTimesDisplay.offlineFastHashing1e10PerSecond,
            },
            {
                method: 'offlineSlowHash',
                time: nerdStats.crackTimesDisplay.offlineSlowHashing1e4PerSecond,
            },
            {
                method: 'onlineNoThrottle',
                time: nerdStats.crackTimesDisplay.onlineNoThrottling10PerSecond,
            },
            {
                method: 'onlineThrottle',
                time: nerdStats.crackTimesDisplay.onlineThrottling100PerHour,
            },
        ],

        [
            { type: 'warning', message: nerdStats.feedback.warning },
            { type: 'suggestions', message: nerdStats.feedback.suggestions },
        ],
    ];
};
