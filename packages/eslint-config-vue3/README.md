# `@cylution/eslint-config-vue3`

```bash
npm i -D eslint @cylution/eslint-config-vue3
```
## Usage

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  root: true,
  extends: ['@cylution/vue3'],
  env: {
    "vue/setup-compiler-macros": true,
  },
}
```

### Typescript
> npm i -D typescript @vue/eslint-config-typescript

### Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
