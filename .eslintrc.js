module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  settings: { 'import/resolver': { typescript: {} } },
  rules: {
    'prettier/prettier': 'error',
    'no-implicit-coercion': 'error',
    'no-undef': 'off',
    semi: 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-const': 'error',
    'no-var': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal'], 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc' },
      },
    ],
  },
};