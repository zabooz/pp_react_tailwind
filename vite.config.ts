// vite.config.ts
// / <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
                    babel: {
                plugins: ['macros'],
            },
        
    }),eslintPlugin()],
        resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
