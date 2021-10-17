# `@cylution/eslint-config-nodejs`

> npm i -D eslint@^7 @cylution/eslint-config-nodejs

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

## Extra steps for typescript
### Normal
> npm i -D @typescript-eslint/parser@^4 typescript

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  env: {
    jest: true, // for jest
  },
  extends: [
    '@cylution/nodejs',
  ],
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
```

### Typescript recommended
```bash
npm i -D typescript \
  @typescript-eslint/parser@^4 \
  @typescript-eslint/eslint-plugin@^4

# then, if `tsc` not found, open new terminal
tsc --init
```

Edit ``.eslintrc`` or ``.eslintrc.js``
```javascript
cat > .eslintrc.js <<EOF
module.exports = {
  env: {
    jest: true,
  },
  extends: [
    '@cylution/nodejs',
  ],
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended'
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}
EOF
```

## Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
