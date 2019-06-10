module.exports = {
  "extends": [
    "@pauloelias/eslint-config-javascript-standard-core",
    "standard-jsx",
    "prettier/react",
    "plugin:react-native-a11y/recommended",
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true
      }
    ],
    "react-native-a11y/has-valid-accessibility-role": 1
  },
  "plugins": ["prettier", "react", "react-hooks", "eslint-plugin-react-native-a11y"]
}
