# `@cylution/eslint-config-vue3`

## install
```bash
npm i -D  eslint typescript \
          @cylution/eslint-config-vue3 \
          @vue/eslint-config-typescript \
          @typescript-eslint/eslint-plugin \
          @typescript-eslint/parser
```

## Usage

Edit ``.eslintrc`` or ``.eslintrc.js``
```js
/* eslint-env node */

module.exports = {
  root: true,
  extends: ['@cylution/vue3'],
  parser: 'vue-eslint-parser',
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    // 'dot-notation': 'off',
  },
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/type-annotation-spacing': ['warn', {
          before: false,
          after: true,
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
}
```

### Note
If you get error message like: `Could not load/find module eslint-blahblah`, please remove `node_modules` and run `npm install` or `yarn` to reinstall packages
