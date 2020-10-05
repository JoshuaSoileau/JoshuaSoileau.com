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
  extends: [
    "airbnb",
    "plugin:jest/recommended",
    "plugin:wdio/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    fuse: "readonly",
    tagular: "readonly",
    cohesion: "readonly",
    wp: "readonly",
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
  plugins: ["react", "jest", "wdio"],
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-for": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-debugger": prod ? "error" : "warn",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/*.test.jsx",
          "./react-test-library.config.js",
        ],
      },
    ],
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
          "@js": path.resolve(root, "wp-content/themes/allconnect/js"),
          "@preamp": path.resolve(root, "wp-content/themes/allconnect/preamp"),
        },
      },
    },
  },
};
