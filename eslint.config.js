import js from '@eslint/js'
import * as importPlugin from 'eslint-plugin-import-x'
import * as react from 'eslint-plugin-react'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import * as reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      importPlugin.flatConfigs.recommended,
      react.default.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.default.configs.vite,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'import-x/no-unresolved': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
    },
  },
])
