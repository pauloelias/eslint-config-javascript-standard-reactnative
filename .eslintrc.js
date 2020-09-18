module.exports = {
  extends: [
    '@pauloelias/eslint-config-javascript-standard-core',
    'standard-jsx',
    'prettier',
    'prettier/react',
    'plugin:react-native-a11y/all'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'react-native-a11y/has-valid-accessibility-role': 1
  },
  plugins: ['react', 'react-hooks', 'eslint-plugin-react-native-a11y']
}
