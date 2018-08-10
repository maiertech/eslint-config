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
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.js", "**/*.stories.jsx", "*.js"]
      }
    ],
    "react/jsx-one-expression-per-line": "off"
  }
};
