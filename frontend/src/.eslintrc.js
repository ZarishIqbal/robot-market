module.exports = {
  plugins: ["@typescript-eslint/eslint-plugin", "react", "prettier"],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": ["warn"],
    camelcase: [0, { properties: "never" }],
    "@typescript-eslint/camelcase": [0, { properties: "never" }],
    "react/prop-types": [0],
    "@typescript-eslint/no-use-before-define": [0],
    "@typescript-eslint/ban-ts-comment": [0, { properties: "never" }],
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
        },
      },
    ],
    "prefer-const": [0],
    "@typescript-eslint/prefer-const": [0, { destructuring: "any" }],
    "@typescript-eslint/explicit-function-return-type": [0],
    "@typescript-eslint/no-explicit-any": [0],
    "react/display-name": ["warn"],
    "react/no-unescaped-entities": ["warn"],
    "react/no-deprecated": ["warn"],
    "@typescript-eslint/no-empty-interface": ["warn"],
    "react/jsx-key": ["warn"],
    "@typescript-eslint/no-extra-semi": ["warn"],
    "@typescript-eslint/no-empty-function": [0],
    "@typescript-eslint/no-unused-vars": [0],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
