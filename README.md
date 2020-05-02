# @maiertech/eslint-config

This package provides an ESLint config for
[@maiertech](https://github.com/maiertech) projects as an extensible
[shared config](https://eslint.org/docs/developer-guide/shareable-configs). Run

```bash
yarn add --dev @maiertech/eslint-config
```

to install. You need to manually install all `peerDependencies` as
`devDependencies` in your project. Then create `.eslintrc` and add

```bash
{
  "extends": "@maiertech"
}
```

This config is based on
[`eslint-config-react-app`](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app),
which is a rather unopinionated config. For instance, `eslint-config-react-app`
does not mandate using semicolons or not and generally leaves the formatting up
to the user. The idea is that you delgate formatting to
[`Prettier`](https://prettier.io/) and let [ESLint](https://eslint.org/) take
care of everything else. To make sure that ESLint and Prettier can coexist,
`@maiertech/eslint-config` turns off any rules that interfere with Prettier.
