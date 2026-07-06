import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base matches the GitHub Pages project path: snaglepus.github.io/mundi26/
export default defineConfig({
  plugins: [react()],
  base: '/mundi26/',
})
