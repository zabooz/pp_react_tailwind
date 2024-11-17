import { describe, it, expect } from 'vitest';
import { passwordEncoder, passwordDecoder, characters } from '../../../src/utillities/encoder'; // replace with the actual path

describe('passwordEncoder', () => {
    it('should encode a password correctly', () => {
        const password = 'Test123!';
        const [encodedPassword, encodingKey] = passwordEncoder(password);

        expect(encodedPassword).not.toBe(password); // Encoded string should not be the same as the original password
        expect(encodingKey).toBeGreaterThanOrEqual(0); // Encoding key should be a valid number
        expect(encodingKey).toBeLessThan(characters.length); // Encoding key should be within the valid range of characters


    });
});

describe('passwordDecoder', () => {
    it('should decode the encoded password correctly', () => {
        const password = 'Test123!';
        const [encodedPassword, encodingKey] = passwordEncoder(password);

        const decodedPassword = passwordDecoder(encodedPassword, encodingKey);

        expect(decodedPassword).toBe(password); // Decoded password should match the original password
    });

    it('should return the same string for an empty password', () => {
        const password = '';
        const [encodedPassword, encodingKey] = passwordEncoder(password);

        const decodedPassword = passwordDecoder(encodedPassword, encodingKey);

        expect(decodedPassword).toBe(password); // Decoded empty password should return an empty string
    });
});
