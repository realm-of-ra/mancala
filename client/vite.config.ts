import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import react from '@vitejs/plugin-react'
import topLevelAwait from 'vite-plugin-top-level-await'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // Ensure your assets are not externalized accidentally
      external: [],
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'], // Add this line to ensure assets are included

})

