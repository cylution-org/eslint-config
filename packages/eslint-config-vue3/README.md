# `@cylution/eslint-config-vue3`

```bash
npm i -D eslint @cylution/eslint-config-vue3
```
### Typescript
> npm i -D typescript @vue/eslint-config-typescript

## Usage

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
module.exports = {
  root: true,
  extends: ['@cylution/vue3'],
  env: {
    "vue/setup-compiler-macros": true,
  },
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
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
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: [
        'plugin:@vue/typescript'
      ]
    },
  ],
}
```

### Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
