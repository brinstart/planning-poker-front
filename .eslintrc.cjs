const warnInDevMode = process.env.STRICT ? 'error' : 'warn';

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "quotes": [
      "error",
      "single"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 0,
        "maxBOF": 0
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 0
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": warnInDevMode,
    "no-unused-vars": warnInDevMode
  },
}
