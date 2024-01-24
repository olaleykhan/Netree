import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: "../server/public"
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // This maps the @lek alias to your src directory
    },
  },
})
