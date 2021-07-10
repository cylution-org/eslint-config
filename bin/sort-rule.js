#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const moduleName = process.argv[2]
if (moduleName == null || moduleName.trim().length === 0) {
  console.log(`Usage: sort-rule [module-name]`)
  process.exit(1)
}

const file = path.resolve(__dirname, `../packages/${moduleName.startsWith('eslint-config-') ? moduleName : `eslint-config-${moduleName}`}/index.js`)
const esConfig = require(file)
esConfig.rules = Object
  .keys(esConfig.rules)
  .sort((a, b) => {
    if (a.indexOf('/') !== -1) {
      if (b.indexOf('/') === -1) {
        return -1
      }
    } else if (b.indexOf('/') !== -1) {
      return 1
    }
    return a < b ? -1 : 1
  })
  .reduce((conf, key) => {
    conf[key] = esConfig.rules[key]
    return conf
  }, {})

fs.writeFileSync(file, `module.exports = ${JSON.stringify(esConfig, null, 2)}`)
