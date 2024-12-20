import { api } from '../../../../api/api.js';
import { passwordEncoder } from '../../../../utillities/encoder.js';

export async function aiApiCall(userContent: string, sysContent: string) {
    const [encodedPwd, key] = passwordEncoder(userContent);
    const content = sysContent;
    const urlPara = `/apiCall?pwd=${encodedPwd}&key=${key}&sysContent=${content}`;

    try {
        const response = await api.get(urlPara);
        if (response.status === 200) {
            const result = response.data;
            const formattedResult = result
                .split('. ')
                .map((sentence: string) => `<p>${sentence.trim()}.</p>`)
                .join('');
            return formattedResult;
        } else if (response.status === 429) {
            console.warn('Rate limit exceeded. No body returned.');
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
