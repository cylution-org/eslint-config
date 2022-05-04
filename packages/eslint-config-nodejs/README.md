# `@cylution/eslint-config-nodejs`

> npm i -D eslint@^8 @cylution/eslint-config-nodejs

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
> npm i -D @typescript-eslint/parser typescript

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
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin

# then, if `tsc` not found, open new terminal
tsc --init
```

Edit ``.eslintrc`` or ``.eslintrc.js``
```javascript
/* eslint-env node */

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
        '@typescript-eslint/type-annotation-spacing': ['warn', {
          before: false,
          after: true
        }],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none',
            requireLast: false,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
          // overrides: {
          //   interface: {
          //     multiline: {
          //       delimiter: 'none',
          //       requireLast: false
          //     }
          //   }
          // }
        }],
        '@typescript-eslint/dot-notation': ['error', {
          allowPrivateClassPropertyAccess: true,
          allowProtectedClassPropertyAccess: true,
          // allowIndexSignaturePropertyAccess: true,
        }],
      },
      overrides: [
        {
          files: ['*.d.ts'],
          rules: {
            'no-use-before-define': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            // '@typescript-eslint/ban-types': 'off',
            // '@typescript-eslint/adjacent-overload-signatures': 'off',
          },
        },
      ],
    },
  ],
  rules: {
    'dot-notation': 'off',
  },
}
```

## Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
