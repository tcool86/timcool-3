import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import astro from 'eslint-plugin-astro';

export default [
	{
		ignores: [
			'dist/**',
			'.astro/**',
			'node_modules/**',
			'playwright-report/**',
			'test-results/**',
			'coverage/**',
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		plugins: {
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
		},
	},
	{
		files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},
];
