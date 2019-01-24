module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  env: {
    jest: true
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
