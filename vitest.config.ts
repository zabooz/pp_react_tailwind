// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        setupFiles: './__tests__/vitest/setup.ts',
        include: [
            // Unit tests in src directory
            '__tests__/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
            // Integration tests in dedicated directory
            'test/integration/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        ],
        // Excludes node_modules, dist, and any other test directories
        exclude: ['**/node_modules/**', '**/dist/**', 'test/e2e/**', 'test/fixtures/**'],
        // Optional: Set up different test environments
        environmentMatchGlobs: [
            // Run integration tests with a different environment if needed
            ['test/integration/**', 'node'],
            // Run unit tests with default environment
            ['src/**', 'jsdom'],
        ],
        // Optional: Set up coverage
        coverage: {
            include: ['src/components/**', 'test/integration/**'],
            exclude: ['**/*.test.*', '**/*.spec.*', 'src/components/ui/**'],
        },
    },
});
