module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
    ],
    rules: {

        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-console': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
