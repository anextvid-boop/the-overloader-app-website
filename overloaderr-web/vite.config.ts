import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force reload trigger: 2026-04-17-1759
export default defineConfig({
  plugins: [react()],
  base: '/the-overloader-app-website/',
})
