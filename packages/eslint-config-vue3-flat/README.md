# @cylution/eslint-config-vue3-flat

ESLint shareable config for Vue 3 (flat config style).

This package exports a flat-style ESLint configuration tailored for Vue 3 projects. Use it as a base in your project's `eslint.config.mjs` (or combine with other configs, e.g. Nuxt's generated config).

## Installation

Install the package as a dev dependency:

```bash
npm install -D @cylution/eslint-config-vue3-flat
# or
pnpm add -D @cylution/eslint-config-vue3-flat
# or
yarn add -D @cylution/eslint-config-vue3-flat
```

## Usage

Below is an example `eslint.config.mjs` that demonstrates how to combine this config with Nuxt's generated config and add project-specific overrides.

```eslint.config.mjs
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import cylutionRules from '@cylution/eslint-config-vue3-flat'

const base = Array.isArray(cylutionRules) ? cylutionRules : [cylutionRules]

export default withNuxt([
  ...base,
  {
    // project-specific overrides
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'vue/multi-word-component-names': 'off',
    },
  },
])
```

Notes:
- The package may export either an array or a single config object. The example above normalizes that into an array before composing with Nuxt's config.
- When using TypeScript-aware rules (like `@typescript-eslint/no-unused-vars`), make sure you have the relevant parser and plugins installed and configured in your project (e.g. `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`).

## Compatibility

Designed for Vue 3 projects using the flat ESLint config format. It should work with tooling that generates or composes flat configs (for example, Nuxt 3's generated `eslint.config.mjs`).

## Contributing

If you want to tweak rules or add support for additional workflows, open an issue or submit a pull request in the monorepo.


