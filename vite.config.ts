import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// base = имя репозитория: сайт живёт на https://noirehouse.github.io/kaleriya-site/
// Две страницы: / (русский) и /uk/ (украинский). Язык берётся из <html lang>.
export default defineConfig({
  base: '/kaleriya-site/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        ru: fileURLToPath(new URL('./index.html', import.meta.url)),
        uk: fileURLToPath(new URL('./uk/index.html', import.meta.url)),
      },
    },
  },
})
