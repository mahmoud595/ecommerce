// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: [
		'expo',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript'
	],
	plugins: [
		'import'
	],
	ignorePatterns: ['/dist/*'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'import/no-unused-modules': 'warn'
	},
}; 