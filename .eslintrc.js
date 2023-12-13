/* eslint-disable no-undef */
module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react', 'prettier', '@typescript-eslint', 'simple-import-sort', 'import'],
    rules: {
        indent: 'off',
        semi: ['error', 'always'],
        'no-console': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': 0,
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                printWidth: 120,
                semicolons: true,
                semi: true,
                endOfLine: 'auto',
                bracketSpacing: true,
                indent: 'off',
            },
        ],
    },
    settings: {
        react: { version: 'detect' },
    },
};
