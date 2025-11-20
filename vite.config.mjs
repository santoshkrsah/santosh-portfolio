// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',               // ← YEH LINE SABSE ZAROORI HAI!!!
  build: {
    outDir: 'dist',         // confirm karne ke liye
    assetsDir: 'assets'     // yeh bhi daal de
  }
})