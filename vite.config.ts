import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/ТВОЙ_РЕПОЗИТОРИЙ/', // не забудь указать имя репозитория для gh-pages
})