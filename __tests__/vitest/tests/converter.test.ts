import { describe, it, expect } from 'vitest';
import { passwordConverter } from '../../../src/utillities/converter/passwordConverter'

describe('passwordConverter', () => {
    // Test leetSimple conversion
    describe('leetSimple mode', () => {
        it('converts letters to numbers correctly', () => {
            const input = {
                password: 'ate',
                mode: 'leetSimple',
            };
            expect(passwordConverter(input)).toBe('473');
        });

        it('maintains case sensitivity', () => {
            const input = {
                password: 'Cat CAT',
                mode: 'leetSimple',
            };
            expect(passwordConverter(input)).toBe('(47 (47');
        });

        it('only converts specified characters', () => {
            const input = {
                password: 'hello123',
                mode: 'leetSimple',
            };
            expect(passwordConverter(input)).toBe('h3ll0123');
        });
    });

    // Test leetAdvanced conversion
    describe('leetAdvanced mode', () => {
        it('converts basic word correctly', () => {
            const input = {
                password: 'BAT',
                mode: 'leetAdvanced',
            };
            expect(passwordConverter(input)).toBe('|347');
        });

        it('handles mixed case input', () => {
            const input = {
                password: 'Hello',
                mode: 'leetAdvanced',
            };
            expect(passwordConverter(input)).toBe('|-|3|_|_0');
        });

        it('preserves non-convertible characters', () => {
            const input = {
                password: 'Hi@123',
                mode: 'leetAdvanced',
            };
            expect(passwordConverter(input)).toBe('|-|1@i2e');
        });
    });

    // Test leetComplicated conversion
    describe('leetComplicated mode', () => {
        it('converts simple word', () => {
            const input = {
                password: 'HI',
                mode: 'leetComplicated',
            };
            expect(passwordConverter(input)).toBe('#!');
        });

        it('handles longer words', () => {
            const input = {
                password: 'TASK',
                mode: 'leetComplicated',
            };
            expect(passwordConverter(input)).toBe("'](L§(7<");
        });

        it('preserves special characters', () => {
            const input = {
                password: 'HI@123',
                mode: 'leetComplicated',
            };
            expect(passwordConverter(input)).toBe('#!@i2e');
        });
    });

    // Edge cases
    describe('edge cases', () => {
        it('handles empty string', () => {
            const input = {
                password: '',
                mode: 'leetSimple',
            };
            expect(passwordConverter(input)).toBe('');
        });

        it('handles spaces only', () => {
            const input = {
                password: '   ',
                mode: 'leetAdvanced',
            };
            expect(passwordConverter(input)).toBe('   ');
        });

        it('handles special characters only', () => {
            const input = {
                password: '@#$',
                mode: 'leetComplicated',
            };
            expect(passwordConverter(input)).toBe('@#$');
        });
    });

    // Common use cases
    describe('common use cases', () => {
        it('handles password with mix of characters', () => {
            const input = {
                password: 'Pass123!',
                mode: 'leetSimple',
            };
            expect(passwordConverter(input)).toBe('P455123!');
        });

        it('handles repeating characters', () => {
            const input = {
                password: 'LOOP',
                mode: 'leetAdvanced',
            };
            expect(passwordConverter(input)).toBe('|_00|°');
        });

        it('handles consecutive special characters', () => {
            const input = {
                password: 'TEST!!',
                mode: 'leetAdvanced',
            };
            expect(passwordConverter(input)).toBe('7357??');
        });
    });
});
