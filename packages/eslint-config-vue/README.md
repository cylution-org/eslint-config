# `@cylution/eslint-config-vue`

```bash
yarn add -D eslint@^7 @cylution/eslint-config-vue
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
### Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
