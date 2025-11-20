import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // ← YEH CHANGE KAR DE './' se '/' kar de
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})