const {
  mergeWithCustomize,
  customizeObject,
  customizeArray,
} = require('webpack-merge')

const commonConfig = require('./webpack.common.config')
const vue2Config = require('./webpack.vue2.config')
const vue3Config = require('./webpack.vue3.config')

const merge = mergeWithCustomize({
  customizeObject: customizeObject({
    entry: 'replace',
  }),
  customizeArray: customizeArray({
    'module.rules': 'prepend',
  }),
})

module.exports = [
  commonConfig,
  merge(commonConfig, vue2Config),
  merge(commonConfig, vue3Config),
]
