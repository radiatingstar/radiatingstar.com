module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:unicorn/recommended",
    // This one needs to be last.
    "prettier"
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
  ],
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
