module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    // This one needs to be last.
    "prettier"
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
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
