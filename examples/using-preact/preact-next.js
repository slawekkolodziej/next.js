#!/usr/bin/env node
const path = require('path')
const moduleAlias = require('module-alias')

const nextPath = require.resolve('next')
const nextBin = path.resolve(nextPath, '../../bin/next')

moduleAlias.addAliases({
  react: 'preact/compat',
  'react-dom': 'preact/compat',
  'react-ssr-prepass': 'preact-ssr-prepass',
})

console.log(require('react-dom/server'))

require(nextBin)
