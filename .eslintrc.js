module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {

        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        "indent": ["error", 4],
        // "linebreak-style": ["error", "unix"],
        // "quotes": ["error", "double"],
        // "semi": ["error", "always"],

        // "comma-dangle": ["error", "always"],
        // "no-cond-assign": ["error", "always"],

        "no-console": "off",
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
