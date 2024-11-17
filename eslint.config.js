import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import nounsanitized from 'eslint-plugin-no-unsanitized';
import reactPlugin from 'eslint-plugin-react';
import sonarjs from 'eslint-plugin-sonarjs';
import testingLibrary from 'eslint-plugin-testing-library';
import storybook from 'eslint-plugin-storybook';
import redos from 'eslint-plugin-redos';
import react from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';
export default [
    {
        // Ignore patterns for files that should not be linted
        // Examples:
        // - '**/jest.config*.js' -> ignores jest.config.js, jest.config.base.js
        // - '.ci/**' -> ignores all files in .ci directory and subdirectories
        // - 'dist/**' -> ignores all built files
        // - '**/*.png' -> ignores all PNG files in any directory
        ignores: [
            '**/jest.config*.js',
            '.ci/**',
            '.vscode/**',
            '.dt-app/**',
            '.git/**',
            'screenshots/**',
            'dist/**',
            'reports/**',
            'node_modules',
            'playwright-report',
            // Images
            '**/*.png',
            '**/*.jpg',
            '**/*.jpeg',
            '**/*.gif',
            '**/*.ico',
            '**/*.webp',
            // Other binary/non-JS files
            '**/*.json',
            '**/*.css',
            '**/*.scss',
            '**/*.less',
            '**/*.md',
            '**/*.svg',
            '**/build/**',
            '**/coverage/**',
            'src/playground/**/*',
            'src/components/ui/**/*',
            'src/Components/ui/**/*',
            'legacyDesign/**',
            'tailwind.config.js',
            '__tests__/**',
        ],
    },
    /* Use ESLint's recommended base configuration
     * Includes essential rules like no-unused-vars, no-undef */
    js.configs.recommended,

    /* Include all recommended TypeScript-specific rules
     * Enables static type checking and TypeScript-specific patterns */
    ...tseslint.configs.recommended,

    {
        /* Apply these rules to all TypeScript and TypeScript React files
         * Example matches:
         * - src/components/Button.tsx
         * - utils/helpers.ts */
        files: ['**/*.{ts,tsx}'],

        /* Set language options:
         * - ES2020: Support modern JavaScript features
         * - globals.browser: Include browser globals like window, document */
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },

        /* Configure all required plugins for:
         * - React Hooks linting
         * - Fast Refresh support
         * - Import/export linting
         * - Security rules
         * - React-specific rules
         * - Code quality (SonarJS)
         * - RegExp security */
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'unused-imports': unusedImports,
            'import': importPlugin,
            nounsanitized,
            'react': reactPlugin,
            sonarjs,
            redos,
        },

        /* Configure import resolution and React settings:
         * - Enable TypeScript and Node.js import resolution
         * - Auto-detect React version
         * - Set up TypeScript parser for import plugin */
        settings: {
            'import/resolver': {
                typescript: true,
                node: true,
            },
            'react': {
                version: 'detect',
            },
            'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        },

        rules: {
            /* Include recommended rules from plugins */
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
            ...sonarjs.configs.recommended.rules,
            'sonarjs/mouse-events-a11y': 'off', // Add this line to disable the rule
            /* ensure that no-unused- imports rule is enabled */
            'unused-imports/no-unused-imports': 'error',
            /* Ensure components are wrapped in React.memo() or similar for Fast Refresh
             * Example:
             * ✅ export default function Button() {}
             * ❌ export const Button = () => {} */
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            /* Use single quotes for string literals
             * ✅ const name = 'John'
             * ❌ const name = "John" */
            'quotes': ['error', 'single'],

            /* Use double quotes for JSX attributes
             * ✅ <Button type="submit" />
             * ❌ <Button type='submit' /> */
            'jsx-quotes': ['error', 'prefer-double'],

            /* Configure import order and organization
             * Example order:
             * import fs from 'fs';                  // builtin
             * import React from 'react';            // external
             * import { AppConfig } from '@/config'; // internal
             * import { Button } from '../Button';   // relative */
            // 'import/order': [
            //     'error',
            //     {
            //         'groups': ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
            //         'newlines-between': 'never',
            //         'alphabetize': {
            //             order: 'asc',
            //             caseInsensitive: true,
            //         },
            //     },
            // ],

            /* Prevent duplicate imports
             * ❌ import { Button } from './Button';
             *   import { Icon } from './Button'; */
            'import/no-duplicates': ['error'],

            /* Warn when importing deprecated packages or functions
             * Example: Using a package marked as deprecated */
            'import/no-deprecated': 'warn',

            /* Warn about declared but unused variables
             * ❌ const unused = 5; // Never used */
         

            /* TypeScript-specific unused variables warning
             * Ignores rest properties in destructuring
             * ✅ const { used, ...rest } = props; // rest can be unused */
            '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],

            /* Prevent XSS by blocking unsafe methods
             * ❌ element.innerHTML = userInput;
             * ✅ element.textContent = userInput; */
            'nounsanitized/method': 'error',
            'nounsanitized/property': 'error',

            /* Require curly braces for all control statements
             * ❌ if (condition) doSomething();
             * ✅ if (condition) { doSomething(); } */
            'curly': 'error',

            /* Require meaningful display names for components
             * ✅ MyComponent.displayName = 'MyComponent'; */
            'react/display-name': 'warn',

            /* Require key prop in iterators
             * ❌ items.map(item => <div>{item}</div>)
             * ✅ items.map(item => <div key={item.id}>{item}</div>) */
            'react/jsx-key': 'warn',

            /* Prevent comments from being interpreted as text nodes
             * ❌ <div>// comment</div> */
            'react/jsx-no-comment-textnodes': 'warn',

            /* Prevent duplicate props in JSX
             * ❌ <div className="a" className="b" /> */
            'react/jsx-no-duplicate-props': 'warn',

            /* Require rel="noopener noreferrer" with target="_blank"
             * ❌ <a href="url" target="_blank">
             * ✅ <a href="url" target="_blank" rel="noopener noreferrer"> */
            'react/jsx-no-target-blank': 'warn',

            /* Prevent usage of undefined components
             * ❌ <UndefinedComponent /> */
            'react/jsx-no-undef': 'error',

            /* Mark React as used when JSX is present */
            'react/jsx-uses-react': 'warn',

            /* Mark variables as used when used in JSX
             * const MyComponent = () => <div />; // MyComponent marked as used */
            'react/jsx-uses-vars': 'warn',

            /* Prefer children as nested elements rather than prop
             * ❌ <div children={<span>Hello</span>} />
             * ✅ <div><span>Hello</span></div> */
            'react/no-children-prop': 'warn',

            /* Prevent dangerouslySetInnerHTML with children
             * ❌ <div dangerouslySetInnerHTML={{__html: "html"}}><span /></div> */
            'react/no-danger-with-children': 'warn',

            /* Warn about deprecated React features
             * Example: componentWillMount */
            'react/no-deprecated': 'warn',

            /* Prevent direct state mutations
             * ❌ this.state.count = 5;
             * ✅ this.setState({ count: 5 }); */
            'react/no-direct-mutation-state': 'warn',

            /* Prevent usage of findDOMNode
             * ❌ findDOMNode(this) */
            'react/no-find-dom-node': 'warn',

            /* Prevent usage of isMounted
             * ❌ if (this.isMounted()) { ... } */
            'react/no-is-mounted': 'warn',

            /* Prevent usage of render's return value
             * ❌ const inst = render(<App />); */
            'react/no-render-return-value': 'warn',

            /* Prevent string refs
             * ❌ <div ref="myRef" />
             * ✅ <div ref={myRef} /> */
            'react/no-string-refs': 'warn',

            /* Warn about unescaped entities
             * ❌ <div>></div>
             * ✅ <div>&gt;</div> */
            'react/no-unescaped-entities': 'warn',

            /* Prevent invalid DOM props
             * ❌ <div customProp="value" /> */
            'react/no-unknown-property': 'warn',

            /* Warn about unsafe lifecycle methods
             * Example: componentWillUpdate */
            'react/no-unsafe': 'warn',

            /* Enforce PropTypes
             * Example: MyComponent.propTypes = { name: PropTypes.string }; */
            'react/prop-types': 'warn',

            /* Don't require React import with new JSX transform */
            'react/react-in-jsx-scope': 'off',

            /* Require render methods to return value
             * ✅ render() { return <div />; } */
            'react/require-render-return': 'warn',

            /* Allow explicit type annotations even when inferable
             * ✅ const str: string = "hello" */
            '@typescript-eslint/no-inferrable-types': 'off',

            /* Use consistent array type syntax
             * ✅ string[]
             * ❌ Array<string> */
            '@typescript-eslint/array-type': 'warn',

            /* Allow @ts- comments
             * Example: // @ts-ignore */
            '@typescript-eslint/ban-ts-comment': 'off',

            /* Don't require default exports
             * ✅ export const Component = () => <div />; */
            'import/prefer-default-export': 'off',

            /* Warn about parameter reassignment
             * ❌ function(x) { x = 5; } */
            'no-param-reassign': 'warn',

            /* Prevent variable redeclaration
             * ❌ let x = 1; let x = 2; */
            '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],

            /* Warn about alert usage
             * ❌ alert('Hello') */
            'no-alert': 'warn',

            /* Prevent eval usage
             * ❌ eval('console.log("Hello")') */
            'no-eval': 'error',

            /* Prevent ReDoS-vulnerable regular expressions
             * ❌ /^(a+)+$/ */
            'redos/no-vulnerable': 'error',
        },
    },
    /* Test file configuration */
    {
        files: ['src/**/?(*.)+(spec|test).[jt]s?(x)', 'test/integration/**/?(*.)+(spec|test).[jt]s?(x)'],
        plugins: { 'testing-library': testingLibrary },
        rules: {
            /* Include Testing Library recommended rules */
            ...testingLibrary.configs['react'].rules,
            /* Allow DOM node access in tests
             * ✅ const node = container.firstChild; */
            'testing-library/no-node-access': 'off',
        },
    },
    /* E2E and integration test configuration */
    {
        files: [
            '**/tests/e2e/**/*ts',
            '**/tests/integration/**/*ts',
            '**/*.spec.ts',
            '**/*.spec.tsx',
            '**/*.test.ts',
            '**/*.test.tsx',
        ],
        /* Disable various TypeScript checks in test files
         * This allows more flexible testing patterns */
        rules: {
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            //'@typescript-eslint/await-thenable': 'warn',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/no-unnecessary-condition': 'off',
            '@typescript-eslint/prefer-nullish-coalescing': 'off',
            '@typescript-eslint/unbound-method': 'off',
            'react-hooks/rules-of-hooks': 'off',
            'react/display-name': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            'sonarjs/no-duplicate-string': 'off',
            'redos/no-vulnerable': 'off',
            'no-alert': 'warn',
            'no-eval': 'error',
            'xss/no-mixed-html': 'off',
        },
    },
    /* Mock and Storybook file configuration */
    {
        files: ['**/*.mock.*', '**/*.stories.tsx'],
        rules: {
            ...storybook.configs.recommended.rules,
            'sonarjs/no-duplicate-string': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            'no-alert': 'off',
        },
    },
];
