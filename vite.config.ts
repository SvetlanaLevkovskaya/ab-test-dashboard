import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const aliasFolders = [
  'assets',
  'api',
  'constants',
  'components',
  'config',
  'hooks',
  'pages',
  'utils',
]

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      ...Object.fromEntries(
        aliasFolders.map((v) => [`@${v}`, `${path.resolve(__dirname, `./src/${v}/`)}`])
      ),
      '@public': `${path.resolve(__dirname, './public/')}`,
    },
  },
})
