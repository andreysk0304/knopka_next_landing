module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier'],
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {}, // чтобы ESLint понимал ts/tsx импорты
		},
	},
	rules: {
		'prettier/prettier': ['off'],
		'react/function-component-definition': 'off',
		'react/prop-types': 'off',
		'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
		'react/jsx-props-no-spreading': 'off',
		'react/no-array-index-key': 'off',
		'import/prefer-default-export': 'off',
		'react/no-unescaped-entities': 'off',
		'react/react-in-jsx-scope': 'off', // для Next.js
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		semi: ['error', 'never'],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				js: 'never',
				jsx: 'never',
			},
		],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				indent: ['error', 'tab', { SwitchCase: 1 }],
			},
		},
	],
}
