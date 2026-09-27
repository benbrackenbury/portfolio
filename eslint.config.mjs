import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import nextPlugin from '@next/eslint-plugin-next'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

export default [...next, ...nextCoreWebVitals, ...nextTypescript, {
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    parser: typescriptEslintParser,
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
    'unused-imports': unusedImportsPlugin,
  },
  rules: {
    ...nextPlugin.configs['core-web-vitals'].rules,
    '@typescript-eslint/no-explicit-any': ['error'],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];
