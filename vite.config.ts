import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
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
  plugins: [
    react(),
     federation({
      name: "my-dashboard",
      remotes: {
        remote: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
})
