/// <reference types="vitest" />
/// <reference types="vite/client" />

//@ts-ignore
import {resolve} from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

//@ts-ignore
const root = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    root: '.',
    environment: 'jsdom',
    include: ['{src,test}/**/*.test.tsx'],
    exclude: [],
    setupFiles: './vitest.setup.ts',
    pool: 'vmThreads',
    watch: false,
    silent: true,
    logHeapUsage: false,
    passWithNoTests: true,
    coverage: {
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.tsx'],
      provider: 'istanbul',
      reporter: ['text-summary', 'html', 'lcov'],
      thresholds: {
        statements: 100
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(root, 'src'),
      '~': resolve(root, 'test')
    }
  },
  build: {
    minify: true,
    modulePreload: false
  }
})
