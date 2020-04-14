module.exports = {
    env: {
        'browser': true,
        'es6': true,
        'node': true
    },
    extends: [
        'airbnb-base',
        'prettier',
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    globals: {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    parserOptions: {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    plugins: [
        'react',
        'prettier'
    ],
    rules: {
      // 'prettier/prettier':  ['error', {'singleQuote': false, 'parser': 'flow'}],
      'prettier/prettier': 'error',
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }]
    }    
};