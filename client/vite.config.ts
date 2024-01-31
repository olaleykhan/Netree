import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: "../public"
  },
  plugins: [react()],
  server:{
    host: true,
    port:3000,
    watch:{
      usePolling: true
    },
  },
  resolve: {
    alias: {
      "@": "/src", // This maps the @lek alias to your src directory
    },
  },
})
