import { cpSync, existsSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function githubPagesSpaFallback(): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const index = 'dist/index.html'
      if (existsSync(index)) {
        cpSync(index, 'dist/404.html')
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
  base: '/Guild/',
})
