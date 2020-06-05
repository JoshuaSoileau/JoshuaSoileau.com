const path = require("path");

const root = path.resolve(__dirname, "./");
const prod = process.env.NODE_ENV === "production";

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-for": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-debugger": prod ? "error" : "warn",
    "import/no-extraneous-dependencies": "off",
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        alias: {
          "~": path.resolve(root, "src"),
        },
      },
    },
  },
};
