import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Keep default target, but add rollup manualChunks to split large deps (icons, radix, vendors)
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // if (id.includes('tech-stack-icons')) return 'icons';
          // if (id.includes('react-icons')) return 'reacticons';
          if (id.includes('lucide-react')) return 'lucideicons';
          if (id.includes('@radix-ui')) return 'radix-ui';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
    // Don't inline SVGs above small size; keep them emitted as separate files
    assetsInlineLimit: 4096,
  },
})
