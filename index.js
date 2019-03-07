module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  env: {
    browser: true,
    jest: true,
    node: true
  },
  rules: {
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true
      }
    ],
    "react/jsx-one-expression-per-line": "off"
  }
};
