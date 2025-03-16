import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ], server: {
    host: true, // This makes it accessible on your local network
    port: 5173, // Change the port if needed
  },
})
