import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/welcome.dailybasislife.com/',
  server: {
    port: 3000,
    host: true
  }
}))
