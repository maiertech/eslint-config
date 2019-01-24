# @mdotasia/eslint-config

This package provides my ESLint config as an extensible [shared config](https://eslint.org/docs/developer-guide/shareable-configs). Run

    npm install @mdotasia/eslint-config --save-dev

to install. ESLint is required as `peerDependency`.

Create a `.eslintrc` in your project and add

    {
      "extends": "@mdotasia"
    }

I removed the [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md) rule. This rule can be overridden in your project if you have a very good reason to import `devDependencies` in your code outside the `test` folder.
