module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'import/named': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'no-console': 'off',
		'linebreak-style': 'off',
		'global-require': 'off',
		'comma-dangle': ['off', 'never'],
		'no-undef': 'off',
		'import/newline-after-import': ['off', { count: 2 }],
		'new-cap': ['off', { newIsCap: false }],
		'max-len': [
			'error',
			{
				code: 120,
				tabWidth: 4,
			},
		],
		'prefer-destructuring': [
			'error',
			{
				array: false,
				object: false,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
	},
};
