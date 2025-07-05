import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react(), tailwindcss()],
  server: {
    host: '13.61.182.119', // Replace with your desired IP address
    port: 8081,             // Optional: change the port if needed
    open: true,             // Optional: open browser on server start
  },
})
