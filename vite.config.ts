import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = имя репозитория: сайт живёт на https://noirehouse.github.io/kaleriya-site/
export default defineConfig({
  base: '/kaleriya-site/',
  plugins: [react()],
})
