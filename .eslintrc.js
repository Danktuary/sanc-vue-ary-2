module.exports = {
	'extends': 'sora/vue',
	env: {
		browser: true,
		node: true,
	},
	rules: {
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'always',
		}],
	},
};
