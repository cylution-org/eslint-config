# `@cylution/eslint-config-nodejs`

> npm i -D eslint @cylution/eslint-config-nodejs

## Usage

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  env: {
    jest: true, // for jest
  },
  extends: [
    '@cylution/nodejs',
  ]
}
```

## For typescript
> npm i -D @typescript-eslint/parser typescript

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  env: {
    jest: true, // for jest
  },
  parser: '@typescript-eslint/parser',
  extends: [
    '@cylution/nodejs',
  ]
}
```

### Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
