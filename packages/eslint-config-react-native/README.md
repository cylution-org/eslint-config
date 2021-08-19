# `@cylution/eslint-config-react-native`

```bash
yarn add -D eslint @cylution/eslint-config-react-native
```
## Usage

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  extends: ['@cylution/react-native']
}
```

Or execute command
```bash
cat > .eslintrc.js <<EOF
module.exports = {
  extends: ['@cylution/react-native']
}
EOF
```

## Extra step for typescript
> npm i -D @typescript-eslint/parser typescript

> yarn add -D @typescript-eslint/parser typescript

### Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
