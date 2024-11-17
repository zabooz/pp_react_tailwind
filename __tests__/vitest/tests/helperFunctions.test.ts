import { describe, it, expect } from 'vitest';
import { capitalizeFirstLetter, rndNumInLen, getUniqueRandomWord, shuffleArray } from '../../../src/utillities/helperFunctions'// replace with the actual path

describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a string', () => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
    });

    it('should return an empty string if input is empty', () => {
        expect(capitalizeFirstLetter('')).toBe('');
    });
});

describe('rndNumInLen', () => {
    it('should return a number within the range of the array length', () => {
        const array = ['apple', 'banana', 'cherry'];
        const randomIndex = rndNumInLen(array);
        expect(randomIndex).toBeGreaterThanOrEqual(0);
        expect(randomIndex).toBeLessThan(array.length);
    });
});

describe('getUniqueRandomWord', () => {
    it('should return a random word that is not in the existing words list', () => {
        const array = ['apple', 'banana', 'cherry', 'date'];
        const existingWords = ['apple', 'banana'];
        const result = getUniqueRandomWord(array, ...existingWords);
        expect(existingWords).not.toContain(result);
        expect(array).toContain(result);
    });

    it('should return undefined if no unique word is found', () => {
        const array: string[] = [];
        const existingWords: string[] = [];
        const result = getUniqueRandomWord(array, ...existingWords);
        expect(result).toBeUndefined();
    });
});

describe('shuffleArray', () => {
    it('should shuffle the array randomly', () => {
        const array = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon'];
        const shuffled = shuffleArray([...array]); // Spread to ensure original array is not mutated
        expect(shuffled).not.toEqual(array);
        expect(shuffled.sort()).toEqual(array.sort()); // Same elements, but shuffled
    });

    it('should return the same array if it has one element', () => {
        const array = ['apple'];
        const shuffled = shuffleArray([...array]);
        expect(shuffled).toEqual(array);
    });
});
