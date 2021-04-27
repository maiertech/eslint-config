# @maiertech/eslint-config

[![NPM version](https://img.shields.io/npm/v/@maiertech/eslint-config.svg)](https://www.npmjs.com/package/@maiertech/eslint-config)

This package provides an ESLint config for
[@maiertech](https://github.com/maiertech) projects as an extensible
[shared config](https://eslint.org/docs/developer-guide/shareable-configs). Run

    npm i -save-dev eslint @maiertech/eslint-config

to install. Then create `.eslintrc.json` in your project root with

    {
      "extends": "@maiertech"
    }

or add a `eslintConfig` prop with the same content to your `package.json`.

This ESLint config is based on
[eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app):

- It comes with
  [these accessibility checks enabled](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app#accessibility-checks).
- It comes with [Jest](https://jestjs.io/) support.
- It does not contain any formatting rules. Check
  [here](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically)
  for the recommended setup to use [Prettier](https://prettier.io/) for
  formatting. You can use
  [@maiertech/prettier-config](https://github.com/maiertech/prettier-config) as
  your Prettier config.

## ESM support

This package supports CJS only, because
[ESLint does not support ESM configuration at this time](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats).
