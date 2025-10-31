import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // ✅ Important for Netlify and static hosts
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', // ✅ Ensure all final files go here
  },
})
