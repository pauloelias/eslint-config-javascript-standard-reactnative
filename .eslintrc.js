module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    es6: true,
    commonjs: true,
    jest: true
  },
  extends: [
    'standard',
    'prettier',
    'standard-jsx',
    'prettier/react',
    'plugin:react-native-a11y/all'
  ],
  rules: {
    'arrow-parens': [2, 'as-needed'],
    camelcase: 2,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-vars': [2],
    'react/jsx-no-undef': 1,
    'react-native-a11y/has-valid-accessibility-role': 1,
    'react/prop-types': 0
  },
  plugins: [
    'prettier',
    'standard',
    'react',
    'react-hooks',
    'eslint-plugin-react-native-a11y'
  ]
}
