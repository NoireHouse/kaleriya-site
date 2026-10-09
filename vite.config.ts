import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = имя репозитория: сайт живёт на https://noirehouse.github.io/kaleriya-site/
// Одна страница: язык переключается на лету (src/i18n), тексты в src/content/<язык>.ts
export default defineConfig({
  base: '/kaleriya-site/',
  plugins: [react()],
})
