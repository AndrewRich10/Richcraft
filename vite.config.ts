import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '',
  root: './',
  publicDir: 'public',
  plugins: [react(), svgr()],
  server: { 
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173, // Optional: specify a port
  }
})
