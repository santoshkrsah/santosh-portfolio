import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // ← Yeh relative paths ke liye zaroori
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})