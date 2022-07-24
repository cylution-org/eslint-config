# `@cylution/eslint-config-react-native`

```bash
yarn add -D eslint @cylution/eslint-config-react-native
```
## Usage

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  extends: ['@cylution/react-native'],
  rules: {
    'react/jsx-closing-bracket-location': [1, {
      nonEmpty: 'tag-aligned',
      selfClosing: 'line-aligned',
    }]
  },
}
```

## Extra step for typescript
> npm i -D @typescript-eslint/parser typescript

> yarn add -D @typescript-eslint/parser typescript

Modify `.eslintrc.js`
```js
// .eslintrc.js
module.exports = {
  extends: ['@cylution/react-native'],
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'react/jsx-closing-bracket-location': [1, {
          nonEmpty: 'tag-aligned',
          selfClosing: 'line-aligned',
        }]
      },
    },
  ],
}
```

### Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
