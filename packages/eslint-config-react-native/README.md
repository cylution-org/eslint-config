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

## Note

If you have `@react-native-community/eslint-config` installed, you must remove it from `package.json`, delete `node_modules` and reinstall `yarn` or `npm i`
