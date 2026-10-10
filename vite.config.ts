import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: set base to your repo name
  // e.g., if your repo is github.com/username/date-you, set base: '/date-you/'
  base: '/date you/',
})
