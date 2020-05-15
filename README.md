# @maiertech/eslint-config

This package provides an ESLint config for
[@maiertech](https://github.com/maiertech) projects as an extensible
[shared config](https://eslint.org/docs/developer-guide/shareable-configs). Run

    npm i -D @maiertech/eslint-config

to install. You need to manually install peer dependencies `eslint@6` and
`prettier@2` by running

    npm i -D eslint@6 prettier@2

Then create `.eslintrc` in your project root with

    {
      "extends": "@maiertech"
    }

This ESLint config is based on
[`@shopify/eslint-plugin`](https://github.com/Shopify/web-foundation/tree/master/packages/eslint-plugin),
which is a somewhat opinionated config.

Any formatting rules are delegated to [`Prettier`](https://prettier.io/) and you
can optionally add a `.prettierrc` to your project and customize your
[Prettier configuration](https://prettier.io/docs/en/configuration.html).
