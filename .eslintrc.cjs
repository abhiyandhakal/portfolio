module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"]
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser"
			}
		}
	],
	rules: {
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"@typescript-eslint/no-explicit-any": "off"
	}
};
