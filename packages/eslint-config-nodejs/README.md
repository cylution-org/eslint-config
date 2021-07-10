# `@cylution/eslint-config-nodejs`

> npm i -D eslint @cylution/eslint-config-nodejs

## Usage

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  extends: [
    '@cylution/nodejs',
  ]
}
```

## For typescript
> npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@cylution/nodejs',
  ]
}
```
