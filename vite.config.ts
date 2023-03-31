import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/chatapi': {
        target: 'https://api.openai.com/v1/completions',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/chatapi/, '')
      },
      },
  },
  plugins: [react()],
})
