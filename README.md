# @mdotasia/eslint-config

This package provides my ESLint config as an extensible [shared config](https://eslint.org/docs/developer-guide/shareable-configs). Run

    yarn add --dev @mdotasia/eslint-config

to install. ESLint is required as `peerDependency`.

Create a `.eslintrc` in your project and add

    {
      "extends": "@mdotasia"
    }

A note on the [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md) rule. `devDependencies` can be imported into the following files:

- Any Storybook files: `**/*.stories.jsx`.
- Any test files: `**/*.test.js`.
- Any config files: `config/**/*.js`.

Importing `devDependencies` into any other files triggers an error.
