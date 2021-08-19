# `@cylution/eslint-config-react`

```bash
yarn add -D eslint @cylution/eslint-config-react
```
## Usage

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  extends: ['@cylution/react']
}
```

## Extra step for typescript
> npm i -D @typescript-eslint/parser typescript

> yarn add -D @typescript-eslint/parser typescript

Modify `.eslintrc.js`
```js
// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@cylution/react-native']
}
```

### Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
