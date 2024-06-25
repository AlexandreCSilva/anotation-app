module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@rocketseat/eslint-config/node'],
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'no-undef': 'warn',
    camelcase: 'warn',
    'no-redeclare': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '_',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@/', ['parent', 'sibling'], 'index'],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        "endOfLine": "auto",
        arrowParens: 'always',
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
  },
};