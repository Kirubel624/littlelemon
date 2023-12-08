import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './tests/setup.js',
   },
})
