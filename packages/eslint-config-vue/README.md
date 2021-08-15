# `@cylution/eslint-config-vue`

```bash
yarn add -D eslint @cylution/eslint-config-vue
```
## Usage

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  extends: ['@cylution/vue']
}
```

Or execute command
```bash
cat > .eslintrc.js <<EOF
module.exports = {
  extends: ['@cylution/vue']
}
EOF
```

## Note

If you have `@vue-community/eslint-config` installed, you must remove it from `package.json`, delete `node_modules` and reinstall (run `yarn` or `npm i`)
