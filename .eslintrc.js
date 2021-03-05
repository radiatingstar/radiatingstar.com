module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:unicorn/recommended",
    "plugin:testing-library/recommended",
    'plugin:@typescript-eslint/recommended',
    // This one needs to be last.
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  "env": {
    "browser": true,
    "es6": true,
  },
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}
