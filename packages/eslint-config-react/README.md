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

Or execute command
```bash
cat > .eslintrc.js <<EOF
module.exports = {
  extends: ['@cylution/react']
}
EOF
```

### Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
